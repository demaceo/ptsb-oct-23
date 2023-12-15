/*
    ? Event Listeners
    * allow us to execute a callback fx when an event occurs
    * .addEventListener() takes an event and fires a callback
    * event - a string for the event type
    * callback = fx that is triggered immediately after event occurs
*/

// const listInput = document.getElementById("listInput");

/*
 * 1. Event listener listens for a key up event
 * 2. We collect it within the event argument
 * 3. We access the target property of the element on which the event listener was placed
 * 4. We console.log it's .value property
 */
// listInput.addEventListener("keyup", event => console.log(event.target.value))
//
const textInputTodo = document.getElementById("listInput");

textInputTodo.addEventListener("keyup", (evt) => {
  console.log(evt.target.value);
  let currentInputValue = evt.target.value;

  if (currentInputValue === "dan") {
    // alert("you entered dan");
    if (confirm("you entered dan")) {
      console.log("hi dan");
    }
  }
});

const removeBtn = document.getElementById("remove");

removeBtn.addEventListener("click", (evt) => {
  console.log(evt);
});

const ulToDo = document.getElementById("ulToDo");
const addBtn = document.getElementById("add");
addBtn.addEventListener("click", (evt) => {
  const newItem = document.createElement("li");
  ulToDo.append(newItem);
});

/*
    ! Challenge
    * We can add items BUT
    * Create Remove Item button. Once it's clicked, it will remove the last list item in our TODO list
*/

// ! Add your answer here
