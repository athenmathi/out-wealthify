(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[614],{5244:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var r=i(7294),n=i(9499),o=(i(196),i(5675)),a=i.n(o),c=i(9521).ZP.div.withConfig({displayName:"NutiritionDb__Wrappers",componentId:"sc-qb9f4t-0"})(['@import url("https://fonts.googleapis.com/css2?family=poppins&display=swap");body{font-family:"poppins";background-color:#fafafa;}.search-icon{margin-left:29rem;margin-bottom:-3rem;position:absolute;display:inline-block;}.Nutrition h3{font-size:60px;font-weight:300;display:block;text-align:center;font-family:bite-chocolate;color:var(--font-color);margin-top:2rem;}.Nutrition{background-image:url("./nutritionBg.svg");position:relative;height:30vh;width:100%;background-size:cover;margin-bottom:50px;background-repeat:no-repeat;}.cover1{opacity:0.25;}.Nutrition h3{text-align:center;font-size:60px;font-weight:300;}.searchbar input{border:2px solid grey;border-radius:20px;margin-left:65px;width:450px;height:38px;font-size:24px;}.searchbar input::placeholder{font-size:20px;padding-left:20px;color:#e0e0e0;}.searchbar i{position:absolute;width:100px;margin-top:25px;}.icon{padding:10;padding-left:435px;padding-top:1px;color:#787878;min-width:50px;text-align:center;justify-items:center;}.searchrec{position:absolute;border-left:2px solid #b2b2b2;height:26px;max-width:50px;padding:7px;margin-top:0.5rem;margin-left:450px;}.search-bar{width:150px;height:50px;background-color:yellow;border-radius:50px;margin-left:12px;font-family:Arial,Helvetica,sans-serif;border:2px white;padding-top:10px;justify-content:space-between;color:green;font-weight:200;text-align:center;cursor:pointer;display:flex;flex-direction:row;}.button{width:20vh !important;height:7vh;position:relative;background-color:yellow;box-shadow:1px 1px solid black;color:green;font-weight:300;text-align:center;cursor:pointer;padding-top:2vh;margin-left:4vh;border:2px white !important;border-radius:20px;}.fruitgrid{display:grid;grid-template-columns:250px 250px 250px 250px;margin-top:50px;justify-content:space-evenly;grid-auto-flow:row;}.fruitgrid div p{text-align:center;}@media only screen and (max-width:600px){body{font-family:"poppins";background-color:#fafafa;}.searchbar input{border:2px solid grey;display:inline-block;border-radius:20px;margin-left:18px;width:50%;height:42px;font-size:24px;flex-direction:row;outline:none;}.searchrec{border-left:2px solid #b2b2b2;height:3.5%;max-width:50px;padding:7px;margin-top:2%;margin-left:42%;}.button{display:inline-block;width:25% !important;}.icon{padding:10;padding-left:200px;padding-top:1px;color:#787878;min-width:50px;text-align:center;justify-items:center;}.search-icon{margin-left:44%;margin-bottom:-3rem;position:absolute;}.fruitgrid{display:grid;grid-template-columns:250px;margin-top:50px;justify-content:space-evenly;}}']),s=i(2670),p=i(557),A=i(1664),l=i.n(A),d=i(7633),g=i(5893);function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}var h=function(){var e=(0,d.fE)(),t=e.getRecipe,i=e.recipeData,o=(0,r.useState)(""),A=o[0],h=o[1];console.log("appcontextres",i);var f=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},A);t[e.target.id]=e.target.value,h(t),e.preventDefault()};if((0,r.useEffect)((function(){t("nutrition",{api_key:"get",data:{item_name:""}})}),[]),(0,r.useEffect)((function(){h(A)}),[]),i&&i!=[])return console.log("length",i.length),(0,g.jsxs)(c,{children:[(0,g.jsx)("div",{className:"Nutrition",children:(0,g.jsx)("h3",{children:"Nutrition Database"})}),(0,g.jsx)("div",{className:"searchbar",onSubmit:function(e){return function(e){e.preventDefault(),t("nutrition",{api_key:"get",data:{item_name:A.search}})}(e)},children:(0,g.jsxs)("form",{method:"post",children:[(0,g.jsx)("span",{className:"searchrec"}),(0,g.jsx)("div",{className:"search-icon",children:(0,g.jsx)(a(),{src:p.Z})}),(0,g.jsx)("i",{className:"fa fa-search fa-xl icon","aria-hidden":"true"}),(0,g.jsx)("input",{type:"text",onChange:function(e){return f(e)},id:"search",value:A.search,placeholder:"Search"}),(0,g.jsx)("button",{className:"button",type:"submit",value:"SEARCH ",children:"Search"})]})}),(0,g.jsx)("div",{className:"fruitgrid",children:i.map((function(e,t){return console.log("data",e),(0,g.jsx)(l(),{href:"singleNutritionDb",children:(0,g.jsxs)("div",{className:"grid11",children:[(0,g.jsx)(a(),{src:s.Z}),(0,g.jsxs)("p",{children:[e.name,t]})]})})}))})]})},f=function(){return(0,g.jsx)(h,{})}},3147:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nutrition",function(){return i(5244)}])},2670:function(e,t){"use strict";t.Z={src:"/_next/static/media/fruit.7092693e.jpeg",height:183,width:275,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwb/2gAMAwEAAhADEAAAAKQkU//EABwQAAICAgMAAAAAAAAAAAAAAAECBCEAAxEiQf/aAAgBAQABPwCU3MVnJbtrJo+i8//EABkRAAEFAAAAAAAAAAAAAAAAAAABAgMhcf/aAAgBAgEBPwCFadp//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:5}},557:function(e,t){"use strict";t.Z={src:"/_next/static/media/searchIcon.b92503e4.svg",height:40,width:40}}},function(e){e.O(0,[774,888,179],(function(){return t=3147,e(e.s=t);var t}));var t=e.O();_N_E=t}]);