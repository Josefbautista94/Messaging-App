const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(409).json({ msg: "Please complete fields to continue" });
  }

  /**
   * TODO: Use User model to verify if
   * email and password belong to a user
   * to authenticate them. Also, Generate token
   * to create session.
   */

  res.json({ msg: "Successully logged in" });
});

router.post("/registration", (req, res) => {
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
