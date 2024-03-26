const btn = document.querySelector(".btn"); // grab the button dom

btn.addEventListener("click", calculateAge); // add eventListener to button when got clicked

// creating function to calculate age
function calculateAge() {
  let input = document.querySelector("#input").value; // grab the input field value
  let result = document.querySelector(".result"); // grab the div to append output
  const ageLeft = 100 - input; // subtracts input field value with 100 to get  age left
  const days = ageLeft * 365; // multiply it by number of days in a year
  const weeks = ageLeft * 52; // mutiply it by number of weeks in a year
  const months = ageLeft * 12; // mutiply it by number of months in a year
  if (isNaN(input)) {
    result.innerHTML = `<div class= 'alert alert-danger'>Please Enter a number!</div>`;
  } else if (input === "") {
    result.innerHTML = `<div class= 'alert alert-warning'>Please Enter something!</div>`;
  } else {
    result.innerHTML = `<div class='alert alert-success'>you have ${days} days, ${weeks} weeks and ${months} left!</div>`; //append the output in result div with the div including class of alert to style it!
  }
}
