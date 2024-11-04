module.exports = {
  config: {
    name: "love",
    aliases: ["lve"],
    version: "1.0",
    author: "ミ★𝐒𝐎𝐍𝐈𝐂✄𝐄𝐗𝐄 3.0★彡",
    countDown: 2,
    role: 0,
    shortDescription: "Play miss, the oldest gambling game",
    longDescription: "Play miss, the oldest gambling game, and earn money",
    category: "game",
    guide: "{pn} <amy/rouge> <amount of money>"
  },

  onStart: async function ({ args, message, usersData, event }) {
    const betType = args[0];
    const betAmount = parseInt(args[1]);
    const user = event.senderID;
    const userData = await usersData.get(event.senderID);

    if (!["amy", "rouge"].includes(betType)) {
      return message.reply("🎶| ℭ𝔥𝔬𝔦𝔰𝔦𝔰 𝔞𝔪𝔶 𝔬𝔲 𝔯𝔬𝔲𝔤𝔢");
    }

    if (!Number.isInteger(betAmount) || betAmount < 1000) {
      return message.reply("👻| 𝑷𝒂𝒓𝒅𝒐𝒏 𝒅𝒆𝒎𝒂𝒏𝒅𝒆 𝒕𝒓𝒂𝒏𝒔𝒇𝒆𝒓𝒕 𝒂 𝒒𝒖𝒆𝒍𝒒𝒖'𝒖𝒏...𝒇𝒂𝒖𝒕 𝒎𝒊𝒔𝒆𝒓 1000€ 𝒐𝒖 𝒑𝒍𝒖𝒔");
    }

    if (betAmount > userData.money) {
      return message.reply("👏👀| 𝑪𝒐𝒏𝒕𝒆𝒏𝒕𝒆𝒔 𝒕𝒐𝒊 𝒅𝒆 𝒄𝒆 𝒒𝒖𝒆 𝒕𝒖 𝒑𝒐𝒔𝒔𝒆𝒅𝒆𝒔 𝒅𝒆𝒋𝒂...");
    }

    const dice = [1, 2, 3, 4, 5, 6];
    const results = [];

    for (let i = 0; i < 3; i++) {
      const result = dice[Math.floor(Math.random() * dice.length)];
      results.push(result);
    }

    const winConditions = {
      small: results.filter((num, index, arr) => num >= 1 && num <= 3 && arr.indexOf(num) !== index).length > 0,
      big: results.filter((num, index, arr) => num >= 4 && num <= 6 && arr.indexOf(num) !== index).length > 0,
    };

    const resultString = results.join(" | ");

    if ((winConditions[betType] && Math.random() <= 0.4) || (!winConditions[betType] && Math.random() > 0.4)) {
      const winAmount = 4 * betAmount;
      userData.money += winAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`🥷🩸𝙎𝙊𝙉𝙄𝘾🎁🎈\n━━━━━━━━━━━━━━━━\n[ 💧${resultString}💧 ]\n🎯 | 𝑩𝒓𝒂𝒗𝒐 𝒕'𝒂𝒔 𝒈𝒂𝒈𝒏𝒆 🌱${winAmount}€🌱`);
    } else {
      userData.money -= betAmount;
      await usersData.set(event.senderID, userData);
      return message.reply(`🥷🩸𝙎𝙊𝙉𝙄𝘾🎁🎈\n━━━━━━━━━━━━━━━━\n[💧${resultString}💧]\n\n🎯 | 𝑀𝑒𝑟𝑑𝑒....🙍 𝑐𝑜𝑚𝑚𝑒𝑛𝑡 𝑡𝑢 𝑝𝑒𝑢𝑥 𝑝𝑒𝑟𝑑𝑟𝑒 🌱${betAmount}€🌱`);
    }
  }
};
