const structure = [
  {
    folder: true,
    title: 'Films',
    children: [
      {
        title: 'Iron Man.avi'
      },
      {
        folder: true,
        title: 'Fantasy',
        children: [
          {
            title: 'The Lord of the Rings.avi'
          },
          {
            folder: true,
            title: 'New folder 1',
            children: false
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: 'Documents',
    children: [
      {
        folder: true,
        title: 'EPAM Homework answers',
        children: null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

function build(elem) {
  let node = document.createElement('LI');
  let textnode = document.createTextNode(elem.title);
  let nestedNode = document.createElement('UL');

  if (elem.folder) {
    if (elem.children !== false && elem.children !== null) {

      node.classList.add('caret');
      nestedNode.classList.add('nested');
      node.appendChild(textnode);

      if (elem.children) {
        for (let j = 0; j < elem.children.length; j++) {
          nestedNode.appendChild(build(elem.children[j]));
        }
      }

      node.appendChild(nestedNode);

    } else {
      
      node.classList.add('caret');
      node.appendChild(textnode);
      nestedNode.classList.add('nested');

      let nestedTextNode = document.createTextNode('Folder is empty');
      nestedNode.appendChild(nestedTextNode);

      node.appendChild(nestedNode);
    }
  } else {
    
    node.classList.add('file');
    node.appendChild(textnode);
    
  }

  return node;
}

for (let i = 0; i < structure.length; i++) {
  rootNode.appendChild(build(structure[i]));
}

var root = document.getElementById('root');

root.onclick = function(event){
  event.target.querySelector('.nested').classList.toggle('active');
  event.target.classList.toggle('caret-down');
}
 



