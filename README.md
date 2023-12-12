# Contact Management Application

This application allows users to manage a list of contacts. Users can add, view, edit, and delete contacts. The application is built using React and includes features for input validation, displaying contact details, and error handling mechanisms.

## Features

- _Add New Contacts:_ Users can input details such as name, email, and phone number to add new contacts to the list.
- _Input Validation:_ Regular Expressions are used to validate the input fields (name, email, phone number).
- _View Contact List:_ Displays a list of all contacts with options to edit and delete.
- _Edit Existing Contacts:_ Users can edit the details of an existing contact.
- _Delete Contacts:_ Provides an option for users to delete a contact, removing it from the list.

## Technologies Used

- _React:_ The application is built using React for the frontend user interface.
- _Regular Expressions (Regex):_ Used for input validation of name, email, and phone number fields.

## Components

### ContactForm Component

- Allows users to input new contact details.
- Handles validation of input fields using Regex.
- Adds new contacts to the list.

### ContactList Component

- Displays a list of all contacts.
- Provides options to edit and delete each contact.

### EditContact Component

- Enables users to edit the details of an existing contact.

## Error Handling

Robust error handling mechanisms are implemented throughout the application to handle:

- _Validation Errors:_ Errors related to invalid inputs are handled and displayed to the user.
- _Deletion Errors:_ Errors when attempting to delete a contact that doesn't exist or cannot be removed.

## How to Use

To run the application locally:

1. Clone this repository.
2. Navigate to the project directory.
3. Run npm install to install dependencies.
4. Run npm start to start the development server.
5. Access the application in your browser at http://localhost:3000.

## Improvements and Future Enhancements

- Implement authentication and user accounts to manage individual contact lists.
- Add search and filter functionality for easier contact navigation.
- Improve UI/UX with better styling and responsive design.
