!function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=16)}([function(n,t,e){"use strict";n.exports={baseURL:function(){window.location.hostname;return"http://localhost:3000"}}},function(n,t,e){"use strict";var o=e(0).baseURL(),r=function(n,t){var e=localStorage.getItem("token");return fetch(o+"/api/v1/questionnaires",{method:""+n,headers:{"Content-Type":"application/json",Authorization:e,Title:t}})},i=function(n){n=n.questionnaire_id;localStorage.setItem("questionnaire_id",n)},a=function(n){return n.forEach(function(n){s(n)})},s=function(n){$(".dashboard-box").prepend('<div class="questionnaire">\n    <img src="./lib/stylesheets/form.png" alt="form icon">\n    <div>'+n.title+'</div>\n    <a href="builder.html"><button id="'+n.id+'" class="view" type="button" name="view">View</button></a>\n    <button id="'+n.id+'" type="button" name="delete">Delete</button>\n    </div>')},c=function(n){return n.json().then(function(t){if(!n.ok){var e={status:n.status,statusTest:n.statusText,json:t};return Promise.reject(e)}return t})};n.exports={patchQuestionnaire:function(n,t){var e=localStorage.getItem("token"),r=localStorage.getItem("questionnaire_id");return fetch(o+"/api/v1/questionnaires/"+r,{method:""+n,headers:{"Content-Type":"application/json",Questions:""+JSON.stringify(t),Authorization:e}})},createQuestionnaire:function(n){r("POST",n).then(function(n){return c(n)}).then(function(n){return i(n)}).catch(function(n){return console.error({error:n})})},getForms:function(){r("GET").then(function(n){return c(n)}).then(function(n){return a(n)}).catch(function(n){return console.error({error:n})})}}},function(n,t,e){"use strict";var o=function(){return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,t){var e=[],o=!0,r=!1,i=void 0;try{for(var a,s=n[Symbol.iterator]();!(o=(a=s.next()).done)&&(e.push(a.value),!t||e.length!==t);o=!0);}catch(n){r=!0,i=n}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return e}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=e(0).baseURL(),i=function(n){var t=localStorage.getItem("token"),e=localStorage.getItem("questionnaire_id");return fetch(r+"/api/v1/questionnaires/"+e+"/"+n,{method:"GET",headers:{"Content-Type":"application/json",Authorization:t}})},a=function(n){return n.forEach(function(n){s(n)})},s=function(n){$(".section.menu-items").append('<div class="selection" draggable="true">\n      <div class="select dish">'+n.dish+'</div>\n      <div class="select ingredients">'+n.ingredients+"</div>\n    </div>")},c=function(n){n.forEach(function(n){u(n)}),d()},u=function(n){1==n.section_id?l(n):2==n.section_id?f(n):3==n.section_id&&p(n)},l=function(n){$(".section.demographic").append('<div class="selection" draggable="true">\n      <div class="select question">'+n.text+'</div>\n      <div class="select answer">'+n.answers+"</div>\n    </div>")},f=function(n){$(".section.clinical").append('<div class="selection" draggable="true">\n      <div class="select question">'+n.text+'</div>\n      <div class="select answer">'+n.answers+"</div>\n    </div>")},p=function(n){$(".section.exposure").append('<div class="selection" draggable="true">\n      <div class="select question">'+n.text+'</div>\n      <div class="select answer">'+n.answers+"</div>\n    </div>")},d=function(){var n=$("body").find(".select.question");Object.entries(n).forEach(function(n,t){var e=o(n,2);e[0];e[1].prepend(t+1+". ")})},h=function(n){return n.forEach(function(n){m(n)})},m=function(n){$(".options.exposure").append('<button type="button" name="button" value="'+n.id+'">'+n.text+"</button>")},g=function(n){return n.forEach(function(n){b(n)})},b=function(n){$(".options.clinical").append('<button type="button" name="button" value="'+n.id+'">'+n.text+"</button>")},v=function(n){return n.forEach(function(n){x(n)})},x=function(n){$(".options.demographics").append('<button type="button" name="button" value="'+n.id+'">'+n.text+"</button>")},y=function(n){return n.json().then(function(t){if(!n.ok){var e={status:n.status,statusTest:n.statusText,json:t};return Promise.reject(e)}return t})};n.exports={getDemographics:function(){i("demographics").then(function(n){return y(n)}).then(function(n){return v(n)}).catch(function(n){return console.error({error:n})})},getClinicals:function(){i("clinicals").then(function(n){return y(n)}).then(function(n){return g(n)}).catch(function(n){return console.error({error:n})})},getExposures:function(){i("exposures").then(function(n){return y(n)}).then(function(n){return h(n)}).catch(function(n){return console.error({error:n})})},getQuestions:function(){i("questions").then(function(n){return y(n)}).then(function(n){return c(n)}).catch(function(n){return console.error({error:n})})},getMenuItems:function(){i("foods").then(function(n){return y(n)}).then(function(n){return a(n)}).catch(function(n){return console.error({error:n})})},postFoods:function(n){!function(n){var t=localStorage.getItem("token"),e=localStorage.getItem("questionnaire_id");fetch(r+"/api/v1/questionnaires/"+e+"/foods",{method:"POST",headers:{"Content-Type":"application/json",foods:""+JSON.stringify(n),Authorization:t}})}(n)}}},function(n,t,e){"use strict";var o=e(0).baseURL(),r=function(n){return n.forEach(function(n){i(n)})},i=function(n){n.tags.forEach(function(t){a(t,n.name)})},a=function(n,t){0==n.options.length?$(".options."+t).children().append('<button type="button" value="'+n.id+'" name="button">'+n.name+"</button>"):($(".options."+t).append('<div class="category-box '+n.name+'"><p>'+n.name+"</p></div>"),n.options.forEach(function(t){$(".category-box."+n.name).append('<button type="button" value="'+t.tag_id+'" name="button">'+t.name+"</button>")}))},s=function(n){return n.json().then(function(t){if(!n.ok){var e={status:n.status,statusTest:n.statusText,json:t};return Promise.reject(e)}return t})};n.exports={getTags:function(){var n,t,e;(n="GET",e=localStorage.getItem("token"),fetch(o+"/api/v1/tags",{method:""+n,headers:{"Content-Type":"application/json",Authorization:e},body:JSON.stringify(t)})).then(function(n){return s(n)}).then(function(n){return r(n)}).catch(function(n){return console.error({error:n})})},postTags:function(n,t){var e=localStorage.getItem("token"),r=localStorage.getItem("questionnaire_id");return fetch(o+"/api/v1/questionnaires/"+r+"/intakes",{method:""+n,headers:{"Content-Type":"application/json",Tags:""+JSON.stringify(t),Authorization:e}})}}},function(n,t,e){"use strict";var o=function(){return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,t){var e=[],o=!0,r=!1,i=void 0;try{for(var a,s=n[Symbol.iterator]();!(o=(a=s.next()).done)&&(e.push(a.value),!t||e.length!==t);o=!0);}catch(n){r=!0,i=n}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return e}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=e(0).baseURL(),i=function(n){return n.forEach(function(n){a(n)})},a=function(n){$(".menus").append('<div class="menu '+n.id+'">\n      <h2>Menu Name: '+n.name+"</h2>\n      <p>(click menu name to select all)</p>\n    </div>"),n.foods.forEach(function(t){s(n.id,t)})},s=function(n,t){$("body").find(".menu."+n).append('<div class="food-button">\n      <p>Item: '+t.name+"</p>\n      <p>Ingredients: "+t.description+"</p>\n    </div>")},c=function(n){return n.forEach(function(n){u(n)})},u=function(n){$(".options-restaurants").append('<div class="small-box restaurant" value='+n.venue_id+">\n      <p>"+n.name+"</p>\n      <p>"+n.address+"</p>\n    </div>")},l=function(n){return n.json().then(function(t){if(!n.ok){var e={status:n.status,statusTest:n.statusText,json:t};return Promise.reject(e)}return t})};n.exports={getRestaurants:function(){var n=$(".restaurant-search").find("input"),t=[];Object.entries(n).forEach(function(n){var e=o(n,2),r=(e[0],e[1]);t.push(r.value)}),t.splice(-2,2),function(n,t,e){var o=localStorage.getItem("token");return fetch(r+"/api/v1/search/restaurants?near="+t+"&query="+e,{method:""+n,headers:{"Content-Type":"application/json",Authorization:o}})}("GET",""+t[1],""+t[0]).then(function(n){return l(n)}).then(function(n){return c(n)}).catch(function(n){return console.error({error:n})})},getMenus:function(){(function(n,t){var e=localStorage.getItem("token");return fetch(r+"/api/v1/search/menus",{method:""+n,headers:{"Content-Type":"application/json",venue_id:""+t,Authorization:e}})})("GET",$("body").find(".marked")[1].getAttribute("value")).then(function(n){return l(n)}).then(function(n){return i(n)}).catch(function(n){return console.error({error:n})})}}},function(n,t,e){"use strict";var o=e(0).baseURL(),r=function(n){var t=n.auth_token;localStorage.setItem("token",t)},i=function(n){return console.log("HEY"),n.json().then(function(t){if(!n.ok){var e={status:n.status,statusTest:n.statusText,json:t};return Promise.reject(e)}return t})};n.exports={getToken:function(n,t){(function(n,t,e){return fetch(o+"/api/v1/authenticate?email="+t+"&password="+e,{method:""+n,headers:{Accept:"application/json",credentials:"same-origin"}})})("POST",n,t).then(function(n){return i(n)}).then(function(n){return r(n)}).catch(function(n){return console.error({error:n})})}}},function(n,t,e){"use strict";var o=function(){return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,t){var e=[],o=!0,r=!1,i=void 0;try{for(var a,s=n[Symbol.iterator]();!(o=(a=s.next()).done)&&(e.push(a.value),!t||e.length!==t);o=!0);}catch(n){r=!0,i=n}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return e}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=e(5),i=e(4),a=e(3),s=e(2),c=e(1);n.exports={clickView:function(){$(".create-form").on("click",function(){var n=this.attr("id");console.log("HEY"),localStorage.setItem("questionnaire_id",n)})},clearFormId:function(){$("#build").on("click",function(){localStorage.removeItem("questionnaire_id")})},loginSubmit:function(){$("#login-button").on("click",function(){var n=document.getElementById("email").value,t=document.getElementById("password").value;r.getToken(n,t)})},logoutSubmit:function(){$("#logout-button").on("click",function(){localStorage.removeItem("token")})},populateForms:function(){c.getForms()},createForm:function(){$(".create-form").on("click",function(){var n=$("#form-title").val();c.createQuestionnaire(n)})},marked:function(){$("body").on("click","button",function(){$(this).toggleClass("marked")})},markedSmallBox:function(){$("body").on("click",".small-box",function(){$(this).toggleClass("marked"),i.getMenus(),$(".header.menu-items").slideDown("fast"),$(".menus").slideDown("fast")})},markedFoodButton:function(){$("body").on("click",".food-button",function(){$(this).toggleClass("marked")})},markedAllMenuItems:function(){$("body").on("click",".menu h2",function(){$(this).siblings(".food-button").toggleClass("marked")})},etiologyIdentified:function(){$("#etiology-yes").on("click",function(){$("#etiology-no").removeClass("marked"),$(".symptom").hide(),$(".Etiology").slideDown("fast"),$(".options.symptom").find("button").removeClass("marked")}),$("#etiology-no").on("click",function(){$("#etiology-yes").removeClass("marked"),$(".Etiology").hide(),$(".symptom").slideDown("fast"),$(".options.Etiology").find("button").removeClass("marked")})},symptomOptions:function(){$(".options.symptom").find("button").one("click",function(){$(".Setting").slideDown("fast")})},etiologyOptions:function(){$("body").find(".options.Etiology").one("click","button",function(){$(".Setting").slideDown("fast")})},settingOptions:function(){$("body").find(".options.Setting").one("click","button",function(){$(".Transmission").slideDown("fast"),$(".one-link.intake").slideDown("fast")})},goBack:function(){$(".link.back").on("click",function(){window.history.back()})},searchRestaurants:function(){$(".restaurant-search-button").on("click",function(){i.getRestaurants(),$(".header.restaurants").slideDown("fast"),$(".options-restaurants").slideDown("fast")})},populateTags:function(){a.getTags()},sendIntake:function(){$(".link.next.intake").on("click",function(){var n=$("body").find(".marked"),t=[];Object.entries(n).forEach(function(n){var e=o(n,2),r=(e[0],e[1]);t.push(r.value)}),t.splice(-2,2),t.splice(0,1),a.postTags("POST",t)})},sendDemographics:function(){$(".link.next.demographic").on("click",function(){var n=$("body").find(".marked"),t=[];Object.entries(n).forEach(function(n){var e=o(n,2),r=(e[0],e[1]);t.push(r.value)}),t.splice(-2,2),c.patchQuestionnaire("PUT",t)})},sendClinicals:function(){$(".link.next.clinical").on("click",function(){var n=$("body").find(".marked"),t=[];Object.entries(n).forEach(function(n){var e=o(n,2),r=(e[0],e[1]);t.push(r.value)}),t.splice(-2,2),c.patchQuestionnaire("PUT",t)})},sendExposures:function(){$(".link.next.exposure").on("click",function(){var n=$("body").find(".marked"),t=[];Object.entries(n).forEach(function(n){var e=o(n,2),r=(e[0],e[1]);t.push(r.value)}),t.splice(-2,2),c.patchQuestionnaire("PUT",t)})},sendFoods:function(){$(".link.next.restaurant").on("click",function(){var n=[],t=$("body").find(".marked");t.splice(0,2),Object.entries(t).forEach(function(t){var e=o(t,2),r=(e[0],e[1]);n.push(r)}),n.splice(-2,2);var e=[];n.forEach(function(n){e.push([n.getElementsByTagName("p")[0].innerHTML,n.getElementsByTagName("p")[1].innerHTML])}),s.postFoods(e)})},populateDemographics:function(){s.getDemographics()},populateClinicals:function(){s.getClinicals()},populateExposures:function(){s.getExposures()},populateQuestions:function(){s.getQuestions(),s.getMenuItems()}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,o=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var r,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,t,e){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(n){var t={};return function(n){if("function"==typeof n)return n();if(void 0===t[n]){var e=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}}(),c=null,u=0,l=[],f=e(7);function p(n,t){for(var e=0;e<n.length;e++){var o=n[e],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(v(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(v(o.parts[a],t));i[o.id]={id:o.id,refs:1,parts:s}}}}function d(n,t){for(var e=[],o={},r=0;r<n.length;r++){var i=n[r],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):e.push(o[a]={id:a,parts:[s]})}return e}function h(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(t,o.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),l.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(n.insertInto+" "+n.insertAt.before);e.insertBefore(t,r)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=l.indexOf(n);t>=0&&l.splice(t,1)}function g(n){var t=document.createElement("style");return void 0===n.attrs.type&&(n.attrs.type="text/css"),b(t,n.attrs),h(n,t),t}function b(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function v(n,t){var e,o,r,i;if(t.transform&&n.css){if(!(i=t.transform(n.css)))return function(){};n.css=i}if(t.singleton){var a=u++;e=c||(c=g(t)),o=k.bind(null,e,a,!1),r=k.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(t,n.attrs),h(n,t),t}(t),o=function(n,t,e){var o=e.css,r=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=f(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),r=function(){m(e),e.href&&URL.revokeObjectURL(e.href)}):(e=g(t),o=function(n,t){var e=t.css,o=t.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){m(e)});return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=d(n,t);return p(e,t),function(n){for(var o=[],r=0;r<e.length;r++){var a=e[r];(s=i[a.id]).refs--,o.push(s)}n&&p(d(n,t),t);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var x,y=(x=[],function(n,t){return x[n]=t,x.filter(Boolean).join("\n")});function k(n,t,e,o){var r=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},function(n,t,e){n.exports=e.p+"8810db825f77c760eb816c9b1b9c5911.png"},function(n,t,e){n.exports=e.p+"a7a65bad96b6c72d21859e81ad765c02.otf"},function(n,t,e){n.exports=e.p+"ef5a32c267adadd7f5ebaa8f89e62b45.otf"},function(n,t){n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[e].concat(i).concat([r]).join("\n")}var a;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&o[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(n,t){n.exports=function(n){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,t,e){var o=e(13);(n.exports=e(12)(!1)).push([n.i,'@font-face {\n  font-family: "Maven-light";\n  src: url('+o(e(11))+'); }\n\n@font-face {\n  font-family: "Maven-heavy";\n  src: url('+o(e(10))+'); }\n\nbody, html {\n  margin: 0px;\n  height: 100%;\n  color: #1F2232;\n  font-family: "Maven-heavy", Arial, Helvetica, sans-serif;\n  font-size: 18px; }\n\n.main {\n  display: flex;\n  flex-direction: column;\n  text-align: center; }\n\n.header {\n  font-size: 22px;\n  background-color: #075290;\n  color: white; }\n\n.subheader {\n  background-color: #a8e2f9; }\n\n.options {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap; }\n\n.options-restaurants {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n.small-box {\n  display: flex;\n  flex-direction: column;\n  border: 3px solid #a8e2f9;\n  background-color: white;\n  cursor: pointer;\n  padding: 5px 20px;\n  margin: 10px 20px;\n  letter-spacing: 1px;\n  font-size: 14px;\n  color: #1F2232;\n  font-family: Arial; }\n\n.category-box {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column; }\n\n.category-box-big {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\nbutton {\n  border: 3px solid #a8e2f9;\n  background-color: white;\n  cursor: pointer;\n  padding: 5px 20px;\n  margin: 10px 20px;\n  letter-spacing: 1px;\n  font-size: 14px;\n  color: #1F2232;\n  font-family: Arial;\n  width: 230px; }\n\nbutton:focus {\n  outline: 0; }\n\n.one-link {\n  margin-top: 20px;\n  display: flex;\n  justify-content: flex-end; }\n\n.links {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between; }\n\n.link {\n  background-color: #075290;\n  color: white;\n  text-transform: uppercase;\n  font-size: 20px; }\n\n.link:hover {\n  background-color: #05365f;\n  color: white; }\n\n.welcome-box {\n  display: flex;\n  flex-direction: column;\n  background-color: #71d0f5;\n  margin-top: 20vh;\n  max-height: 180px; }\n\n.welcome-box-heading {\n  display: flex;\n  justify-content: center; }\n  .welcome-box-heading h2 {\n    color: white;\n    text-shadow: 1px 1px #596475;\n    font-size: 50px;\n    font-weight: 1500;\n    padding: 5px; }\n  .welcome-box-heading p {\n    margin-top: 40px;\n    align-self: center;\n    padding: 5px; }\n\n.login {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 20px;\n  align-items: center; }\n  .login .login-box {\n    display: flex;\n    padding: 0px 5px 0px 5px;\n    align-items: center; }\n\n.section {\n  display: flex;\n  flex-direction: column; }\n\n.questions {\n  display: flex;\n  flex-direction: column; }\n\n.selection {\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n  padding: 5px 20px;\n  margin: 10px 20px;\n  letter-spacing: 1px;\n  font-size: 14px;\n  color: #1F2232;\n  background-color: #ececec;\n  font-family: Arial; }\n\n.select {\n  padding: 20px;\n  max-width: 600px; }\n\n.menus {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px; }\n  .menu h2 {\n    cursor: pointer; }\n\n.food-button {\n  display: flex;\n  flex-direction: column;\n  border: 3px solid #a8e2f9;\n  background-color: white;\n  cursor: pointer;\n  padding: 5px 20px;\n  margin: 10px 20px;\n  letter-spacing: 1px;\n  font-size: 10px;\n  color: #1F2232;\n  font-family: Arial;\n  max-width: 200px; }\n\n.marked {\n  background-color: #075290;\n  color: white; }\n\n.index {\n  background-image: url('+o(e(9))+");\n  background-repeat: no-repeat;\n  height: 100%;\n  background-size: cover;\n  background-position: center; }\n\n.start {\n  margin-top: 220px;\n  background-color: white;\n  color: #1F2232; }\n\n.restaurant-search-button:hover {\n  background-color: #075290;\n  color: white; }\n\n.dashboard {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px; }\n\n.dashboard-box {\n  display: flex; }\n\n.questionnaire {\n  margin: 20px;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .questionnaire img {\n    max-height: 200px; }\n  .questionnaire button {\n    max-width: 130px;\n    align-items: center;\n    margin: 2px; }\n  .questionnaire input {\n    height: 30px; }\n\n.new {\n  background-color: #D2F2ED; }\n  .new a {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-decoration: none; }\n\n.new:hover {\n  background-color: #a8e2f9; }\n  .new:hover button {\n    background-color: #D2F2ED; }\n",""])},function(n,t,e){var o=e(14);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(8)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){"use strict";e(15);var o=e(6),r=location.pathname.split("/").slice(-1)[0];$(document).ready(function(){i(r),$(".Etiology").hide(),$(".symptom").hide(),$(".Setting").hide(),$(".Transmission").hide(),$(".one-link.intake").hide(),$(".header.restaurants").hide(),$(".options-restaurants").hide(),$(".header.menu-items").hide(),$(".menus").hide(),o.clickView(),o.clearFormId(),o.loginSubmit(),o.logoutSubmit(),o.createForm(),o.etiologyIdentified(),o.symptomOptions(),o.etiologyOptions(),o.settingOptions(),o.goBack(),o.searchRestaurants(),o.marked(),o.markedSmallBox(),o.markedFoodButton(),o.markedAllMenuItems(),o.sendIntake(),o.sendDemographics(),o.sendClinicals(),o.sendExposures(),o.sendFoods()});var i=function(n){"intake.html"===n||"intake"===n?o.populateTags():"demographics.html"===n||"demographics"===n?o.populateDemographics():"clinical.html"===n||"clinical"===n?o.populateClinicals():"exposures.html"===n||"exposures"===n?o.populateExposures():"builder.html"===n||"builder"===n?o.populateQuestions():"dashboard.html"!==n&&"dashboard"!==n||o.populateForms()}}]);