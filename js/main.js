const itemInput = document.querySelector('input[type = "text"]');
const form = document.querySelector('#form');
const addBtn = document.querySelector('#add');
const removeBtn = document.querySelector('#remove');
const itemList = document.querySelector('#list')
const compBtn = document.querySelector('#compbtn');





addBtn.addEventListener('click', addItem);


function addItem (e) {
    e.preventDefault();
    let newItem = itemInput.value;

if (newItem === "") {
    alert('you must write something');
}

else {
    let li = document.createElement("li");
    li.className = "todo__item";
    li.appendChild(document.createTextNode(newItem));

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
    // itemList.insertBefore(li, list.childNode[0]);
    itemList.appendChild(li);
    itemInput.value = "";

    createtBtn.addEventListener('click', removeItem);

    function removeItem(e) {
        console.log(li);
        li.remove()
    }

    
// complete button


// compBtn.onclick= function (e) {
//     console.log(itemList.li);
//     for (let i =0; i<itemList.length; i++) {
//         if(itemList[i].btnbox.input==true){
//             console.log("fghj");
//         }
//     }
// }
}

    
}



