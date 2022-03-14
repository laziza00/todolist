const itemInput = document.querySelector('#inputform');
const form = document.querySelector('#form');
const addBtn = document.querySelector('#add');
const removeBtn = document.querySelector('#remove');
const itemList = document.querySelector('#list')
const compBtn = document.querySelector('#compbtn');
const filter = document.querySelector('#filter');





addBtn.addEventListener('click', addItem);


function addItem (e) {
    e.preventDefault();
    let newItem = itemInput.value;

// if (newItem === "") {
//     alert('you must write something');
// }

// else {
    let li = document.createElement("li");
    li.className = "todo__item";
    // li.appendChild(document.createTextNode(newItem));
    li.innerHTML = `<p>${newItem}</p>`;

    let btnbox = document.createElement("div");
    btnbox.className = "btn__box";

    let createtBtn = document.createElement("button");
    createtBtn.className = "btn remove__btn";
    createtBtn.innerHTML = "-";

    let checkBtn = document.createElement("input");
    checkBtn.type= "checkbox";
    checkBtn.className = "btn check__btn";

    // checkBtn.checked= true;

    btnbox.appendChild(createtBtn);
    btnbox.appendChild(checkBtn);

    li.appendChild(btnbox);

    console.log(li);

    itemList.appendChild(li);
    itemInput.value = "";

    createtBtn.addEventListener('click', removeItem);

    function removeItem(e) {
        console.log(li);
        li.remove()
    }

// }
}

// filter search

filter.addEventListener('keyup', filterItems);


function filterItems(e) {
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');

    if (text!= '') {
        for (let i=0; i<Array.from(items).length; i++){
    
            let itemName = items[i].firstElementChild.textContent;
            if (itemName.toLowerCase().indexOf(text) != -1) {
                items[i].style.color = 'red'
            }else {
                items[i].style.display = 'none'
            }
        }
    }
}





// complete button


compBtn.addEventListener('click', compFilter)

function compFilter (e) {

    for (let i =0; i<Array.from(itemList).length; i++) {
        if(itemList[i].btnbox.checkBtn.checked==true){
            console.log("fghj");
        }
    }
}