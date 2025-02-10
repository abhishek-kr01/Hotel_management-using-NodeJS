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

router.get("/:taste", async (req, res) => {
  try {
  } catch (error) {}
});

module.exports = router;
