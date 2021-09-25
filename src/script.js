function visitLofoten() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let date = prompt("What month would you like to go?");
  if (name.length > 0 && email.length > 0) {
    alert(
      `Thank you ${name}, we will be in touch with you shortly with our best deals to Lofoten in ${date}!`
    );
  } else {
    alert("Please enter your details again to see our current deals!");
  }
}

function visitCanada() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let date = prompt("What month would you like to go?");
  if (name.length > 0 && email.length > 0) {
    alert(
      `Thank you ${name}, we will be in touch with you shortly with our best deals to Canada in ${date}!`
    );
  } else {
    alert("Please enter your details again to see our current deals!");
  }
}

function visitNz() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let date = prompt("What month would you like to go?");
  if (name.length > 0 && email.length > 0) {
    alert(
      `Thank you ${name}, we will be in touch with you shortly with our best deals to New Zealand in ${date}!`
    );
  } else {
    alert("Please enter your details again to see our current deals!");
  }
}

function visitUsa() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let date = prompt("What month would you like to go?");

  if (name.length > 0 && email.length > 0) {
    alert(
      `Thank you ${name}, we will be in touch with you shortly with our best deals to USA in ${date}!`
    );
  } else {
    alert("Please enter your details again to see our current deals!");
  }
}

let visitLofotenButton = document.querySelector(".lofoten-button");
visitLofotenButton.addEventListener("click", visitLofoten);
let visitCanadaButton = document.querySelector(".visit-canada");
visitCanadaButton.addEventListener("click", visitCanada);
let visitNzButton = document.querySelector(".visit-nz");
visitNzButton.addEventListener("click", visitNz);
let visitUsaButton = document.querySelector(".visit-usa");
visitUsaButton.addEventListener("click", visitUsa);
