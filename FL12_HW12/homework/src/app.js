// Your code goes here

var root = document.getElementById("root");
console.log(root);

var btnAddNew = document.createElement("button");
btnAddNew.innerHTML = "Add new";
root.appendChild(btnAddNew);
console.log(root);

btnAddNew.addEventListener("click", function() {
  if( !document.getElementById("id-form") ){
    var createForm = document.createElement("div");
    // createForm.setAttribute("action", "");
    // createForm.setAttribute("metod", "post");
    createForm.setAttribute("id", "id-form");
    root.appendChild(createForm);
  
    var keyLabel = document.createElement("label");
    keyLabel.innerHTML = "Key:";
    createForm.appendChild(keyLabel);
  
    var keyInput = document.createElement("input");
    keyInput.setAttribute("type", "text");
    keyInput.setAttribute("name", "dkey");
    createForm.appendChild(keyInput);
  
    var linebreak1 = document.createElement("br");
    createForm.appendChild(linebreak1);
  
    var valueLabel = document.createElement("label");
    valueLabel.innerHTML = "Value:";
    createForm.appendChild(valueLabel);
  
    var valueInput = document.createElement("input");
    console.log(valueInput);
    valueInput.value = '';
    valueInput.setAttribute("type", "text");
    valueInput.setAttribute("name", "dvalue");
    createForm.appendChild(valueInput);
  
    var lineBreak2 = document.createElement("br");
    createForm.appendChild(lineBreak2);
  
    var submit = document.createElement("button");
  
  submit.innerHTML = "SAVE";
    // submit.setAttribute("type", "submit");
    // submit.setAttribute("name", "dsubmit");
    // submit.setAttribute("value", "submit");
    createForm.appendChild(submit);
  
    submit.onclick = function() {
      // console.log(keyInput.value, valueInput.value);
      window.location.hash = '#/add'; 
      addToLocalStorage(keyInput.value, valueInput.value);
      getAllKeyValueFromLocalStorage();
    };
  } else{
    var inputs = document.getElementsByTagName('input');
    for(let i=0; i<inputs.length; i++){
      inputs[i].value = '';
    }
  }
  
});

// todo: button EDIT
function buttonEdit() {
  var btnEdit = document.createElement("button");
  btnAddNew.innerHTML = "Edit";
  root.appendChild(btnEdit);
}
// todo: button DELETE
function buttonDelete() {
  var btnDelete = document.createElement("button");
  btnAddNew.innerHTML = "Delete";
  root.appendChild(btnDelete);
}
// todo: add to localStorage
function addToLocalStorage(key, value) {
  // console.log(key, " ==== ", value);
  localStorage.setItem(key, value);
}
// todo: edit in localStorage

// todo: remove from localStorage

function getAllKeyValueFromLocalStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    // console.log(key, " == ", value);
    showKeyValueInHtml(key, value);
  }
}
function showKeyValueInHtml(key, value) {
  let showKey = document.createElement("p");
  showKey.innerHTML = key+' = ' + value;
  root.appendChild(showKey);

  // let showValue = document.createElement("p");
  // showValue.innerHTML = value;
  // root.appendChild(showValue);
}
