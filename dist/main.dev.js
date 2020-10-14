"use strict";

var addElement = function addElement(e, node, txt, attr, value) {
  e.preventDefault();
  var element = document.createElement(node);

  if (txt) {
    var text = document.createTextNode(txt);
    element.appendChild(text);
  }

  if (attr) {
    element.setAttribute(attr, value);
  }

  document.querySelector('.content').appendChild(element);
};

var searchElements = function searchElements(event, nameElement) {
  event.preventDefault();
  var infoElement = document.querySelector('.result');
  infoElement.textContent = '';
  var elements = document.querySelectorAll(nameElement);

  if (elements.length) {
    infoElement.innerHTML = "<p class=\"result__number-info\"> In this document I've found ".concat(elements.length, " elements <strong>").concat(nameElement, "</strong></p>");
    showInfo(elements, infoElement);
  } else {
    infoElement.innerHTML = "<p class=\"result__number-info\"> In this document I haven't found elements <strong>".concat(nameElement, "</strong></p>");
    return;
  }
};

var showInfo = function showInfo(elements, infoElement) {
  console.log(elements);
  elements.forEach(function (element) {
    var item = document.createElement('div');
    item.className = 'result__element-description';
    item.innerHTML = "\n        <div>".concat(element.nodeName, "</div>\n        <div>class/classes: ").concat(element.className, "</div>\n        <div>Height of element (offsetHeight): ").concat(element.offsetHeight, "</div>\n        <div>Width of element (offsetWidth): ").concat(element.offsetWidth, "</div>\n        <div>Distance from the left (offsetLeft): ").concat(element.offsetLeft, "</div>\n        <div>Distance from the top (offsetTop): ").concat(element.offsetTop, "</div>\n        <div>Amout of childrens elements(childElementCount): ").concat(element.childElementCount, "</div>\n        ");
    infoElement.appendChild(item);
  });
};

var addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', function (e) {
  return addElement(e, addForm.elements.node.value, addForm.elements.text.value, addForm.elements.attr.value, addForm.elements.value.value);
});
var searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', function (e) {
  return searchElements(e, searchForm.elements['searching-element'].value);
});