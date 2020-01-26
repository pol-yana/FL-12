

// Your code goes here

var root = document.getElementById("root");
console.log(root);
var btmAddNew = document.createElement("button");
btmAddNew.innerHTML='Add new';
root.appendChild(btmAddNew);
console.log(root);

btmAddNew.addEventListener('click', function(){
    var createForm = document.createElement('form');
createForm.setAttribute('action', "");
createForm.setAttribute('metod', 'post');
root.appendChild(createForm);

var keyLabel = document.createElement('label');
keyLabel.innerHTML = "Key:";
createForm.appendChild(keyLabel);


var keyInput = document.createElement('input');
keyInput.setAttribute('type', "text");
keyInput.setAttribute('name', 'dkey');
createForm.appendChild(keyInput);

var linebreak = document.createElement('br');
createForm.appendChild(linebreak);

var valueLabel = document.createElement('label');
valueLabel.innerHTML = "Value:";
createForm.appendChild(valueLabel);


var valueInput = document.createElement('input');
valueInput.setAttribute('type', "text");
valueInput.setAttribute('name', 'dvalue');
createForm.appendChild(valueInput);

var linebreak = document.createElement('br');
createForm.appendChild(linebreak);

var submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('name', 'dsubmit');
submit.setAttribute('value', "submit");
createForm.appendChild(submit);
    
});
// var createForm = document.createElement('form');
// createForm.setAttribute('action', "");
// createForm.setAttribute('metod', 'post');
// root.appendChild(createForm);

// var keyLabel = document.createElement('label');
// keyLabel.innerHTML = "Key:";
// createForm.appendChild(keyLabel);


// var keyInput = document.createElement('input');
// keyInput.setAttribute('type', "text");
// keyInput.setAttribute('name', 'dname');
// createForm.appendChild(keyInput);

// var linebreak = document.createElement('br');
// createForm.appendChild(linebreak);

// var valueLabel = document.createElement('label');
// valueLabel.innerHTML = "Value:";
// createForm.appendChild(valueLabel);


// var valueInput = document.createElement('input');
// valueInput.setAttribute('type', "text");
// valueInput.setAttribute('name', 'dname');
// createForm.appendChild(valueInput);

