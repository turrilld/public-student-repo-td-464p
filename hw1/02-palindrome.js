const elem = document.querySelector("input");
elem.addEventListener("input", handleInput);
handleInput();

const isPalindrome = (function () {
  if (elem.value < 0) return false;
  return true;
})();

function handleInput() {
  const isPalindrome = (function () {
    if (elem.value < 0) return false;

    const numbers = elem.value.split("");
    const numbersReversed = numbers.reverse();
    const elemReversed = numbersReversed.join("");

    if (elem.value != elemReversed) return false;

    return true;
  })();

  if (elem.value < 0) {
    yes.hidden = true;
    no.hidden = true;
    error.hidden = false;
  } else if (isPalindrome == true) {
    yes.hidden = false;
    no.hidden = true;
    error.hidden = true;
  } else {
    yes.hidden = true;
    no.hidden = false;
    error.hidden = true;
  }
}
