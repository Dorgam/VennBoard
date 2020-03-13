<template>
  <v-container>
    <v-row>
      <v-select
        v-model="selectedDimension"
        :items="dimensions"
        label="Dimension"
        solo
      ></v-select>
    </v-row>
    <v-row>
      <div id="venn"></div>
    </v-row>
  </v-container>
</template>

<script>
const venn = require("venn.js");
const d3 = require("d3");

export default {
  name: "Home",

  data: () => ({
    sets: [],
    prefs: [],
    usersNumber: 5,
    alternativesNumber: 250,
    usersCombinations: [],
    dimensions: ["Cost", "Heat", "View", "Form", "FloorsNum"],
    comparsionDimension: 0,
    selectedDimension: null
  }),
  mounted() {
    this.prefs = this.generateUsersPrefs(
      this.usersNumber,
      this.alternativesNumber,
      this.dimensions.length
    );
    this.usersCombinations = this.combinations(this.getUsersIndicesArray());
    //this.setupDimension();
  },
  watch: {
    selectedDimension() {
      this.comparsionDimension = this.dimensions.indexOf(
        this.selectedDimension
      );
      this.setupDimension();
    }
  },
  methods: {
    setupDimension() {
      this.sets = this.generateVennSets(this.comparsionDimension);
      this.drawVenn();
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
      return Math.random() >= 0.8;
    },
    generateVennSets(dimension) {
      let sets = [];
      for (let i = 0; i < this.usersCombinations.length; i++) {
        sets.push(this.getVennSet(this.usersCombinations[i], dimension));
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
    getVennSet(combination, dimension) {
      let alternativePrefsByDimension = [];
      for (let i = 0; i < combination.length; i++) {
        alternativePrefsByDimension.push(this.prefs[combination[i]][dimension]);
      }
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
        strings.push("User " + combination[i]);
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
      chart.width(800).height(800);
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
