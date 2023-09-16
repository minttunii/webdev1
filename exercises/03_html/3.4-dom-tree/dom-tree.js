const ul = document.querySelector('nav ul');

// Create anchor element inside li element.
var li = document.createElement("li");
var a = document.createElement('a'); 
var link = document.createTextNode("Localhost");
a.appendChild(link); 
a.title = "Localhost"; 
a.href = "http://localhost:3000/"; 

// Append the anchor element to li and li to ul
li.appendChild(a); 
ul.appendChild(li);

// Add new li element to ordered list's first place
var li0 = document.createElement("li");
var txt = document.createTextNode("Item 0");
li0.appendChild(txt);
ol = document.querySelector('ol');
ol.insertBefore(li0, ol.children[0]);

// Delete the second element from unordered list
document.getElementById("todo").removeChild(document.getElementById("todo").children[1]);

// Add class list to nav list ul
ul.classList.add("list");
