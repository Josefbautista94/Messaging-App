const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { ChatMessage, Message, UserChat } = require("../models");

/**
 * Retrieves all the chats for a user
 */
router.get("/", async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ msg: "Authorization token is missing" });
  }

  try {
    const userId = await jwt.verify(token, "sEcReT kEy").id;

    const chats = await UserChat.findAll({
      where: { userId },
      attributes: ["chatId"],
      order: [["createdAt", "DESC"]],
    });

    let chatMessages = [];

    for (let chat of chats) {
      const messages = await ChatMessage.findAll({
        where: { chatId: chat.chatId },
        attributes: [],
        include: [{ model: Message, attributes: ["message", "createdAt"] }],
      });

      chatMessages = [
        {
          chatId: chat.chatId,
          messages,
        },
        ...chatMessages,
      ];
    }

    res.json({ chatMessages });
  } catch (e) {
    console.log(e);

    res.status(500).json({ msg: "Failed to retreive chats" });
  }
});

/**
 * This routes expects a chat id uuid generated
 * on the frontend and the id of the recepient
 * who will be joining the chat.
 */
router.post("/:chatId/:toId", async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ msg: "Authorization token is missing" });
  }

  try {
    const { chatId, toId } = req.params;
    const fromId = await jwt.verify(token, "sEcReT kEy").id;

    const results = await Promise.all([
      UserChat.create({ chatId, userId: fromId }),
      UserChat.create({ chatId, userId: toId }),
    ]);

    if (!results[0] || !results[1]) {
      return res.status(409).json({ msg: "Chat already exists" });
    }

    res.json({ msg: "Successfully created chat" });
  } catch (e) {
    res.status(500).json({ msg: "Error occured creating chat" });
  }
});

module.exports = router;
