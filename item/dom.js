//EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
/*console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all[10]);
//document.all[10].textContent = "Hello";

console.log(document.forms);
console.log(document.links)
console.log(document.images);
*/

//GET ELEMENT BY ID//
//console.log(document.getElementById("header-title"));
//var headerTitle = document.getElementById("header-title");
//var header = document.getElementById("main-header");

//console.log(headerTitle);
//headerTitle.textContent = "Hello";
//headerTitle.innerText = "Goodbye";
//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = "<h3>Hello</h3>";
//headerTitle.style.borderBottom = "solid 3px #000";

//GETELEMENTBYCLASSNAME //
/*var item = document.getElementsByClassName("list-group-item");
console.log(item);
console.log(item[1]);
item[1].textContent = "Hello 2";
item[1].style.fontWeight = "bold";
item[1].style.backgroundColor = "yellow";*/

//gives error
//item.style.backgroundColor = "#f4f4f4";

//var header = document.getElementsByClassName("title");
//main.style.color = "green";
//main.style.fontWeight = "bold";

/*for (var i = 0; i < item.length; i++) {
  item[1].style.backgroundColor = "#f4f4f4";
  item[2].style.backgroundColor = "green";
  main.style.fontWeight = "bold";
}*/

//GETELEMENTBYTAGNAME //
/*var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent = "Hello 2";
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = "yellow";

for (var i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "#f4f4f4";
}*/

// QUERYSELECTOR //
/*var header = document.querySelector("#main-header");
header.getElementsByClassName.borderBottom = "solid 4px #ccc";

var input = document.querySelector("input");
input.value = "Hello world";

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item = document.querySelector(".list-group-item");
item.style.color = "red";

var lastItem = document.querySelector(".list-group-item:last-child");
console.log("lastItem is", lastItem);
lastItem.style.color = "blue";

var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor = "green";

*/
//QUERYSELECTORALL//
/*
var titles = document.querySelectorAll(".title");
console.log(titles);
titles[0].textContent = "Hello";

var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
  even[i].style.backgroundColor = "#ccc";
}

*/

/*TRAVERSING THE DOM //
var itemList = document.querySelector("#items");

//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentNode.parentNode);
parentNode = document.getElementById("items");
parentNode.innerHTML = "<li>Hello World</li>" + parentNode.innerHTML;
*/

//parentElement
/*console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentElement.parentElement.parentElement);
*/

//childNodes
//console.log(itemList.childNodes);

/*console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow";

*/
/*firstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello 1";

*/

/*LastChild
console.log(itemList.lastChild);
//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello 4";

*/

/*nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);
*/

/*previousSibling
console.log(itemList.previousSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";
*/

//createElement

/*/create a div
var newDiv = document.createElement("div");

//Add class
newDiv.className = "hello";

//Add id
newDiv.id = "hello 1";

//Add attr
newDiv.setAttribute("title", "hello Div");

//create text node
var newDivText = document.createTextNode("Hello World");

//Add text to Div
newDiv.appendChild(newDivText);

var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

console.log(newDiv);

newDiv.style.fontSize = "30px";

container.insertBefore(newDiv, h1);

*/
