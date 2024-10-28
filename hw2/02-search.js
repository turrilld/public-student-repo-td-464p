// Add your code here
const cardHolder = document.getElementById("card-holder");
const searchText = document.getElementById("userInput");
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", handleClick);

function handleClick() {
  // Function to create the card once search returns a match
  function createCard(charecterName, charecterBirthYear) {
    let card = document.createElement("div");

    let cardName = document.createElement("h5");
    cardName.textContent = charecterName;

    let cardBirthYear = document.createElement("p");
    cardBirthYear.textContent = charecterBirthYear;

    card.className = "card";
    card.style = "width: 18rem;";

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
