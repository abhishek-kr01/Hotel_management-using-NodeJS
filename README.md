# Restaurant Management System (Backend)

## Description

This project is a **backend system** for a Restaurant Management System, built using **Node.js, Express.js, and MongoDB**. It provides RESTful APIs to manage employees, menu items, and other restaurant-related operations.

## Features

- **Employee Management**: Add, update, delete, and retrieve employee details.
- **Menu Management**: Add, update, delete, and retrieve menu items.
- **Database Integration**: Uses MongoDB for storing employee and menu details.
- **Express.js Routing**: Organized routes for better maintainability.
- **Middleware**: Uses body-parser for handling JSON data.
- **Environment Variables**: Stores sensitive configuration using `.env` file.

## Tech Stack

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing restaurant data.
- **Mongoose**: ODM for MongoDB.
- **dotenv**: Manages environment variables.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/abhishek-kr01/Hotel_management-using-NodeJS.git
   cd restaurant-management-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add:
   ```env
   MONGODB_URL=your_mongodb_connection_string
   PORT=3000
   ```
4. Start the server:
   ```sh
   npm server.js or nodemon server.js or npm start
   ```

## API Endpoints

### Employee Management

- `POST /person` - Add a new employee
- `GET /person` - Get all employees
- `GET /person/:workType` - Get employees by work type (chef, manager, waiter)
- `PUT /person/:id` - Update employee details
- `DELETE /person/:id` - Delete an employee

### Menu Management

- `POST /menuitem` - Add a new menu item
- `GET /menuitem` - Get all menu items
- `GET /menuitem/:taste` - Get menu items by taste (sweet, spicy, sour)
- `PUT /menuitem/:id` - Update menu item details
- `DELETE /menuitem/:id` - Delete a menu item

## Folder Structure

```
/restaurant-management-backend
│── /models        # Mongoose models (Person.js, MenuItem.js)
│── /routes        # Express routes (personRoutes.js, menuItemRoutes.js)
│── db.js          # MongoDB connection setup
│── server.js      # Main Express server file
│── .env           # Environment variables
│── package.json   # Project dependencies
│── README.md      # Documentation
```
