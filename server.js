console.log("server file is running...");

// function add(a, b) {
//   return a + b;
// }

// var add = function (a, b) {
//   return a + b;
// };

// var add = (a, b) => {
//   return a + b;
// };

// var add = (a, b) => a + b;

// var result = add(2, 5);
// console.log(result);

// (function () {
//   console.log("Abhishek");
// })();

//------------callback-----------------------

// function callback() {
//   console.log("Addition successful.");
// }

// const add = function (a, b, callback) {
//   var result = a + b;
//   console.log("result: " + result);//main function work complete
//   callback();
// };

// add(3, 4, callback);

// const add = function (a, b, callback) {
//   var result = a + b;
//   console.log("result: " + result);
//   callback();
// };

// // add(2, 3, function () {
// //   console.log("addition successful");
// // });

// add(2, 3, () => console.log("addition successful"));

// -------module---fs---os-------------

// var fs = require("fs");
// var os = require("os");

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile("greating.txt", "Hi " + user.username + "!\n", () =>
//   console.log("File is created")
// );

// console.log(os);
// console.log(fs);

//----------import, export file, --------------

// const notes = require("./notes.js");
// console.log("server file is available");

// var age = notes.age;
// var result = notes.addNumber(age, 18);
// console.log(age);
// console.log("Result is now " + result);

// ----------------lodash----------------
// var _ = require("lodash");

// var data = ["person", "person", 1, 2, 1, 2, "name", "age", "2"];
// var filter = _.uniq(data);
// console.log(filter);

// console.log(_.isString(true));

//-------------------------json------------------

// const jsonString = '{"name": "Abhishek", "age": 30, "city": "Kochi"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);

// const objectToJSON = {
//   name: "Abhishek",
//   age: 23,
// };
// const jsonString = JSON.stringify(objectToJSON); //conver object to JSON string
// console.log(jsonString);

// console.log(typeof jsonString);

// -------------------express--CRUD---------------
// const express = require("express");
// const app = express();
// const db = require("./db");

// const bodyParser = require("body-parser");
// app.use(bodyParser.json()); //req.body

// const Person = require("./models/Person");
// const MenuItem = require("./models/MenuItem");

// app.get("/", function (req, res) {
//   res.send("Welcome to my hotel... How can i help you sir...?");
// });

//----------avoide callback-----------
// POST route to add a person

// app.post("/person", (req, res) => {
//   const data = req.body; //Assuming the request body contains the person data

//   // Create a new Person document using the mongoose model
//   const newPerson = new Person(data);
//    // save the new person to the database

//   newPerson.save((error, savedPerson) => {
//     if (error) {
//       console.log("Error saving person data", error);
//       res.status(500).json({ error: "Internal server error" });
//     } else {
//       console.log("person data saved successfully");
//       res.status(200).json({ savedPerson });
//     }
//   });
// });

//-----------use async await---------------
// POST route to add a person

// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body; //Assuming the request body contains the person data

//     // Create a new Person document using the mongoose model
//     const newPerson = new Person(data);

//     // save the new person to the database
//     const response = await newPerson.save();
//     console.log("person data saved");
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Enternal server error" });
//   }
// });

// // POST route to add a menuitem

// app.post("/menuitem", async (req, res) => {
//   try {
//     const data = req.body; //Assuming the request body contains the MenuItem data

//     // Create a new MenuItem document using the mongoose model
//     const newMenuItem = new MenuItem(data);

//     // save the new MenuItem to the database
//     const response = await newMenuItem.save();
//     console.log("menu data saved");
//     res.status(200).json(response);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Enternal server error" });
//   }
// });

// // GET method to get the person
// app.get("/person", async (req, res) => {
//   try {
//     const data = await Person.find();
//     console.log("person data fetched");
//     res.status(200).json(data);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Enternal server error" });
//   }
// });

// // GET method to get the person
// app.get("/menuitem", async (req, res) => {
//   try {
//     const data = await MenuItem.find();
//     console.log("MenuItem data fetched");
//     res.status(200).json(data);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Enternal server error" });
//   }
// });

// //------get person data on the basis of work---

// app.get("/person/:workType", async (req, res) => {
//   const workType = req.params.workType; //Extract the work type form the URL parameter
//   try {
//     if (workType == "chef" || workType == "manager" || workType == "waiter") {
//       const response = await Person.find({ work: workType });
//       console.log("response fetched");
//       res.status(200).json(response);
//     } else {
//       console.log("not found");
//       res.status(404).json({ error: "Invalid work type" });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Enternal server error" });
//   }
// });

const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();
const passport = require("./auth");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;

// -------------Middleware Function-----------
const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`
  );
  next(); // Move on to the next phase
};
app.use(logRequest);

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate("local", { session: false });

app.get("/", function (req, res) {
  res.send("Welcome to our Hotel");
});

// Import the router files
const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");

// Use the routers
app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);

app.listen(PORT, () => {
  console.log("listening on port 3000");
});
