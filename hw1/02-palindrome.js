const elem = document.querySelector("input");
elem.addEventListener("input", handleInput);

yes.hidden = true;
no.hidden = true;
error.hidden = true;

function handleInput() {
  const isPalindrome = (function () {
    const elemReversed = elem.value.split("").reverse().join("");
    if (elem.value !== elemReversed) return false;
    return true;
  })();

  if (elem.value === "" || elem.value < 0) {
    yes.hidden = true;
    no.hidden = true;
    error.hidden = false;
  } else if (isPalindrome === true) {
    yes.hidden = false;
    no.hidden = true;
    error.hidden = true;
  } else {
    yes.hidden = true;
    no.hidden = false;
    error.hidden = true;
  }
}
