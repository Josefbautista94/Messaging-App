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
    return res.status(409).json({
      status: "error",
      msg: "Please complete fields to continue",
      data: null,
    });
  }

  try {
    let user = await User.findOne({
      where: { email, password },
      attributes: ["id", "name"],
    });

    if (!user) {
      return res.status(409).json({
        status: "error",
        msg: "Email or password is wrong",
        data: null,
      });
    }

    let token = jwt.sign(
      { id: user.get("id"), name: user.get("name") },
      "sEcReT kEy"
    );

    res.json({
      status: "ok",
      msg: "User logged",
      data: null,
      token,
    });
  } catch (e) {
    res.status(500).json({
      status: "error",
      msg: "Failed to login user",
      data: null,
    });
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
    return res.status(409).json({
      status: "error",
      msg: "The passwords you entered do not match",
      data: null,
    });
  }

  try {
    const results = await User.findOrCreate({
      where: { email },
      defaults: { name, password, id: UUIDV4() },
    });
    const created = results[1];

    if (!created) {
      return res.status(409).json({
        status: "error",
        msg: "Email is already in use",
        data: null,
      });
    }

    let user = await User.findOne({
      where: { email, password },
      attributes: ["id", "name"],
    });

    let token = jwt.sign(
      { id: user.get("id"), name: user.get("name") },
      "sEcReT kEy"
    );

    res.json({
      status: "ok",
      msg: "Successfully created new user",
      data: null,
      token,
    });
  } catch (e) {
    res.status(500).json({
      status: "error",
      msg: "Failed to register user",
      data: null,
    });
  }
});

module.exports = router;
