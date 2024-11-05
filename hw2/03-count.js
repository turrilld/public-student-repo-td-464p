// Add your code here
const searchableText = document.getElementById("text-to-search");
const input = document.getElementById("userInput");
input.addEventListener("input", handleInput);

function handleInput() {
  // This clears previous search results before starting the new result
  let text = searchableText.textContent || searchableText.innerText || "";
  searchableText.innerHTML = text;

  let wordToSeachFor = input.value.trim();
  let textToSearch = searchableText.innerHTML;
  if (wordToSeachFor !== "" && wordToSeachFor !== " ") {
    searchableText.innerHTML = textToSearch.replace(
      wordToSeachFor,
      (match) => `<mark style="background-color: yellow">${match}</mark>`
    );
  }
}
