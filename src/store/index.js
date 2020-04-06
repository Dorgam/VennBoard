import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const d3 = require("d3");

export default new Vuex.Store({
  state: {
    alternatives: []
  },
  getters: {
    alternatives(state) {
      return state.alternatives;
    }
  },
  mutations: {
    setAlternatives(state, payload) {
      state.alternatives = payload;
    }
  },
  actions: {
    getAlternatives(context) {
      d3.json("http://142.58.183.69:5051/alternatives", d => {
        return d._id;
      }).then((json_data, error) => {
        console.log(error);
        json_data = json_data.alternatives;
        let data = getParallelDataFromAlternatives(
          "http://142.58.183.69:5051",
          json_data
        );
        context.commit("setAlternatives", data);
      });
    }
  },
  modules: {}
});

function getParallelDataFromAlternatives(url, altsInCollection) {
  const temp = [];
  const parallelData = [];
  let mergedObject = {};

  altsInCollection.map(alt => {
    //var blob = b64toBlob(alt.image, { type: 'image/png' })
    //var url = window.URL.createObjectURL(blob)
    var imgURL = url + "/" + alt.image;
    var gltfURL = url + "/" + alt.gltf;
    var geometryURL = url + "/" + alt.geometry;
    temp.push({
      _id: alt._id,
      ID: alt.tags[0],
      image: imgURL,
      gltf: gltfURL,
      geometry: geometryURL,
      collection: alt.collectionName,
      ...alt.attributes
    });
  });

  temp.map(obj => {
    Object.values(obj).map(o => {
      if (o) {
        const eachPoint = { [o.key]: o.value };

        mergedObject = Object.assign(
          mergedObject,
          { _id: obj._id },
          { ID: obj.ID },
          { image: obj.image },
          { gltf: obj.gltf },
          { geometry: obj.geometry },
          { collection: obj.collection },
          eachPoint
        );
      }
    });
    parallelData.push(mergedObject);
    mergedObject = {};
  });

  parallelData.map(obj => delete obj.undefined);

  return parallelData;
}
