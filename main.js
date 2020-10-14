const addElement = (e, node, txt, attr, value) => {
    e.preventDefault();
    const element = document.createElement(node);

    if (txt) {
        const text = document.createTextNode(txt);
        element.appendChild(text);
    }
    if (attr) {
        element.setAttribute(attr, value);
    }
    document.querySelector('.content').appendChild(element);
}

const searchElements = (event, nameElement) => {
    event.preventDefault();
    const infoElement = document.querySelector('.result');
    infoElement.textContent = '';
    const elements = document.querySelectorAll(nameElement);

    if (elements.length) {
        infoElement.innerHTML = `<p class="result__number-info"> In this document I've found ${elements.length} elements <strong>${nameElement}</strong></p>`;
        showInfo(elements, infoElement)
    } else {
        infoElement.innerHTML = `<p class="result__number-info"> In this document I haven't found elements <strong>${nameElement}</strong></p>`;
        return;
    }
}

const showInfo = (elements, infoElement) => {
    console.log(elements);
    elements.forEach(element => {
        const item = document.createElement('div');
        item.className = 'result__element-description';
        item.innerHTML = `
        <div>${element.nodeName}</div>
        <div>class/classes: ${element.className}</div>
        <div>Height of element (offsetHeight): ${element.offsetHeight}</div>
        <div>Width of element (offsetWidth): ${element.offsetWidth}</div>
        <div>Distance from the left (offsetLeft): ${element.offsetLeft}</div>
        <div>Distance from the top (offsetTop): ${element.offsetTop}</div>
        <div>Amout of childrens elements(childElementCount): ${element.childElementCount}</div>
        `;
        infoElement.appendChild(item);
    })
};

const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value,

))

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', (e) => searchElements(e, searchForm.elements['searching-element'].value));