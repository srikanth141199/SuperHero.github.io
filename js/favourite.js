// Wait for the DOM content to be fully loaded before executing the favPage function
document.addEventListener("DOMContentLoaded", favPage);

// Reference to HTML elements
const noChar = document.getElementById("noChar");
const charList = document.getElementById("charList");
const charContainer = document.getElementById("charContainer");

// Hide the noChar element initially
noChar.style.display = "none";

// Function to display favorite characters on the favorite page
async function favPage() {
  // Check if there are items in localStorage
  if (localStorage.length != 0) {
    // Iterate through localStorage items
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);

      // Construct the Marvel API URL for fetching individual character details
      const charapi = `http://gateway.marvel.com/v1/public/characters/${value}?&ts=1&apikey=cdd335e9237921048323acfcd0d0ab9a&hash=e5f862bc2107b2fc554b35cd0935b887`;

      // Fetch character details from the API
      const res = await fetch(charapi);
      const result = await res.json();

      // Display the favorite character on the page
      favChar(result.data.results);
    }
  } else {
    // If localStorage is empty, display the "noChar" message
    noChar.style.display = "block";
  }
}

// Function to display individual favorite character details
function favChar(data) {
  const li = document.createElement("li");
  li.innerHTML = `
    <div class='liDiv'>
      <img src="${data[0].thumbnail.path}.jpg" alt="" id="img1">
      <p class="charName" id="charName1">${data[0].name}</p>
      <button class='dltBtn'><i class="fas fa-trash"></i></button>
    </div>
  `;
  charList.appendChild(li);

  // Add an event listener to the remove button for each favorite character
  const removeBtn = li.querySelector(".dltBtn");
  removeBtn.addEventListener("click", () => {
    // Remove the character from localStorage and reload the page
    localStorage.removeItem(data[0].name);
    location.reload();
  });
}
