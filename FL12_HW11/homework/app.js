const structure = [
  {
    folder: true,
    title: "Films",
    children: [
      {
        title: "Iron Man.avi"
      },
      {
        folder: true,
        title: "Fantasy",
        children: [
          {
            title: "The Lord of the Rings.avi"
          },
          {
            folder: true,
            title: "New folder 1",
            children: false
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: "Documents",
    children: [
      {
        folder: true,
        title: "EPAM Homework answers",
        children: null
      }
    ]
  }
];

const rootNode = document.getElementById("root");

function build(elem) {
  var node = document.createElement("LI");
  node.classList.add("caret");

  if (elem.children !== false && elem.children !== null) {
    var nestedNode = document.createElement("UL");
    nestedNode.classList.add("nested");

    var textnode = document.createTextNode(elem.title);
    node.appendChild(textnode);

    if (elem.children) {
      for (let j = 0; j < elem.children.length; j++) {
        nestedNode.appendChild(build(elem.children[j]));
      }
    }

    node.appendChild(nestedNode);
  } else {
    console.log(elem);
    var textnode = document.createTextNode(elem.title);
    node.appendChild(textnode);

    var nestedNode = document.createElement("UL");
    nestedNode.classList.add("nested");
    
    var nestedTextNode = document.createTextNode("Folder is empty");
    nestedNode.appendChild(nestedTextNode);
    
    node.appendChild(nestedNode);
  }
  return node;
}

for (let i = 0; i < structure.length; i++) {
  rootNode.appendChild(build(structure[i]));
}

for (let i = 0; i < rootNode.length; i++) {
  rootNode[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.rootNode("active");
    this.classList.rootNode("caret-down");
  });
}
