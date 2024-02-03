// Extracting the 'character' parameter from the URL
const Id = new URLSearchParams(window.location.search).get("character");

// Creating the Marvel API URL using the character ID
//const url = `http://gateway.marvel.com/v1/public/characters/${Id}?&ts=1&apikey=cdd335e9237921048323acfcd0d0ab9a&hash=e5f862bc2107b2fc554b35cd0935b887`;
const url = `https://gateway.marvel.com/v1/public/characters/${Id}?&ts=1&apikey=cdd335e9237921048323acfcd0d0ab9a&hash=e5f862bc2107b2fc554b35cd0935b887`;


// Calling the API through the URL
async function char(url) {
  const res = await fetch(url);
  const data = await res.json();

  // Calling the renderCharacter function to render all the details of the character
  renderCharacter(data.data.results);
}

// Invoking the char function with the constructed URL
char(url);

// Function to render character details on the page
function renderCharacter(characterData) {
  const charContainer = document.querySelector(".charContainer");
  const characterDetails = document.querySelector(".character-details");
  const characterImage = document.querySelector(".character-image");
  const characterInfo = document.querySelector(".character-info");

  // Check if characterData is not empty
  if (characterData && characterData.length > 0) {
    const character = characterData[0];

    // Set character image source
    if (
      character.thumbnail &&
      character.thumbnail.path &&
      character.thumbnail.extension
    ) {
      const imagePath = `${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`;
      characterImage.src = imagePath;
    }

    // Build character information
    let infoHTML = "<h2>" + character.name + "</h2>";
    if (character.description) {
      infoHTML += "<p>" + character.description + "</p>";
    }

    // Add details about Comics, Series, Stories, and Events if available
    ["comics", "series", "stories", "events"].forEach((category) => {
      if (character[category] && character[category].items) {
        infoHTML += `<br><h4>${
          category.charAt(0).toUpperCase() + category.slice(1)
        }</h4>`;
        character[category].items.forEach((element) => {
          infoHTML += "<p>" + element.name + "</p>";
        });
      }
    });

    // Update the character info element
    characterInfo.innerHTML = infoHTML;
  } else {
    // Case when characterData is empty or not available
    characterInfo.innerHTML = "<p>Character details not available.</p>";
  }
}
