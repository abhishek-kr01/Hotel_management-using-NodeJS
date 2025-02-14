const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");
const { jwtAuthMiddleware, generateToken } = require("./../jwt");

// POST route to add a person

router.post("/signup", async (req, res) => {
  try {
    const data = req.body; //Assuming the request body contains the person data

    // Create a new Person document using the mongoose model
    const newPerson = new Person(data);

    // save the new person to the database
    const response = await newPerson.save();
    console.log("person data saved");

    const payload = {
      id: response.id,
      username: response.username,
    };

    console.log(payload);
    const token = generateToken(payload);
    console.log("Token is : ", token);

    res.status(200).json({ response: response, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Enternal server error" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    // Extract username and password from request body
    const { username, password } = req.body;

    // Find the user by username
    const user = await Person.findOne({ username: username });

    // If user does nto exist or passowrd does not match, return error
    if (!user || (await user.comparePassword(password))) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Generate Token
    const payload = {
      id: user.id,
      username: user.username,
    };

    const token = generateToken(payload);

    // return token as tesponse
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server erroe" });
  }
});

// Profile route
router.get("/profile", jwtAuthMiddleware, async (req, res) => {
  try {
    const userData = req.user;
    console.log("User Data :", userData);

    const userId = userData.id;
    const user = await Person.findById(userId);

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server erroe" });
  }
});

// GET method to get the person

router.get("/", jwtAuthMiddleware, async (req, res) => {
  try {
    const data = await Person.find();
    console.log("person data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Enternal server error" });
  }
});

//------get person data on the basis of work--------

router.get("/:workType", async (req, res) => {
  const workType = req.params.workType; //Extract the work type form the URL parameter
  try {
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      console.log("not found");
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Enternal server error" });
  }
});

// PUT method to updete person data
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //Extract the id form the URL parameter
    const updatePersonData = req.body; //Update data for the person
    const response = await Person.findByIdAndUpdate(
      personId,
      updatePersonData,
      {
        new: true, //Return the updated document
        runValidators: true, //Run Mongoose validation
      }
    );

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("person data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Enternal server error" });
  }
});

// DELETE method to delete person data

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //Extract the id form the URL parameter

    // Assuming you have a Person model
    const response = await Person.findByIdAndDelete(personId);

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("person data deleted");
    res.status(200).json({ message: "person deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Enternal server error" });
  }
});

module.exports = router;
