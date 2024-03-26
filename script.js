let btn = document.querySelector(".btn"); // grab the button dom

btn.addEventListener("click", calculateAge); // add eventListener to button when got clicked

// creating function to calculate age
function calculateAge() {
  let input = document.querySelector("#input").value; // grab the input field value
  let result = document.querySelector(".result"); // grab the div to append output
  let ageLeft = 100 - input; // subtracts input field value with 100 to get  age left
  let days = ageLeft * 365; // multiply it by number of days in a year
  let weeks = ageLeft * 52; // mutiply it by number of weeks in a year
  let months = ageLeft * 12; // mutiply it by number of months in a year

  result.innerHTML = `<div class='alert alert-success'>you have ${days} days, ${weeks} weeks and ${months} left!</div>`; //append the output in result div with the div including class of alert to style it!
}
