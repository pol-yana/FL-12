// Your code goes here

let root = document.getElementById('root');

var list = document.createElement('div');
root.appendChild(list);

var btnAddNew = document.createElement('button');
btnAddNew.innerHTML = 'Add new';
root.appendChild(btnAddNew);

getAllKeyValueFromLocalStorage();

btnAddNew.addEventListener('click', function() {
  if (!document.getElementById('id-form')) {
    let createForm = document.createElement('div');
    createForm.setAttribute('id', 'id-form');
    root.appendChild(createForm);

    let keyLabel = document.createElement('label');
    keyLabel.innerHTML = 'Key:';
    createForm.appendChild(keyLabel);

    let keyInput = document.createElement('input');
    keyInput.setAttribute('type', 'text');
    keyInput.setAttribute('name', 'dkey');
    createForm.appendChild(keyInput);

    let linebreak1 = document.createElement('br');
    createForm.appendChild(linebreak1);

    let valueLabel = document.createElement('label');
    valueLabel.innerHTML = 'Value:';
    createForm.appendChild(valueLabel);

    let valueInput = document.createElement('input');
    valueInput.value = '';
    valueInput.setAttribute('type', 'text');
    valueInput.setAttribute('name', 'dvalue');
    createForm.appendChild(valueInput);

    let lineBreak2 = document.createElement('br');
    createForm.appendChild(lineBreak2);

    let submit = document.createElement('button');

    submit.innerHTML = 'SAVE';
    createForm.appendChild(submit);

    submit.onclick = function() {
      window.location.hash = '#/add';
      addToLocalStorage(keyInput.value, valueInput.value);
      getAllKeyValueFromLocalStorage();
    };
  } else {
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  }
});

function buttonEdit(key, value) {
  let btnEdit = document.createElement('button');
  btnEdit.innerHTML = 'Edit';
  btnEdit.addEventListener('click', function() {
    editInLocalStorage(key, value);
  });
  return btnEdit;
}

function buttonDelete(key) {
  let btnDelete = document.createElement('button');
  btnDelete.innerHTML = 'Delete';

  btnDelete.addEventListener('click', function() {
    localStorage.removeItem(key);
    getAllKeyValueFromLocalStorage();
  });

  return btnDelete;
}

function addToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function editInLocalStorage(key, value) {
  let createForm = document.createElement('div');

  createForm.setAttribute('id', 'id-form');
  root.appendChild(createForm);

  let valueLabel = document.createElement('label');
  valueLabel.innerHTML = 'Value:';
  createForm.appendChild(valueLabel);

  let valueInput = document.createElement('input');
  valueInput.setAttribute('type', 'text');
  valueInput.setAttribute('name', 'dvalue');
  createForm.appendChild(valueInput);

  let lineBreak2 = document.createElement('br');
  createForm.appendChild(lineBreak2);

  let submit = document.createElement('button');

  submit.innerHTML = 'Update';
  createForm.appendChild(submit);

  submit.onclick = function() {
    value = valueInput.value;
    rewriteLocalStorage(key, value);
    getAllKeyValueFromLocalStorage();
  };
}

function getAllKeyValueFromLocalStorage() {
  list.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    showKeyValueInHtml(i + 1, key, value);
  }
}

function showKeyValueInHtml(i, key, value) {
  let showKey = document.createElement('p');
  showKey.innerHTML = i + '. ' + key + ' : ' + value;
  showKey.appendChild(buttonDelete(key));
  showKey.appendChild(buttonEdit(key, value));
  list.appendChild(showKey);
}

function rewriteLocalStorage(key, value) {
  localStorage.setItem(key, value);
}
