let timeout;

function debouncer() {
  clearTimeout(timeout);
  setTimeout(act, 100);
}

function act() {
  var dividend = document.getElementsByClassName("Dividend")[0].value;
  var modulus = document.getElementsByClassName("Modulus")[0].value;
  var ans = parseInt(dividend) % parseInt(modulus);
  var response = "Anwer :- " + dividend + " mod " + modulus + " = " + ans;
  // console.log(response);
  document.getElementById("final-answer").innerHTML = response;
}

function shiftCursor(event, className) {
  // console.log(className);
  if (event.key == 'Enter') {
    event.preventDefault();
    document.getElementsByClassName(className)[0].focus();
  }
}
