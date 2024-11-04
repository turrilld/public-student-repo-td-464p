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
    const regex = new RegExp(wordToSeachFor, "gi");
    searchableText.innerHTML = textToSearch.replace(
      regex,
      (match) => `<mark style="background-color: yellow">${match}</mark>`
    );
  }
}
