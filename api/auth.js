const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  res.send("You've reached auth api endpoint");
});

router.post("/", (req, res) => {
  const { name, email, password, confPass } = req.body;

  if (!name || !email || !password || !confPass) {
    res.status(409).json({ msg: "Please fill in all fields" });
  }

  if (password !== confPass) {
    res.status(409).json({ msg: "The passwords you entered do not match" });
  }

  /**
   * TODO: Use User model to check if a user already exists
   * using the given email. If not, create new user
   * in the database.
   */

  res.json({ msg: "Successfully created new user." });
});

module.exports = router;
