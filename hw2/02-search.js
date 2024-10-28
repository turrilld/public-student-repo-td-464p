// Add your code here
import charecters from "02-data.js";

const cardHolder = document.getElementById("card-holder");
const searchText = document.getElementById("userInput");
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", handleClick);

window.alert("running: " + searchText);
function handleClick() {
  window.alert("search text: " + searchText);

  //   function createCard(charecterName, charecterBirthYear) {
  //     window.alert("create card");
  //     const card = document.createElement("div");
  //     card.classList.add("card");

  //     const cardName = document.createElement("h5");
  //     cardName.textContent = charecterName;

  //     const cardBirthYear = document.createElement("p");
  //     cardBirthYear.textContent = charecterBirthYear;

  //     card.appendChild(cardTitle);
  //     card.appendChild(cardContent);

  //     return card;
  //   }

  //   charecters.array.forEach((charecter) => {
  //     if (true) {
  //       window.alert("outer if " + searchText);
  //       cardHolder.appendChild(createCard(charecter.name, charecter.birth_year));
  //     }
  //   });
}
