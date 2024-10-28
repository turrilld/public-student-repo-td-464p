// Add your code here
const cardHolder = document.getElementById("card-holder");
const searchText = document.getElementById("userInput");
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", handleClick);

function handleClick() {
  // Function to create the card once search returns a match
  function createCard(charecterName, charecterBirthYear) {
    let card = document.createElement("div");
    card.className = "card m-1 p-1";
    card.style = "width: 15rem;";

    let cardName = document.createElement("h5");
    cardName.textContent = charecterName;
    cardName.className = "card-title m-1";

    let cardBirthYear = document.createElement("p");
    cardBirthYear.textContent = charecterBirthYear;
    cardBirthYear.className = "card-text m-1";

    card.appendChild(cardName);
    card.appendChild(cardBirthYear);

    return card;
  }

  // Clear card holder before each search
  cardHolder.innerHTML = "";

  let resultCount = 0;

  for (const charecter of characters) {
    let charecterNameLower = charecter.name.toLowerCase();
    let searchNameLower = searchText.value.toLowerCase();
    let searchResult = charecterNameLower.search(searchNameLower);

    if (searchResult >= 0 && searchNameLower !== "") {
      let charecterCard = createCard(charecter.name, charecter.birth_year);
      cardHolder.appendChild(charecterCard);
      resultCount++;
    }
  }
  if (resultCount === 0) {
    cardHolder.innerHTML = "<p> No Charecters Found </p>";
  }
}
