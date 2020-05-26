const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const UUIDV4 = require("uuid").v4;
const { Message, ChatMessage } = require("../models");

/**
 * This route is for creating messages and associating
 * that message to a chat.
 *
 * TODO: Refactor database so that it can be easier
 * to include message and user info associated with
 * chats
 */
router.post("/:chatId", async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ msg: "Authorization token is missing" });
  }

  try {
    const userId = await jwt.verify(token, "sEcReT kEy").id;
    const chatId = req.params.chatId;
    const message = req.body.message;

    if (!message) {
      return res.status(409).json({ msg: `Message must not be empty or null` });
    }

    const newMessage = await Message.create({
      id: UUIDV4(),
      message,
      userId,
    });

    await ChatMessage.create({ chatId, messageId: newMessage.get("id") });

    res.json({ msg: "Successfully created message" });
  } catch (e) {
    console.log(e);

    res.status(500).json({ msg: "Error occured sending message" });
  }
});

module.exports = router;
