# Shopping List Application

A simple application that allows the user to create a shopping list by adding items through a form. The list is stored in localStorage. The user can delete a specific item or the entire list. The app checks for duplicates before adding a new item.

## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Challenges and Learnings](#challenges-and-learnings)
- [Future Improvements](#future-improvements)
- [Contact](#contact)
- [License](#license)

## Introduction

This project is a simple web application designed to manage a shopping list. Users can add items to the list, remove individual items, or clear the entire list. The shopping list is saved in the browser's localStorage, ensuring persistence between sessions.

## Demo

### Live Demo

Check out the live demo [here]([https://your-demo-link.com](https://nada-tb-beginner-projects.github.io/Shopping-List-Application/)).

## Requirements
A modern web browser (Chrome, Firefox, Edge, Safari)

## Installation
To run the project locally, follow these steps:

Clone the repository:

```bash
Copier le code
git clone https://github.com/Nada-TB-beginner-projects/Shopping-List-Application.git
```
Navigate to the project directory:

```bash
Copier le code
cd shopping-list
```
Open the index.html file in your web browser:

You can do this by double-clicking the index.html file in your file explorer.
Alternatively, you can right-click the file and select "Open with" and choose your preferred web browser.

## Usage

Once the index.html file is opened in your browser:

- Add Items to the List:

Enter the name of the product in the "nouveau produit" input field.
Click the "Ajouter" button to add the item to the list.

- Delete Specific Items:

Enter the name of the product to delete in the "supprimer produit" input field.
Click the "supprimer" button to remove the item from the list.

- Delete the Entire List:

Click the "delete list" button to clear all items from the list.

## Features

- Create a shopping list by adding items through a form.
- Delete a specific item from the list.
- Clear the entire shopping list.
- Store the shopping list in localStorage to maintain persistence between sessions.
- Prevent adding duplicate items to the list.

## Technologies Used

- HTML, CSS, JavaScript
- LocalStorage for data persistence

## Project Structure

Outline of the project directory:

```plaintext
shopping-list/
├── index.html               # Main HTML file
├── style.css                # CSS styles
├── class_liste_course.js    # JavaScript class for list operations
├── main.js                  # Main JavaScript functionality
└── README.md                # Project documentation
```

## Challenges and Learnings

1. **Retrieving and Manipulating LocalStorage**:
   - **Challenge**: Efficiently retrieving and manipulating data stored in localStorage.
   - **Solution**: Implemented a JavaScript class to encapsulate all list-related operations, improving code organization and maintainability.

2. **Preventing Duplicate Items**:
   - **Challenge**: Ensuring that no duplicate items are added to the list.
   - **Solution**: Implemented a check to see if an item already exists in the list before adding it.

3. **User-Friendly Error Handling**:
   - **Challenge**: Providing clear feedback to the user when an error occurs (e.g., attempting to add a duplicate item).
   - **Solution**: Displayed error messages in a designated area on the webpage, following best practices for user experience.

## Future Improvements

- Enhance the UI to make it more visually appealing.
- Add the ability to edit existing items in the list.
- Implement a search feature to filter items in the list.
- Add unit tests to ensure the reliability of the code.

## Contact

For any questions or feedback, you can reach me at:

- GitHub: [Nada-TB](https://github.com/Nada-TB)


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

