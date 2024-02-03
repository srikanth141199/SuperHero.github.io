// Function to construct and call the Marvel API to get a list of comics
function getChar() {
  const charURL =
    "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=cdd335e9237921048323acfcd0d0ab9a&hash=e5f862bc2107b2fc554b35cd0935b887&limit=50";
  getCharApi(charURL);
}
getChar();

// Function to call the Marvel API
async function getCharApi(api) {
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);
}

// Collection of HTML elements
const searchBar = document.getElementById("search-bar");
const charNotFound = document.getElementById("charNotFound");
const charList = document.getElementById("charList");
const charListEle = document.getElementById("charListUl");
const search = document.getElementById("search");
const searchButton = document.getElementById("searchButton");

charList.style.display = "none";

// Event listener for keyup event on the search input
search.onkeyup = function (event) {
  let val = event.target.value;

  // Check if the search input is not empty
  if (val != "") {
    // Clear the existing child nodes of charListEle
    while (charListEle.hasChildNodes()) {
      charListEle.firstChild.remove();
    }

    // Construct the Marvel API URL for character search
    var search_api = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${val}&ts=1&apikey=cdd335e9237921048323acfcd0d0ab9a&hash=e5f862bc2107b2fc554b35cd0935b887`;
    getSearchApi(search_api);
  }

  // Show or hide the charList based on the length of the search input
  if (val.length == 0) {
    charList.style.display = "none";
  } else {
    charList.style.display = "block";
  }
};

// Function to call the Marvel API for character search
async function getSearchApi(api) {
  const searchRes = await fetch(api);
  const searchData = await searchRes.json();
  getCharList(searchData);
}

// Function to populate the character list in the HTML
function getCharList(searchData) {
  // Show or hide the charNotFound element based on search results
  charNotFound.style.display =
    searchData.data.results.length === 0 ? "block" : "none";

  // Iterate through the search results and create list items
  for (let i = 0; i < searchData.data.results.length; i++) {
    const li = document.createElement("li");
    li.classList = "charLineItem";
    li.innerHTML = `
          <a href=${
            "/character.html?character=" + searchData.data.results[i].id
          } class="charAnchor" style="text-decoration:none;color:black;">
              <div class="charListContainer">
                  <img src="${
                    searchData.data.results[i].thumbnail.path
                  }.jpg" alt="" id="img1">
                  <p class="charName" id="charName1">
                      ${searchData.data.results[i].name}
                  </p>
              </div>
          </a>
          <button class="addFav" name="${
            searchData.data.results[i].name
          }" id="${searchData.data.results[i].id}">
            <i class="fa-solid fa-plus addFavi"></i>
          </button>
      `;

    // Append the list item to charListEle
    charListEle.appendChild(li);
  }

  // Add event listeners to the addFav buttons to store data in localStorage
  const addFav = document.querySelectorAll(".addFav");
  addFav.forEach((data) => {
    data.addEventListener("click", function () {
      localStorage.setItem(data.name, data.id);
    });
  });
}
