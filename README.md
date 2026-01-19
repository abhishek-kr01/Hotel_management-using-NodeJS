🍽️ Restaurant Management System – Backend API

A scalable backend system for managing restaurant operations such as employees and menu items. Built using Node.js, Express.js, and MongoDB, this project exposes RESTful APIs that can be consumed by any frontend (Web / Mobile).

This project demonstrates backend architecture, REST API design, database modeling, authentication basics, and modular code structure.

🚀 Features
✅ Employee Management

Create new employees

Retrieve all employees

Filter employees by work type (chef, manager, waiter)

Update employee details

Delete employee records

✅ Menu Management

Add new menu items

Retrieve all menu items

Filter menu items by taste (sweet, spicy, sour)

Update menu item details

Delete menu items

✅ Backend Architecture

Modular folder structure (models, routes)

MongoDB integration using Mongoose

JWT-based authentication support

Environment variable configuration using dotenv

Express middleware support

🛠️ Tech Stack

Node.js – JavaScript runtime

Express.js – Backend framework

MongoDB – NoSQL database

Mongoose – MongoDB ODM

JWT – Authentication

dotenv – Environment variable management

📂 Project Structure
```
restaurant-management-backend
│
├── models/            # Mongoose schemas and models
├── routes/            # API route handlers
│
├── auth.js            # Authentication logic
├── jwt.js             # JWT utilities
├── notes.js           # Notes / helper logic
├── greeting.txt       # Sample text file
├── db.js              # MongoDB connection setup
├── server.js          # Express server entry point
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

⚙️ Installation & Setup  
1️⃣ Clone the repository
git clone https://github.com/abhishek-kr01/Hotel_management-using-NodeJS.git  
cd Hotel_management-using-NodeJS

2️⃣ Install dependencies
npm install

3️⃣ Create environment variables

Create a .env file in the root directory and add:

MONGODB_URL=your_mongodb_connection_string
PORT=3000
JWT_SECRET=your_secret_key

4️⃣ Start the server
npm start


or

nodemon server.js


Server will start on:

http://localhost:3000
```
📡 API Endpoints
👨‍🍳 Employee APIs
Method	   Endpoint	          Description
POST	     /person	            Add a new employee
GET	     /person	            Get all employees
GET	     /person/:workType	   Filter by work type
PUT	     /person/:id	         Update employee
DELETE	  /person/:id	         Delete employee
🍔 Menu APIs
Method	   Endpoint	            Description
POST	      /menuitem	         Add a menu item
GET	      /menuitem	         Get all menu items
GET	      /menuitem/:taste	   Filter by taste
PUT	      /menuitem/:id	      Update menu item
DELETE	   /menuitem/:id	      Delete menu item
```
🧪 Testing

You can test APIs using:

Postman

Thunder Client (VS Code Extension)

curl

📈 Future Enhancements

Role-based authentication (Admin / Staff)

Order management module

Billing and invoice generation

Pagination and search

API documentation using Swagger

👨‍💻 Author

Abhishek Kumar  
Junior Software Engineer  
Backend | Node.js | MongoDB | REST APIs
