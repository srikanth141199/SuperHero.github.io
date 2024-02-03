# SuperHero.github.io

# Marvel Character Search App

## Overview

This is a web application that allows users to search for Marvel comic book characters and view details about each character. Users can also add their favorite characters to a list stored in local storage.

## Files

### 1. `index.html`

This file contains the main structure of the web page. It includes the search bar, character list, and a section to display character details.

#### Key Elements:

- **Search Bar:** Allows users to input the name of the character they want to search for.
- **Character List:** Displays a list of characters based on the search query.
- **Character Details:** Displays information about a selected character.

### 2. `mainpage.css`

This file contains the styling rules for the entire application. It covers the layout, colors, and animations to enhance the user interface.

#### Key Styles:

- **Background Image:** Creates a full-screen background image with a cover effect.
- **Search Bar and Favorite Button Styling:** Defines the appearance of the search bar and the button to access the favorite characters list.
- **Character List Styling:** Specifies the style for the list of characters, including hover effects.
- **Responsive Design:** Utilizes media queries to adapt the layout for different screen sizes.

### 3. `mainpage.js`

This file contains the JavaScript logic for fetching Marvel character data from an API, handling user input, and managing the favorite characters list.

#### Key Functions:

- **`getChar()` and `getCharApi(api)`:** Functions for fetching Marvel characters from the API.
- **`getSearchApi(api)` and `getCharList(searchData)`:** Functions for fetching search results and rendering the character list.
- **`favPage()` and `favChar(data)`:** Functions for displaying favorite characters stored in local storage.

## How to Use

1. Open `index.html` in a web browser.
2. Use the search bar to input the name of a Marvel character.
3. Click on a character from the list to view details.
4. Click the '+' button to add a character to the favorites list.
5. Access the favorites list by clicking the 'Favorites' button.

## Technologies Used

- HTML
- CSS
- JavaScript
- Marvel API

## Credits

This project utilizes the [Marvel API](https://developer.marvel.com/) to retrieve information about comic book characters.
