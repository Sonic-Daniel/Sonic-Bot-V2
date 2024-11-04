const fs = require('fs');

module.exports = {
  config: {
    name: "fuck",
    version: "1.0",
    author: "ミ★𝐒𝐎𝐍𝐈𝐂✄𝐄𝐗𝐄 3.0★彡", // don't change credits 
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription: "",
    category: "18+",
  },
 
  onStart: async function() {},
 
  onChat: async function({ event, message, getLang, api }) {
   const link = [
"https://i.ibb.co/34PN5x0/image.gif",
"https://i.ibb.co/xm6DgWw/image.gif",
"https://i.ibb.co/kBFKcKj/image.gif",
"https://i.ibb.co/QbkH6Wf/image.gif",
"https://i.ibb.co/HFMVP9z/image.gif",
"https://i.ibb.co/PZs0WrQ/image.gif",
"https://i.ibb.co/vV3995j/image.gif",
]
  let img =
link[Math.floor(Math.random()*link.length)]
    if (event.body) {
      const word = event.body.toLowerCase();
      switch (word) {
        case "fuck":
          const replies = [
            "📣| 𝑭𝒖𝒄𝒌 𝒎𝒆...𝒐𝒉𝒉𝒉!",
          ];
          api.setMessageReaction("🥵", event.messageID, event.messageID, api); 
          const randomIndex = Math.floor(Math.random() * replies.length);
          message.reply({
            body: replies[randomIndex],
attachment: await global.utils.getStreamFromURL(img)})
          break;
        default:
          return; 
      }
    }
  },
};
