<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>PrefBoard</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container fluid>
      <v-row>
        <v-col cols="5" class="pt-0 mt-0 mr-0 pt-0">
          <v-col cols="12" class="my-0">
            <v-card>
              <canvas id="barChart"></canvas>
            </v-card>
          </v-col>
          <v-col cols="12" class="my-0 py-0">
            <v-card v-show="selectedDimensions.length > 0">
              <v-select
                v-show="false"
                v-model="selectedDimensions"
                :items="sortedDimensions"
                label="Select Dimensions"
                chips
                solo
                multiple
              ></v-select>
              <div id="venn"></div>
            </v-card>
          </v-col>
        </v-col>
        <v-col cols="7" class="pa-0 ma-0">
          <v-col cols="12" class="pl-0 ml-0">
            <v-card class="pl-0 ml-0">
              <!--<v-row class="mt-0 pt-0">
                <v-col cols="10" class="my-0 py-0">
                  <v-select
                    v-model="selectedUser"
                    :items="areaUsers"
                    label="Select User"
                    solo
                  ></v-select>
                </v-col>
                <v-col cols="2" class="my-0 py-0">
                  <v-switch
                    v-model="isShowValues"
                    label="Show Values"
                  ></v-switch>
                </v-col>
              </v-row>
              <div class="pl-0 ml-0" id="heatMap"></div>-->
              <canvas id="stackedBarChart"></canvas>
            </v-card>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const venn = require("venn.js");
const d3 = require("d3");
import "parcoord-es/dist/parcoords.css";
import Chart from "chart.js";

export default {
  name: "Home",

  data: () => ({
    sets: [],
    prefs: [],
    usersNumber: 5,
    alternativesNumber: 249,
    usersCombinations: [],
    dimensions: [
      "Cantilever",
      "Commercial Floor Area",
      "Energy Use",
      "Height",
      "Max Wind Load",
      "Net Solar",
      "Residential Floor Area",
      "Retail Floor Area",
      "Shading Output",
      "Total Floor Area",
      "Usable Space",
      "Views/Floor Area",
      "Volume/Floor Area",
      "Volume/Surface Area",
      "Width Change"
    ],
    comparsionDimensions: [],
    selectedDimensions: [],
    pcAlternatives: [],
    pcChart: null,
    heatMapData: [],
    heatMapDataAlt: [],
    usersColors: ["#1f76b4", "#ff7e0e", "#2ca02c", "#d62727", "#9367bd"],
    activeTab: 0,
    selectedUser: null,
    users: [
      "Designer 1",
      "Designer 2",
      "Stakeholder 1",
      "Stakeholder 2",
      "City"
    ],
    areaUsers: [],
    selectedAreaAlternativesStrings: [],
    alternativesInArrayFormat: [],
    isShowValues: false,
    sortedDimensions: []
  }),
  computed: {
    alternatives() {
      return this.$store.getters.alternatives;
    }
  },
  mounted() {
    this.$store.dispatch("getAlternatives");
    this.prefs = this.generateUsersPrefs(
      this.usersNumber,
      this.alternativesNumber,
      this.dimensions.length
    );
    this.usersCombinations = this.combinations(this.getUsersIndicesArray());
    this.drawBarChart();
    this.selectedDimensions.push(this.sortedDimensions[0]);
    this.drawStackedBarChart();
  },
  watch: {
    selectedDimensions() {
      let dimensions = [];
      this.selectedDimensions.forEach(d => {
        dimensions.push(this.dimensions.indexOf(d));
      });
      this.comparsionDimensions = dimensions;
      this.setupDimension();
    },
    selectedUser() {
      this.setupHeatMap();
    },
    alternatives() {
      let res = [];
      this.alternatives.forEach(alt => {
        let altArray = [
          alt["Cantilever"],
          alt["ComFlrArea"],
          alt["EnergyUse"],
          alt["Height"],
          alt["MaxWindLoad"],
          alt["NetSolar"],
          alt["ResFlrArea"],
          alt["RetFlrArea"],
          alt["ShadingOutput"],
          alt["TotalFlrArea"],
          alt["UsableSpace"],
          alt["ViewspFlrArea"],
          alt["VolpFlrArea"],
          alt["VolpSrfArea"],
          alt["WidthChange"]
        ];
        res.push(altArray);
      });
      this.alternativesInArrayFormat = res;
    },
    areaUsers() {
      this.selectedUser = this.areaUsers[0];
      this.setupHeatMap();
    },
    isShowValues() {
      this.drawHeatMapAlt();
    }
  },
  methods: {
    setupDimension() {
      this.sets = this.generateVennSets(this.comparsionDimensions);
      this.drawVenn();
    },
    setupHeatMap() {
      this.setHeatMapDataAlt(
        this.users.indexOf(this.selectedUser),
        this.comparsionDimensions
      );
      this.drawHeatMapAlt();
    },
    generateUsersPrefs(usersNumber, alternativesNumber, dimensionsNumber) {
      let usersPrefs = [];
      for (let i = 0; i < usersNumber; i++) {
        usersPrefs.push(
          this.generateDimensionPrefs(alternativesNumber, dimensionsNumber)
        );
      }
      return usersPrefs;
    },
    generateDimensionPrefs(alternativesNumber, dimensionsNumber) {
      let dimensionPrefs = [];
      for (let i = 0; i < dimensionsNumber; i++) {
        dimensionPrefs.push(this.generateAlternativePrefs(alternativesNumber));
      }
      return dimensionPrefs;
    },
    generateAlternativePrefs(alternativesNumber) {
      let alternativePrefs = [];
      for (let i = 0; i < alternativesNumber; i++) {
        alternativePrefs.push(this.getRandomBoolean());
      }
      return alternativePrefs;
    },
    getRandomBoolean() {
      return Math.random() >= 0.65;
    },
    generateVennSets(dimensions) {
      let sets = [];
      for (let i = 0; i < this.usersCombinations.length; i++) {
        sets.push(this.getVennSet(this.usersCombinations[i], dimensions));
      }
      return sets;
    },
    getUsersIndicesArray() {
      let res = [];
      for (let i = 0; i < this.usersNumber; i++) {
        res.push(i);
      }
      return res;
    },
    getVennSet(combination, dimensions) {
      let alternativePrefsByDimension = [];
      dimensions.forEach(d => {
        for (let i = 0; i < combination.length; i++) {
          alternativePrefsByDimension.push(this.prefs[combination[i]][d]);
        }
      });

      return {
        sets: this.getCombinationUserStrings(combination),
        size: this.countTrueElements(
          this.andAllArrays(alternativePrefsByDimension)
        )
      };
    },
    getCombinationUserStrings(combination) {
      let strings = [];
      for (let i = 0; i < combination.length; i++) {
        strings.push(this.users[parseInt(combination[i])]);
      }
      return strings;
    },
    andAllArrays(arrays) {
      if (arrays.length == 1) return arrays[0];
      let res = this.andTwoArrays(arrays[0], arrays[1]);
      for (let i = 2; i < arrays.length; i++) {
        res = this.andTwoArrays(res, arrays[i]);
      }
      return res;
    },
    andTwoArrays(array1, array2) {
      let res = [];
      for (let i = 0; i < array1.length; i++) {
        res[i] = array1[i] && array2[i];
      }
      return res;
    },
    countTrueElements(array) {
      let count = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i]) count++;
      }
      return count;
    },
    combinations(set) {
      var k, i, combs, k_combs;
      combs = [];

      // Calculate all non-empty k-combinations
      for (k = 1; k <= set.length; k++) {
        k_combs = this.k_combinations(set, k);
        for (i = 0; i < k_combs.length; i++) {
          combs.push(k_combs[i]);
        }
      }
      return combs;
    },
    k_combinations(set, k) {
      var i, j, combs, head, tailcombs;

      // There is no way to take e.g. sets of 5 elements from
      // a set of 4.
      if (k > set.length || k <= 0) {
        return [];
      }

      // K-sized set has only one K-sized subset.
      if (k == set.length) {
        return [set];
      }

      // There is N 1-sized subsets in a N-sized set.
      if (k == 1) {
        combs = [];
        for (i = 0; i < set.length; i++) {
          combs.push([set[i]]);
        }
        return combs;
      }

      // Assert {1 < k < set.length}

      // Algorithm description:
      // To get k-combinations of a set, we want to join each element
      // with all (k-1)-combinations of the other elements. The set of
      // these k-sized sets would be the desired result. However, as we
      // represent sets with lists, we need to take duplicates into
      // account. To avoid producing duplicates and also unnecessary
      // computing, we use the following approach: each element i
      // divides the list into three: the preceding elements, the
      // current element i, and the subsequent elements. For the first
      // element, the list of preceding elements is empty. For element i,
      // we compute the (k-1)-computations of the subsequent elements,
      // join each with the element i, and store the joined to the set of
      // computed k-combinations. We do not need to take the preceding
      // elements into account, because they have already been the i:th
      // element so they are already computed and stored. When the length
      // of the subsequent list drops below (k-1), we cannot find any
      // (k-1)-combs, hence the upper limit for the iteration:
      combs = [];
      for (i = 0; i < set.length - k + 1; i++) {
        // head is a list that includes only our current element.
        head = set.slice(i, i + 1);
        // We take smaller combinations from the subsequent elements
        tailcombs = this.k_combinations(set.slice(i + 1), k - 1);
        // For each (k-1)-combination we join it with the current
        // and store it to the set of k-combinations.
        for (j = 0; j < tailcombs.length; j++) {
          combs.push(head.concat(tailcombs[j]));
        }
      }
      return combs;
    },
    drawVenn() {
      let chart = venn.VennDiagram();
      chart.width(800).height(450);
      let div = d3.select("#venn");
      div.datum(this.sets).call(chart);

      let tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "venntooltip");

      div
        .selectAll("g")
        .on("mouseover", function(d) {
          // sort all the areas relative to the current item
          venn.sortAreas(div, d);

          // Display a tooltip with the current size
          tooltip
            .transition()
            .duration(400)
            .style("opacity", 0.9);
          tooltip.text(d.size + " alternatives");

          // highlight the current path
          var selection = d3
            .select(this)
            .transition("tooltip")
            .duration(400);
          selection
            .select("path")
            .style("stroke-width", 3)
            .style("fill-opacity", d.sets.length == 1 ? 0.4 : 0.1)
            .style("stroke-opacity", 1);
        })

        .on("mousemove", function() {
          tooltip
            .style("left", d3.event.pageX + "px")
            .style("top", d3.event.pageY - 28 + "px");
        })

        .on("mouseout", function(d) {
          tooltip
            .transition()
            .duration(400)
            .style("opacity", 0);
          var selection = d3
            .select(this)
            .transition("tooltip")
            .duration(400);
          selection
            .select("path")
            .style("stroke-width", 0)
            .style("fill-opacity", d.sets.length == 1 ? 0.25 : 0.0)
            .style("stroke-opacity", 0);
        })

        .on("click", d => {
          this.onVennClick(d.sets);
        });
    },
    getAlternativesFromIndicesArray(areaAlternativesIndices) {
      let res = [];
      this.alternatives.forEach(alt => {
        let index = alt.index - 1;
        if (areaAlternativesIndices.includes(index)) {
          res.push(alt);
        }
      });
      return res;
    },
    onVennClick(sets) {
      let usersIndices = this.getUsersIndicesFromStrings(sets);
      this.areaUsers = this.getAreaUsers(usersIndices);
      let areaAlternativesIndices = this.getAlternativesIndiciesAtArea(
        usersIndices
      );
      this.pcAlternatives = this.getAlternativesFromIndicesArray(
        areaAlternativesIndices
      );
    },
    getAlternativesIndiciesAtArea(usersIndices) {
      let usersArrays = [];

      this.comparsionDimensions.forEach(d => {
        usersIndices.forEach(userIndex => {
          usersArrays.push(this.prefs[userIndex][d]);
        });
      });

      let andRes = this.andAllArrays(usersArrays);
      let alternativesIndicies = [];
      andRes.forEach((alt, index) => {
        if (alt) {
          alternativesIndicies.push(index);
        }
      });
      return alternativesIndicies;
    },
    getUsersIndicesFromStrings(array) {
      return array.map(userString => {
        return this.users.indexOf(userString);
      });
    },
    deletePc() {
      let pc = document.querySelector("#pc");
      while (pc.firstChild) {
        pc.removeChild(pc.firstChild);
      }
    },
    deleteHeatMap() {
      let heatMap = document.querySelector("#heatMap");
      while (heatMap.firstChild) {
        heatMap.removeChild(heatMap.firstChild);
      }
    },
    setHeatMapDataAlt(user) {
      let res = [];
      let alternativesStrings = [];
      this.prefs[user].forEach((dimension, j) => {
        this.pcAlternatives.forEach(alt => {
          let prefIndex = alt.index - 1;
          let prefValue = this.prefs[user][j][prefIndex];
          let color = prefValue ? this.usersColors[user] : "#c2c5cc40";
          res.push([
            "A" + prefIndex,
            this.dimensions[j],
            color,
            this.alternativesInArrayFormat[prefIndex][j]
          ]);
          alternativesStrings.push("A" + prefIndex);
        });
      });
      this.selectedAreaAlternativesStrings = alternativesStrings;
      this.heatMapDataAlt = res;
    },
    drawHeatMapAlt() {
      this.deleteHeatMap();
      let hmHeight = this.pcAlternatives.length * 50 + 100;
      // set the dimensions and margins of the graph
      var margin = { top: 10, right: 30, bottom: 100, left: 40 },
        width = 1250 - margin.left - margin.right,
        height = hmHeight - margin.top - margin.bottom;

      // append the svg object to the body of the page
      var svg = d3
        .select("#heatMap")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr(
          "transform",
          "translate(" + margin.left + "," + margin.bottom + ")"
        );

      // Build X scales and axis:
      var x = d3
        .scaleBand()
        .range([0, width])
        .domain(this.sortedDimensions)
        .padding(0.01);
      svg
        .append("g")
        //.attr("transform", "translate(0," + height + ")")
        .call(d3.axisTop(x))
        .selectAll("text")
        .attr("y", 0)
        .attr("x", 9)
        .attr("dy", ".35em")
        .attr("transform", "rotate(-65)")
        .style("text-anchor", "start");

      // Build X scales and axis:
      var y = d3
        .scaleBand()
        .range([height, 0])
        .domain(this.selectedAreaAlternativesStrings)
        .padding(0.01);
      svg.append("g").call(d3.axisLeft(y));

      //Read the data
      svg
        .selectAll()
        .data(this.heatMapDataAlt, function(d) {
          return d[1] + ":" + d[0];
        })
        .enter()
        .append("rect")
        .attr("x", function(d) {
          return x(d[1]);
        })
        .attr("y", function(d) {
          return y(d[0]);
        })
        .attr("width", x.bandwidth())
        .attr("height", y.bandwidth())
        .style("fill", d => {
          return d[2];
        });

      if (!this.isShowValues) return;
      svg
        .selectAll()
        .data(this.heatMapDataAlt, function(d) {
          return d[1] + ":" + d[0];
        })
        .enter()
        .append("text")
        .attr("x", function(d) {
          return x(d[1]) + 2;
        })
        .attr("y", function(d) {
          return y(d[0]) + 30;
        })
        .attr("fill", "black")
        .text(d => {
          return d[3].toFixed(2);
        });
    },
    getAltStrings() {
      let res = [];
      for (let i = 0; i < this.alternativesNumber; i++) {
        res.push("A" + i);
      }
      return res;
    },
    getAreaUsers(userIndices) {
      console.log(userIndices);
      let res = [];
      userIndices.forEach(index => {
        res.push(this.users[index]);
      });
      console.log(res);
      return res;
    },
    drawBarChart() {
      let barDimensions = this.dimensions.slice();
      let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      for (let i = 0; i < data.length; i++) {
        let res = [];
        for (let j = 0; j < this.usersNumber; j++) {
          res.push(this.prefs[j][i]);
        }
        data[i] = this.countTrueElements(this.andAllArrays(res));
      }

      barDimensions
        .map(function(v, i) {
          return {
            value1: data[i],
            value2: v
          };
        })
        .sort(function(a, b) {
          return a.value1 > b.value1 ? -1 : a.value1 == b.value1 ? 0 : 1;
        })
        .forEach(function(v, i) {
          data[i] = v.value1;
          barDimensions[i] = v.value2;
        });

      this.sortedDimensions = barDimensions;

      let selectedDimensionsLocal = this.selectedDimensions;

      let ctx = document.getElementById("barChart").getContext("2d");
      this.barChart = new Chart(ctx, {
        // The type of chart we want to create
        type: "bar",

        // The data for our dataset
        data: {
          labels: barDimensions,
          datasets: [
            {
              label:
                "Count of Liked Alternatives That All Users Agree On Per Dimension",
              backgroundColor: [
                "red",
                "#c2c5cc",
                "#c2c5cc",
                "#c2c5cc",
                "#c2c5cc",
                "#c2c5cc",
                "#c2c5cc",
                "#c2c5cc",
                "#c2c5cc",
                "#c2c5cc",
                "#c2c5cc",
                "#c2c5cc",
                "#c2c5cc",
                "#c2c5cc",
                "#c2c5cc"
              ],
              borderColor: "#c2c5cc",
              data: data,
              minBarLength: 10
            }
          ]
        },

        // Configuration options go here
        options: {
          responsive: true,
          events: ["click", "mousemove"],
          onClick: function(c, i) {
            let e = i[0];
            if (e == null || e == undefined) return;

            console.log(e._index);

            var x_value = this.data.labels[e._index];
            var y_value = this.data.datasets[0].data[e._index];

            this.data.datasets[0].backgroundColor[e._index] =
              this.data.datasets[0].backgroundColor[e._index] == "#c2c5cc"
                ? "red"
                : "#c2c5cc";

            console.log(x_value);
            console.log(y_value);

            const index = selectedDimensionsLocal.indexOf(x_value);
            if (index > -1) {
              selectedDimensionsLocal.splice(index, 1);
            } else {
              selectedDimensionsLocal.push(x_value);
            }

            this.update();
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  stepSize: 1
                }
              }
            ]
          }
        }
      });
    },
    getStackedBarData() {
      let data = [];
      this.users.forEach((user, i) => {
        let dataObj = {};
        dataObj.label = user;
        dataObj.backgroundColor = this.usersColors[i];
        dataObj.borderColor = this.usersColors[i];

        let userData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let j = 0; j < userData.length; j++) {
          userData[j] = this.countTrueElements(this.prefs[i][j]);
        }
        dataObj.data = userData;

        data.push(dataObj);
      });
      return data;
    },
    drawStackedBarChart() {
      console.log(this.getStackedBarData());
      let ctx = document.getElementById("stackedBarChart").getContext("2d");
      this.stackedBarChart = new Chart(ctx, {
        // The type of chart we want to create
        type: "bar",

        // The data for our dataset
        data: {
          labels: this.sortedDimensions,
          datasets: this.getStackedBarData()
        },

        // Configuration options go here
        options: {
          events: ["click", "mousemove"],
          onClick: function(c, i) {
            let e = i[0];
            if (e == null || e == undefined) return;
            console.log(e);
            console.log(i);
          },
          responsive: true,
          tooltips: {
            mode: "index",
            intersect: false
          },
          scales: {
            xAxes: [
              {
                stacked: true
              }
            ],
            yAxes: [
              {
                stacked: true
              }
            ]
          }
        }
      });
    }
  }
};
</script>

<style>
.venntooltip {
  position: absolute;
  text-align: center;
  width: 128px;
  height: 16px;
  background: #333;
  color: #ddd;
  padding: 2px;
  border: 0px;
  border-radius: 8px;
  opacity: 0;
}
</style>
