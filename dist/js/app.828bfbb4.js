(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},r={app:0},n=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return s(t)}function n(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-content",[s("router-view")],1)],1)},n=[],i={name:"App",data:function(){return{}}},o=i,c=s("2877"),l=s("6544"),u=s.n(l),d=s("7496"),f=s("a75b"),h=Object(c["a"])(o,r,n,!1,null,null,null),p=h.exports;u()(h,{VApp:d["a"],VContent:f["a"]});var v=s("8c4f"),m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-app-bar",{attrs:{color:"deep-purple accent-4",dense:"",dark:""}},[s("v-app-bar-nav-icon"),s("v-toolbar-title",[e._v("PrefBoard")]),s("v-spacer")],1),s("v-container",{attrs:{fluid:""}},[s("v-row",[s("v-col",{staticClass:"pt-0 mt-0 mr-0 pt-0",attrs:{cols:"5"}},[s("v-col",{staticClass:"my-0",attrs:{cols:"12"}},[s("v-card",[s("canvas",{attrs:{id:"barChart"}})])],1),s("v-col",{staticClass:"my-0 py-0",attrs:{cols:"12"}},[s("v-card",{directives:[{name:"show",rawName:"v-show",value:e.selectedDimensions.length>0,expression:"selectedDimensions.length > 0"}]},[s("v-select",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{items:e.sortedDimensions,label:"Select Dimensions",chips:"",solo:"",multiple:""},model:{value:e.selectedDimensions,callback:function(t){e.selectedDimensions=t},expression:"selectedDimensions"}}),s("div",{attrs:{id:"venn"}})],1)],1)],1),s("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"7"}},[s("v-col",{staticClass:"pl-0 ml-0",attrs:{cols:"12"}},[s("v-card",{staticClass:"pl-0 ml-0"},[s("canvas",{attrs:{id:"stackedBarChart",height:"100px"}})])],1),s("v-col",{attrs:{cols:"12"}},[s("v-card",[s("h1",{staticClass:"pa-1"},[e._v("Last Query Result:")]),s("v-data-iterator",{staticClass:"overflow-y-auto pa-1",staticStyle:{"max-height":"450px"},attrs:{items:e.pcAlternatives,"hide-default-footer":"","items-per-page":e.maxPerPage},scopedSlots:e._u([{key:"default",fn:function(t){return[s("v-row",e._l(t.items,(function(t,a){return s("v-col",{key:a,attrs:{cols:2}},[s("v-card",[s("h3",[e._v(e._s("ALT#"+t.index))]),s("v-img",{attrs:{src:t.image}})],1)],1)})),1)]}}])})],1)],1)],1)],1)],1)],1)},b=[],g=(s("99af"),s("4160"),s("caad"),s("c975"),s("d81d"),s("fb6a"),s("a434"),s("b680"),s("2532"),s("159b"),s("960c"),s("30ef")),j=s.n(g),y=s("47d6"),A=s("5698"),k={name:"Home",data:function(){return{maxPerPage:1e3,sets:[],prefs:[],usersNumber:5,alternativesNumber:249,usersCombinations:[],dimensions:["Cantilever","Commercial Floor Area","Energy Use","Height","Max Wind Load","Net Solar","Residential Floor Area","Retail Floor Area","Shading Output","Total Floor Area","Usable Space","Views/Floor Area","Volume/Floor Area","Volume/Surface Area","Width Change"],comparsionDimensions:[],selectedDimensions:[],pcAlternatives:[],pcChart:null,heatMapData:[],heatMapDataAlt:[],usersColors:["#1f76b4","#ff7e0e","#2ca02c","#d62727","#9367bd"],activeTab:0,selectedUser:null,users:["Designer 1","Designer 2","Stakeholder 1","Stakeholder 2","City"],areaUsers:[],selectedAreaAlternativesStrings:[],alternativesInArrayFormat:[],isShowValues:!1,sortedDimensions:[]}},computed:{alternatives:function(){return this.$store.getters.alternatives}},mounted:function(){this.$store.dispatch("getAlternatives"),this.prefs=this.generateUsersPrefs(this.usersNumber,this.alternativesNumber,this.dimensions.length),this.usersCombinations=this.combinations(this.getUsersIndicesArray()),this.drawBarChart(),this.selectedDimensions.push(this.sortedDimensions[0]),this.drawStackedBarChart()},watch:{selectedDimensions:function(){var e=this,t=[];this.selectedDimensions.forEach((function(s){t.push(e.dimensions.indexOf(s))})),this.comparsionDimensions=t,this.setupDimension()},selectedUser:function(){this.setupHeatMap()},alternatives:function(){var e=[];this.alternatives.forEach((function(t){var s=[t["Cantilever"],t["ComFlrArea"],t["EnergyUse"],t["Height"],t["MaxWindLoad"],t["NetSolar"],t["ResFlrArea"],t["RetFlrArea"],t["ShadingOutput"],t["TotalFlrArea"],t["UsableSpace"],t["ViewspFlrArea"],t["VolpFlrArea"],t["VolpSrfArea"],t["WidthChange"]];e.push(s)})),this.alternativesInArrayFormat=e},areaUsers:function(){this.selectedUser=this.areaUsers[0],this.setupHeatMap()},isShowValues:function(){this.drawHeatMapAlt()},pcAlternatives:function(){}},methods:{setupDimension:function(){this.sets=this.generateVennSets(this.comparsionDimensions),this.drawVenn()},setupHeatMap:function(){this.setHeatMapDataAlt(this.users.indexOf(this.selectedUser),this.comparsionDimensions),this.drawHeatMapAlt()},generateUsersPrefs:function(e,t,s){for(var a=[],r=0;r<e;r++)a.push(this.generateDimensionPrefs(t,s));return a},generateDimensionPrefs:function(e,t){for(var s=[],a=0;a<t;a++)s.push(this.generateAlternativePrefs(e));return s},generateAlternativePrefs:function(e){for(var t=[],s=0;s<e;s++)t.push(this.getRandomBoolean());return t},getRandomBoolean:function(){return Math.random()>=.65},generateVennSets:function(e){for(var t=[],s=0;s<this.usersCombinations.length;s++)t.push(this.getVennSet(this.usersCombinations[s],e));return t},getUsersIndicesArray:function(){for(var e=[],t=0;t<this.usersNumber;t++)e.push(t);return e},getVennSet:function(e,t){var s=this,a=[];return t.forEach((function(t){for(var r=0;r<e.length;r++)a.push(s.prefs[e[r]][t])})),{sets:this.getCombinationUserStrings(e),size:this.countTrueElements(this.andAllArrays(a))}},getCombinationUserStrings:function(e){for(var t=[],s=0;s<e.length;s++)t.push(this.users[parseInt(e[s])]);return t},andAllArrays:function(e){if(1==e.length)return e[0];for(var t=this.andTwoArrays(e[0],e[1]),s=2;s<e.length;s++)t=this.andTwoArrays(t,e[s]);return t},andTwoArrays:function(e,t){for(var s=[],a=0;a<e.length;a++)s[a]=e[a]&&t[a];return s},countTrueElements:function(e){for(var t=0,s=0;s<e.length;s++)e[s]&&t++;return t},combinations:function(e){var t,s,a,r;for(a=[],t=1;t<=e.length;t++)for(r=this.k_combinations(e,t),s=0;s<r.length;s++)a.push(r[s]);return a},k_combinations:function(e,t){var s,a,r,n,i;if(t>e.length||t<=0)return[];if(t==e.length)return[e];if(1==t){for(r=[],s=0;s<e.length;s++)r.push([e[s]]);return r}for(r=[],s=0;s<e.length-t+1;s++)for(n=e.slice(s,s+1),i=this.k_combinations(e.slice(s+1),t-1),a=0;a<i.length;a++)r.push(n.concat(i[a]));return r},drawVenn:function(){var e=this,t=y.VennDiagram();t.width(800).height(450);var s=A.select("#venn");s.datum(this.sets).call(t);var a=A.select("body").append("div").attr("class","venntooltip");s.selectAll("g").on("mouseover",(function(e){y.sortAreas(s,e),a.transition().duration(400).style("opacity",.9),a.text(e.size+" alternatives");var t=A.select(this).transition("tooltip").duration(400);t.select("path").style("stroke-width",3).style("fill-opacity",1==e.sets.length?.4:.1).style("stroke-opacity",1)})).on("mousemove",(function(){a.style("left",A.event.pageX+"px").style("top",A.event.pageY-28+"px")})).on("mouseout",(function(e){a.transition().duration(400).style("opacity",0);var t=A.select(this).transition("tooltip").duration(400);t.select("path").style("stroke-width",0).style("fill-opacity",1==e.sets.length?.25:0).style("stroke-opacity",0)})).on("click",(function(t){e.onVennClick(t.sets)}))},getAlternativesFromIndicesArray:function(e){var t=[];return this.alternatives.forEach((function(s){var a=s.index-1;e.includes(a)&&t.push(s)})),t},onVennClick:function(e){var t=this.getUsersIndicesFromStrings(e);this.areaUsers=this.getAreaUsers(t);var s=this.getAlternativesIndiciesAtArea(t);this.pcAlternatives=this.getAlternativesFromIndicesArray(s)},getAlternativesIndiciesAtArea:function(e){var t=this,s=[];this.comparsionDimensions.forEach((function(a){e.forEach((function(e){s.push(t.prefs[e][a])}))}));var a=this.andAllArrays(s),r=[];return a.forEach((function(e,t){e&&r.push(t)})),r},getUsersIndicesFromStrings:function(e){var t=this;return e.map((function(e){return t.users.indexOf(e)}))},deletePc:function(){var e=document.querySelector("#pc");while(e.firstChild)e.removeChild(e.firstChild)},deleteHeatMap:function(){var e=document.querySelector("#heatMap");while(e.firstChild)e.removeChild(e.firstChild)},setHeatMapDataAlt:function(e){var t=this,s=[],a=[];this.prefs[e].forEach((function(r,n){t.pcAlternatives.forEach((function(r){var i=r.index-1,o=t.prefs[e][n][i],c=o?t.usersColors[e]:"#c2c5cc40";s.push(["A"+i,t.dimensions[n],c,t.alternativesInArrayFormat[i][n]]),a.push("A"+i)}))})),this.selectedAreaAlternativesStrings=a,this.heatMapDataAlt=s},drawHeatMapAlt:function(){this.deleteHeatMap();var e=50*this.pcAlternatives.length+100,t={top:10,right:30,bottom:100,left:40},s=1250-t.left-t.right,a=e-t.top-t.bottom,r=A.select("#heatMap").append("svg").attr("width",s+t.left+t.right).attr("height",a+t.top+t.bottom).append("g").attr("transform","translate("+t.left+","+t.bottom+")"),n=A.scaleBand().range([0,s]).domain(this.sortedDimensions).padding(.01);r.append("g").call(A.axisTop(n)).selectAll("text").attr("y",0).attr("x",9).attr("dy",".35em").attr("transform","rotate(-65)").style("text-anchor","start");var i=A.scaleBand().range([a,0]).domain(this.selectedAreaAlternativesStrings).padding(.01);r.append("g").call(A.axisLeft(i)),r.selectAll().data(this.heatMapDataAlt,(function(e){return e[1]+":"+e[0]})).enter().append("rect").attr("x",(function(e){return n(e[1])})).attr("y",(function(e){return i(e[0])})).attr("width",n.bandwidth()).attr("height",i.bandwidth()).style("fill",(function(e){return e[2]})),this.isShowValues&&r.selectAll().data(this.heatMapDataAlt,(function(e){return e[1]+":"+e[0]})).enter().append("text").attr("x",(function(e){return n(e[1])+2})).attr("y",(function(e){return i(e[0])+30})).attr("fill","black").text((function(e){return e[3].toFixed(2)}))},getAltStrings:function(){for(var e=[],t=0;t<this.alternativesNumber;t++)e.push("A"+t);return e},getAreaUsers:function(e){var t=this,s=[];return e.forEach((function(e){s.push(t.users[e])})),s},drawBarChart:function(){for(var e=this.dimensions.slice(),t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],s=0;s<t.length;s++){for(var a=[],r=0;r<this.usersNumber;r++)a.push(this.prefs[r][s]);t[s]=this.countTrueElements(this.andAllArrays(a))}e.map((function(e,s){return{value1:t[s],value2:e}})).sort((function(e,t){return e.value1>t.value1?-1:e.value1==t.value1?0:1})).forEach((function(s,a){t[a]=s.value1,e[a]=s.value2})),this.sortedDimensions=e;var n=this.selectedDimensions,i=document.getElementById("barChart").getContext("2d");this.barChart=new j.a(i,{type:"bar",data:{labels:e,datasets:[{backgroundColor:["#6D533A","#c2c5cc","#c2c5cc","#c2c5cc","#c2c5cc","#c2c5cc","#c2c5cc","#c2c5cc","#c2c5cc","#c2c5cc","#c2c5cc","#c2c5cc","#c2c5cc","#c2c5cc","#c2c5cc"],borderColor:"#c2c5cc",data:t,minBarLength:10}]},options:{legend:{display:!1},title:{display:!0,fontSize:20,text:"Count of Liked Alternatives That All Users Agree On Per Dimension"},responsive:!0,events:["click","mousemove"],onClick:function(e,t){var s=t[0];if(null!=s&&void 0!=s){var a=this.data.labels[s._index];this.data.datasets[0].backgroundColor[s._index]="#c2c5cc"==this.data.datasets[0].backgroundColor[s._index]?"#6D533A":"#c2c5cc";var r=n.indexOf(a);r>-1?n.splice(r,1):n.push(a),this.update()}},scales:{yAxes:[{ticks:{stepSize:1}}]}}})},getColorsArray:function(e,t){for(var s=[],a=0;a<t;a++)s.push(e);return s},getStackedBarData:function(){var e=this,t=[];return this.users.forEach((function(s,a){var r={};r.label=s,r.backgroundColor=e.getColorsArray(e.usersColors[a],15),r.borderColor=e.usersColors[a];for(var n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],i=0;i<n.length;i++)n[i]=e.countTrueElements(e.prefs[a][i]);r.data=n,t.push(r)})),t},drawStackedBarChart:function(){var e=this,t=document.getElementById("stackedBarChart").getContext("2d"),s=new j.a(t,{type:"bar",data:{labels:this.sortedDimensions,datasets:this.getStackedBarData()},options:{title:{display:!0,fontSize:20,text:"Count of Liked Alternatives Per Dimension Per User"},responsive:!0,tooltips:{mode:"index",intersect:!1},scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}});this.stackedBarChart=s;var a=document.getElementById("stackedBarChart");a.onclick=function(t){for(var a=s.getElementAtEvent(t)[0],r=a._chart.data,n=a._datasetIndex,i=a._index,o=0;o<r.datasets.length;o++)r.datasets[o].backgroundColor=e.getColorsArray(e.usersColors[o],15);r.datasets[n].backgroundColor[i]=r.datasets[n].backgroundColor[i]+"40",e.pcAlternatives=e.getAlternativesFromIndicesArray(e.getAltIndiciesBarChart(n,i)),s.update()}},getAltIndiciesBarChart:function(e,t){var s=[];return this.prefs[e][t].forEach((function(e,t){e&&s.push(t)})),s}}},C=k,w=(s("8b71"),s("40dc")),x=s("5bc1"),D=s("b0af"),S=s("62ad"),_=s("a523"),V=s("c377"),E=s("adda"),O=s("0fd9"),z=s("b974"),U=s("2fa4"),I=s("2a7f"),M=Object(c["a"])(C,m,b,!1,null,null,null),B=M.exports;u()(M,{VAppBar:w["a"],VAppBarNavIcon:x["a"],VCard:D["a"],VCol:S["a"],VContainer:_["a"],VDataIterator:V["a"],VImg:E["a"],VRow:O["a"],VSelect:z["a"],VSpacer:U["a"],VToolbarTitle:I["a"]}),a["a"].use(v["a"]);var F=[{path:"/",name:"Home",component:B}],P=new v["a"]({routes:F}),T=P,N=(s("07ac"),s("ade3")),H=s("5530"),L=s("2f62");a["a"].use(L["a"]);var R=s("5698"),$=new L["a"].Store({state:{alternatives:[]},getters:{alternatives:function(e){return e.alternatives}},mutations:{setAlternatives:function(e,t){e.alternatives=t}},actions:{getAlternatives:function(e){R.json("http://142.58.183.69:5051/alternatives",(function(e){return e._id})).then((function(t,s){console.log(s),t=t.alternatives;var a=q("http://142.58.183.69:5051",t);e.commit("setAlternatives",a)}))}},modules:{}});function q(e,t){var s=[],a=[],r={};return t.map((function(t){var a=e+"/"+t.image,r=e+"/"+t.gltf,n=e+"/"+t.geometry;s.push(Object(H["a"])({_id:t._id,ID:t.tags[0],image:a,gltf:r,geometry:n,collection:t.collectionName},t.attributes))})),s.map((function(e){Object.values(e).map((function(t){if(t){var s=Object(N["a"])({},t.key,t.value);r=Object.assign(r,{_id:e._id},{ID:e.ID},{image:e.image},{gltf:e.gltf},{geometry:e.geometry},{collection:e.collection},s)}})),a.push(r),r={}})),a.map((function(e){return delete e.undefined})),a}var W=s("f309");a["a"].use(W["a"]);var G=new W["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:T,store:$,vuetify:G,render:function(e){return e(p)}}).$mount("#app")},"8b71":function(e,t,s){"use strict";var a=s("ce77"),r=s.n(a);r.a},ce77:function(e,t,s){}});
//# sourceMappingURL=app.828bfbb4.js.map