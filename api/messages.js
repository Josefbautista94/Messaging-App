const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Op = require("sequelize").Op;
const UUIDV4 = require("uuid").v4;
const { Message, User } = require("../models");

router.get("/:userId", async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ msg: "Authorization token is missing" });
  }

  try {
    const toId = req.params.userId;
    const fromId = await jwt.verify(token, "sEcReT kEy").id;

    const messages = await Message.findAll({
      where: {
        fromId,
        toId,
      },
      order: [["createdAt", "DESC"]],
    });

    res.json({ messages });
  } catch (e) {
    res.status(500).json({ msg: "Failed to retreive messages" });
  }
});

router.post("/:userId", async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ msg: "Authorization token is missing" });
  }

  try {
    const toId = req.params.userId;
    const fromId = await jwt.verify(token, "sEcReT kEy").id;

    const total = await User.count({
      where: { [Op.or]: [{ id: toId }, { id: fromId }] },
    });

    if (total !== 2) {
      return res.status(409).json({ msg: `An invalid user id was provided` });
    }

    const message = req.body.message;

    if (!message) {
      return res.status(409).json({ msg: `Message must not be empty or null` });
    }

    await Message.create({
      id: UUIDV4(),
      message,
      toId,
      fromId,
    });

    res.json({ msg: "Successfully created message" });
  } catch (e) {
    res.status(500).json({ msg: "Error occured sending message" });
  }
});

module.exports = router;
