// Add your code here
const searchableText = document.getElementById("text-to-search");
const input = document.getElementById("userInput");
input.addEventListener("keyup", handleKeyDown);

function handleKeyDown() {
  // This clears previous search results before starting the new result
  let text = searchableText.textContent || searchableText.innerText || "";
  searchableText.innerHTML = text;

  let wordToSeachFor = input.value.trim();
  let textToSearch = searchableText.innerHTML;
  let searchResult = textToSearch.search(wordToSeachFor);

  if (searchResult >= 0 && wordToSeachFor !== "") {
    let newText = textToSearch.replace(
      wordToSeachFor,
      `<mark style="background-color: yellow">${wordToSeachFor}</mark>`
    );
    searchableText.innerHTML = newText;
  }
}
