//single element

//const form = document.getElementById("my-form");
//console.log(document.querySelector(".container"));

//Multiple Element
//console.log(document.querySelectorAll(".item"));

//const ul = document.querySelector(".items");

//ul.remove();

//ul.lastElementChild.remove();

//ul.firstElementChild.textContent = "Hello";

//ul.children[1].innerText = "Brad";
//ul.lastElementChild.innerHTML = "<h4>Hello</h4>";

/*const btn = document.querySelector(".btn");
btn.style.background = "red";*/

//ul.firstElementChild.style.background = "green";
//ul.children[1].style.background = "yellow";

/*const btn = document.querySelector(".btn");
//mouse over,out
btn.addEventListener("mouseout", (e) => {
  e.preventDefault();
  document.querySelector("#my-form").style.background = "white";

  btn.addEventListener("mouseover", (e) => {
    e.preventDefault();
    document.querySelector("#my-form").style.background = "grey";

    // document.querySelector("body").classList.add("bg-dark");
    //document.querySelector(".items").lastElementChild.innerHTML =
    //"<h1>Hello</h1>";
  });
});
*/
/*validation
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  //console.log(nameInput.value);

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "please enter all fields";
    //alert("Please enter field");

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    ///clear field
    nameInput.value = " ";
    emailInput.value = " ";
  }
}
*/

//Task -10

function saveToLocalStorage(event) {
  const name = event.target.name.value;
  const email = event.target.email.value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);

  //Task -11
  const obj = {
    name,
    email,
  };
  localStorage.setItem("userDetails", JSON.stringify(obj));

  let user = [];
  let users = JSON.parse(localStorage.getItem("list")) || [];
}
