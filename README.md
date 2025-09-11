BookVault/
├── index.html       # Main HTML file
├── style.css        # Styling and layout
├── app.js           # JavaScript functionality
└── README.md        # Project documentation


BookVault

BookVault is a simple, interactive web application that allows users to manage their personal book collection. Users can add new books with details such as Title, Author, and ISBN, view all books in a structured table, and remove books when needed. The application is built using HTML, CSS, and JavaScript and leverages Local Storage to persist data across sessions.

Features

Add Books: Users can input book details and add them to the list.

Delete Books: Remove books from the list with a single click.

Persistent Storage: Book data is saved in localStorage, so it persists even after refreshing the page.

Responsive Design: The application is mobile-friendly and visually appealing using a modern CSS layout.

Alerts & Validation: Displays success and error messages for actions like adding a book or leaving a field empty.

Table View: Books are displayed in a clean, structured table for easy viewing.

Technologies Used

HTML5 – Markup structure for the application.

CSS3 – Modern, responsive styling with gradients, shadows, and hover effects.

JavaScript (ES6) – Functional behavior including classes, DOM manipulation, event handling, and local storage management.

How It Works

Adding a Book

Fill in the Title, Author, and ISBN fields.

Click the Add Book button.
User can remove alos by clicking on romove button 'X'

The book is added to the table and stored in the browser’s local storage.

Deleting a Book

Click the red X button next to a book entry.

The book is removed from the table and the local storage is updated.

Alerts

Displays notifications for successful addition or deletion.

Validates that no input field is left empty.
 
