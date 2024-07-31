(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function o(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t,n){return(t=c(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,c(o.key),o)}}function c(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var a=o.call(e,"string");if("object"!=t(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}e.d({},{l:()=>p,x:()=>y});var d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Untitled",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=t,this.desc=n,this.date=o,this.done=a}return t=e,n=[{key:"formatDate",value:function(e){return e.toLocaleDateString()}},{key:"addCard",value:function(t){var n=new e(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Untitled",arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",arguments.length>3&&void 0!==arguments[3]?arguments[3]:new Date);t.push(n),e.saveToLocalStorage(t)}},{key:"removeCard",value:function(t,n){n>=0&&n<t.length&&(t.splice(n,1),e.saveToLocalStorage(t))}},{key:"changeDone",value:function(t,n,o){if(n>=0&&n<t.length){var a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,a,r,i,c=[],d=!0,s=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;d=!1}else for(;!(d=(o=r.call(n)).done)&&(c.push(o.value),c.length!==t);d=!0);}catch(e){s=!0,a=e}finally{try{if(!d&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t.splice(n,1),1)[0];a.done=!a.done,o.push(a),e.saveToLocalStorage(t,o)}}},{key:"updateToDoData",value:function(t,n,o,a,r){if(n>=0&&n<t.length){var i=t[n];i.title=o,i.desc=a,i.date=new Date(r),e.saveToLocalStorage(t)}}},{key:"saveToLocalStorage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];localStorage.setItem("myToDos",JSON.stringify(e.map((function(e){return o(o({},e),{},{desc:e.desc.replace(/\n/g,"\\n"),date:e.date.toISOString()})})))),localStorage.setItem("doneToDos",JSON.stringify(t.map((function(e){return o(o({},e),{},{desc:e.desc.replace(/\n/g,"\\n"),date:e.date.toISOString()})}))))}},{key:"loadFromLocalStorage",value:function(){return{myToDos:JSON.parse(localStorage.getItem("myToDos")||"[]").map((function(e){return o(o({},e),{},{desc:e.desc.replace(/\\n/g,"\n"),date:new Date(e.date)})})),doneToDos:JSON.parse(localStorage.getItem("doneToDos")||"[]").map((function(e){return o(o({},e),{},{desc:e.desc.replace(/\\n/g,"\n"),date:new Date(e.date)})}))}}},{key:"determineBackgroundColor",value:function(e){var t=new Date;t.setHours(0,0,0,0);var n=e.getTime()-t.getTime(),o=Math.floor(n/864e5);return o<-8?"lime":o<=-3&&o>=-7?"yellow":o<=0&&o>=-2?"orange":o>0?"#FF4545":void 0}},{key:"printCards",value:function(t,n,o,a){o&&a?(o.innerHTML="",a.innerHTML="",t.forEach((function(a,r){var i=document.createElement("div");i.classList.add("projectBox"),i.style.backgroundColor=e.determineBackgroundColor(a.date),i.innerHTML='\n                <div class="title" contenteditable="true" data-index="'.concat(r,'" data-list="active">\n                    ').concat(a.title,'\n                </div>\n                <div class="notes" contenteditable="true" data-index="').concat(r,'" data-list="active">\n                    ').concat(a.desc.replace(/\n/g,"<br>"),'\n                </div>\n                <input type="date" class="due-date" value="').concat(a.date.toISOString().split("T")[0],'" data-index="').concat(r,'" data-list="active">\n                <button class="delete" data-index="').concat(r,'" data-list="active">\n                    <span class="material-symbols-outlined small">delete</span>\n                </button>\n                <button class="tick" data-index="').concat(r,'" data-list="active">\n                    <span class="material-symbols-outlined small">check</span>\n                </button>\n            '),o.appendChild(i);var c=i.querySelector(".title"),d=i.querySelector(".notes"),s=i.querySelector(".due-date");c.addEventListener("blur",(function(o){t[r].title=o.target.textContent.trim(),e.saveToLocalStorage(t,n)})),d.addEventListener("blur",(function(o){t[r].desc=o.target.innerHTML.replace(/<br>/g,"\n").trim(),e.saveToLocalStorage(t,n)})),s.addEventListener("change",(function(o){var a=new Date(o.target.value);t[r].date=a;var c=e.determineBackgroundColor(a);i.style.backgroundColor=c,e.saveToLocalStorage(t,n)}))})),n.forEach((function(o,r){var i=document.createElement("div");i.classList.add("projectBox","done"),i.innerHTML='\n                <div class="title" contenteditable="true" data-index="'.concat(r,'" data-list="done">\n                    ').concat(o.title,'\n                </div>\n                <div class="notes" contenteditable="true" data-index="').concat(r,'" data-list="done">\n                    ').concat(o.desc.replace(/\n/g,"<br>"),'\n                </div>\n                <div class="due-date" data-index="').concat(r,'" data-list="done">\n                    ').concat(e.formatDate(o.date),'\n                </div>\n                <button class="delete" data-index="').concat(r,'" data-list="done">\n                    <span class="material-symbols-outlined small">delete</span>\n                </button>\n                <button class="tick" data-index="').concat(r,'" data-list="done">\n                    <span class="material-symbols-outlined small">check</span>\n                </button>\n            '),a.appendChild(i);var c=i.querySelector(".title"),d=i.querySelector(".notes");c.addEventListener("blur",(function(o){n[r].title=o.target.textContent.trim(),e.saveToLocalStorage(t,n)})),d.addEventListener("blur",(function(o){n[r].desc=o.target.innerHTML.replace(/<br>/g,"\n").trim(),e.saveToLocalStorage(t,n)}))}))):console.error("One or both containers are missing.")}}],null&&i(t.prototype,null),n&&i(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,u(o.key),o)}}function u(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}var v=function(){return e=function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.index=t,this.title="New To Do",this.desc="Description of ToDo",this.myToDos=[],this.doneToDos=[],this.projectsArray=n},(t=[{key:"CreateToDo",value:function(){var e=document.getElementById("list"),t=document.createElement("li");t.classList.add("projects"),t.setAttribute("data-index",this.index),t.innerHTML='\n            <button><i class="fas fa-home"></i>'.concat(this.title,"</button>\n        "),e.appendChild(t)}},{key:"PrintToDo",value:function(){var e=this;document.getElementById("content").innerHTML='\n            <header contenteditable="true" data-index="'.concat(this.index,'">').concat(this.title,'</header>\n            <div id="para" contenteditable="true">').concat(this.desc,'</div>\n            <h1> > Active To Dos </h1>\n            <div class="container" id="c1"></div>\n            <h1> > Finished To Dos </h1>\n            <div class="container" id="c2"></div>\n            <button id="pen">\n                <span class="material-symbols-outlined">stylus</span>\n            </button>\n            <button id="delete">\n                <span class="material-symbols-outlined">delete</span>\n            </button>\n        '),this.updateAndRender(),document.getElementById("pen").addEventListener("click",(function(){e.addNewCard()})),document.getElementById("delete").addEventListener("click",(function(){e.DeleteProject(),y()})),this.addCardEventListeners(),this.addEditEventListeners()}},{key:"addEditEventListeners",value:function(){var e=this,t=document.querySelector("header[data-index]"),n=document.getElementById("para");t&&t.addEventListener("blur",(function(){e.title=t.innerText.trim(),e.saveChanges(),e.updateSidebar()})),n&&n.addEventListener("blur",(function(){e.desc=n.innerText.trim(),e.saveChanges()}))}},{key:"saveChanges",value:function(){p()}},{key:"updateSidebar",value:function(){var e=document.getElementById("list").querySelector('li[data-index="'.concat(this.index,'"]'));e&&(e.querySelector("button").innerHTML='<i class="fas fa-home"></i>'.concat(this.title))}},{key:"addCardEventListeners",value:function(){var e=this,t=document.getElementById("c1"),n=document.getElementById("c2");t&&t.addEventListener("click",(function(t){var n=t.target.closest("button");if(n){var o=parseInt(n.getAttribute("data-index"),10);n.getAttribute("data-list"),n.classList.contains("delete")?d.removeCard(e.myToDos,o):n.classList.contains("tick")&&d.changeDone(e.myToDos,o,e.doneToDos),e.updateAndRender()}})),n&&n.addEventListener("click",(function(t){var n=t.target.closest("button");if(n){var o=parseInt(n.getAttribute("data-index"),10);n.getAttribute("data-list"),n.classList.contains("delete")?d.removeCard(e.doneToDos,o):n.classList.contains("tick")&&d.changeDone(e.doneToDos,o,e.myToDos),e.updateAndRender()}}))}},{key:"DeleteProject",value:function(){this.index>=0&&this.index<this.projectsArray.length&&this.projectsArray.splice(this.index,1)}},{key:"addNewCard",value:function(){d.addCard(this.myToDos),this.updateAndRender()}},{key:"updateAndRender",value:function(){var e=document.getElementById("c1"),t=document.getElementById("c2");e&&d.printCards(this.myToDos,this.doneToDos,e,t)}}])&&l(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}(),f=[],m=null;function y(){g();var e=document.getElementById("list");e?(e.innerHTML="",f.forEach((function(e){e.CreateToDo()}))):console.error("Element with ID 'list' not found.")}function p(){var e=f.map((function(e){return{title:e.title,desc:e.desc,myToDos:e.myToDos.map((function(e){return{title:e.title,desc:e.desc,date:e.date.toISOString(),done:e.done}})),doneToDos:e.doneToDos.map((function(e){return{title:e.title,desc:e.desc,date:e.date.toISOString(),done:e.done}}))}}));localStorage.setItem("projectsArray",JSON.stringify(e))}function g(){document.getElementById("content").innerHTML='\n        <header>\n            To Do List App\n        </header>\n        <div id="para">\n            Hi, this is my to do list app, made using HTML, CSS, JS on VS Code and webpack. It is designed for you to set activities, or\n            even make notes. You can press the pen icon to create a new card, delete an existing one using the trash can icon, or press\n            the tick to indicate when an activity is finished. Once a task is finished it goes to the finished section and it can be edited\n            in case. Note: The title is designed to be on one line only so if you start a new \n            line, refresh the page so it functions normally. \n        </div>\n    '}document.addEventListener("DOMContentLoaded",(function(){var e;(e=JSON.parse(localStorage.getItem("projectsArray")))&&(e.forEach((function(e,t){var n=new v(t,f);n.title=e.title,n.desc=e.desc,n.myToDos=e.myToDos.map((function(e){return new d(e.title,e.desc,new Date(e.date),e.done)})),n.doneToDos=e.doneToDos.map((function(e){return new d(e.title,e.desc,new Date(e.date),e.done)})),f.push(n)})),y()),g(),document.getElementById("create").addEventListener("click",(function(){var e=f.length,t=new v(e,f);t.CreateToDo(),f.push(t),p()})),document.getElementById("list").addEventListener("click",(function(e){var t=e.target.closest(".projects");if(t){var n=parseInt(t.getAttribute("data-index"),10),o=f[n];o&&(o.PrintToDo(),m=n)}})),document.getElementById("home").addEventListener("click",g),document.getElementById("content").addEventListener("click",(function(e){e.target.closest("#delete")&&null!==m&&f[m]&&(f[m].DeleteProject(),y(),p())})),document.getElementById("content").addEventListener("click",(function(e){var t=e.target.closest("button");if(t){var n=parseInt(t.getAttribute("data-index"),10),o=t.getAttribute("data-list");t.classList.contains("delete")?"active"===o?d.removeCard(f[m].myToDos,n):"done"===o&&d.removeCard(f[m].doneToDos,n):t.classList.contains("tick")&&("active"===o?d.changeDone(f[m].myToDos,n,f[m].doneToDos):"done"===o&&d.changeDone(f[m].doneToDos,n,f[m].myToDos)),f[m]&&f[m].updateAndRender(),p()}}))}))})();