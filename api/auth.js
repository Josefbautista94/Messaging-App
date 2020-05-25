const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const UUIDV4 = require("uuid").v4;
const User = require("../models").User;

/**
 * This route is for logging in the user
 */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(409).json({ msg: "Please complete fields to continue" });
  }

  try {
    let user = await User.findOne({
      where: { email, password },
      attributes: ["id"],
    });

    if (!user) {
      return res.status(409).json({ msg: "Email or password is wrong" });
    }

    let token = jwt.sign({ id: user.get("id") }, "sEcReT kEy");

    res.json({ token });
  } catch (e) {
    res.status(409).json({ msg: "Failed to login user" });
  }
});

/**
 * This route is for registering a user
 */
router.post("/registration", async (req, res) => {
  const { name, email, password, confPass } = req.body;

  if (!name || !email || !password || !confPass) {
    return res.status(409).json({ msg: "Please fill in all fields" });
  }

  if (password !== confPass) {
    return res
      .status(409)
      .json({ msg: "The passwords you entered do not match" });
  }

  try {
    const results = await User.findOrCreate({
      where: { email },
      defaults: { name, password, id: UUIDV4() },
    });
    const created = results[1];

    if (!created) {
      return res.status(409).json({ msg: "Email is already in use" });
    }

    res.json({ msg: "Successfully created new user" });
  } catch (e) {
    res.status(409).json({ msg: "Failed to register user" });
  }
});

module.exports = router;
