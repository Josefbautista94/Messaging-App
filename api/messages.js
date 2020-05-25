const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Op = require("sequelize").Op;
const UUIDV4 = require("uuid").v4;
const { Message, User, UserChats, Chats } = require("../models");

router.get("/:chatId", async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ msg: "Authorization token is missing" });
  }

  try {
    const chatId = req.params.chatId;

    const messages = await Message.findAll({
      where: { chatId },
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
    const userId = await jwt.verify(token, "sEcReT kEy").id;
    const { message, chatId = UUIDV4() } = req.body;

    if (!message) {
      return res.status(409).json({ msg: `Message must not be empty or null` });
    }

    await Message.create({
      id: UUIDV4(),
      message,
      userId,
      chatId,
    });

    res.json({ msg: "Successfully created message" });
  } catch (e) {
    res.status(500).json({ msg: "Error occured sending message" });
  }
});

module.exports = router;
