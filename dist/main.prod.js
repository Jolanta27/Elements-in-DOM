"use strict";var addElement=function(e,t,n,o,c){e.preventDefault();var r=document.createElement(t);if(n){var d=document.createTextNode(n);r.appendChild(d)}o&&r.setAttribute(o,c),document.querySelector(".content").appendChild(r)},searchElements=function(e,t){e.preventDefault();var n=document.querySelector(".result");n.textContent="";var o=document.querySelectorAll(t);o.length?(n.innerHTML='<p class="result__number-info"> In this document I\'ve found '.concat(o.length," elements <strong>").concat(t,"</strong></p>"),showInfo(o,n)):n.innerHTML='<p class="result__number-info"> In this document I haven\'t found elements <strong>'.concat(t,"</strong></p>")},showInfo=function(e,n){console.log(e),e.forEach(function(e){var t=document.createElement("div");t.className="result__element-description",t.innerHTML="\n        <div>".concat(e.nodeName,"</div>\n        <div>class/classes: ").concat(e.className,"</div>\n        <div>Height of element (offsetHeight): ").concat(e.offsetHeight,"</div>\n        <div>Width of element (offsetWidth): ").concat(e.offsetWidth,"</div>\n        <div>Distance from the left (offsetLeft): ").concat(e.offsetLeft,"</div>\n        <div>Distance from the top (offsetTop): ").concat(e.offsetTop,"</div>\n        <div>Amout of childrens elements(childElementCount): ").concat(e.childElementCount,"</div>\n        "),n.appendChild(t)})},addForm=document.querySelector(".form--add");addForm.addEventListener("submit",function(e){return addElement(e,addForm.elements.node.value,addForm.elements.text.value,addForm.elements.attr.value,addForm.elements.value.value)});var searchForm=document.querySelector(".form--search");searchForm.addEventListener("submit",function(e){return searchElements(e,searchForm.elements["searching-element"].value)});