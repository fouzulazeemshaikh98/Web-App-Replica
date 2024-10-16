function addList() {
    let parent = document.getElementById("task");
    let inp = document.getElementById("input");
    let element = document.createElement("p");
    element.setAttribute("class", "tk")
    let text = document.createTextNode(inp.value);
    element.appendChild(text);
    inp.value = ""
    parent.appendChild(element)

    // DeleteBtn 
    let delBtn = document.createElement("button");
    delBtn.setAttribute("class", "btn3")
    // delBtn.classList("btn3")
    // delBtn.setAttribute("click", abc(this));
    let delBtnText = document.createTextNode("Delete");
    delBtn.appendChild(delBtnText);
    element.appendChild(delBtn)

    // EditBtn
    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "btn4");
    let editBtnText = document.createTextNode("Edit");
    editBtn.appendChild(editBtnText);
    element.appendChild(editBtn)
}

function deleteList() {
    let main = document.getElementById("task");
    // main.innerHTML = ""
    main.innerHTML = ""
}

function abc(e) {
    console.log(e.parentNode.firstChild.remove())
}