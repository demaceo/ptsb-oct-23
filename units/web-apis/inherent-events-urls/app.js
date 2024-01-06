/*
    ? Forms
    * default behavior is to send a GET request to the action attr value
    * can be overriden using event.preventDefault()
    * name attr within html elements give data its properties

    ? URL's
    * Uniform Resource Locator
    * carries protocol, top domain, sub domain, route, and any queries
    * Query params are the data that comes from our form
    * Begin with ? symbol
    * Followed by key=value pair
    * Separated with & symbol
    * Example of our GET request
    * 127.0.0.1:4000/index.html?email=dan%40uprighted.com&pwd=password123
*/

const db = [
  { email: "abc@example.com", pwd: "password123" },
  { email: "def@example.com", pwd: "password123" },
  { email: "ghi@example.com", pwd: "password123" },
];

let url = document.location;
let urlSearch = document.location.search;
// console.log(url);
// console.log(urlSearch);

let params = new URLSearchParams(urlSearch);
// console.log(params);

let email = params.get("email");
let pwd = params.get("pwd");

const submitButton = document.getElementById("submit");
const outputStatus = document.getElementById("output");

if (params.size > 0) {
  document.getElementById("email").value = email;
  document.getElementById("pwd").value = pwd;
}
submitButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  let email = evt.target.form[0].value;
  let pwd = evt.target.form[1].value;
  // sendDataToServer(evt.target.form[0].value, evt.target.form[1].value);

  const foundUser = db.find((user) => user.email === email && user.pwd === pwd);
});
