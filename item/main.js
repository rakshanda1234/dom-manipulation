var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

//Form submit event
form.addEventListener("submit", addItem);

//Add Item
function addItem(e) {
  e.preventDefault();

  console.log(1);
}
//Get input value
/* var newItem = document.getElementById("item").value;

  ///create new li element
  var li = document.createElement("li");

  //add class
  li.className = "list-group-item";

  //add text node with input value
  li.appendChild(document.createTextNode(newItem));

  itemList.appendChild(li);

  // create del button element
  var deletBtn = document.createElement("button");

  //Add classes to del button
  deletBtn.className = "btn btn-danger btn-sm float-right delete";

  //Append text node
  deletBtn.appendChild(document.createTextNode("X"));

  //Append button to li
  li.appendChild(deletBtn);

  //Append li to list
  itemList.appendChild(li);
}

//Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
  */
