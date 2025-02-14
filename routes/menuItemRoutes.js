const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/MenuItem");

// POST route to add a menuitem

router.post("/", async (req, res) => {
  try {
    const data = req.body; //Assuming the request body contains the MenuItem data

    // Create a new MenuItem document using the mongoose model
    const newMenuItem = new MenuItem(data);

    // save the new MenuItem to the database
    const response = await newMenuItem.save();
    console.log("menu data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Enternal server error" });
  }
});

// GET method to get the person
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("MenuItem data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Enternal server error" });
  }
});

//------get taste data on the basis of taste--------

router.get("/:taste", async (req, res) => {
  const taste = req.params.taste; //Extract the taste form the URL paramaeter
  try {
    if (taste == "sweet" || taste == "spicy" || taste == "sour") {
      const response = await MenuItem.find({ taste: taste });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      console.log("not found");
      res.status(404).json({ error: "No found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Enternal server error" });
  }
});

module.exports = router;
