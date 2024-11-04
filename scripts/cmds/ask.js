const { GoatWrapper } = require('fca-liane-utils');


let fontEnabled = true;


function formatFont(text) {

  const fontMapping = {
    a: "𝐚", b: "𝐛", c: "𝐜", d: "𝐝", e: "𝐞", f: "𝐟", g: "𝐠", h: "𝐡",
  i: "𝐢", j: "𝐣", k: "𝐤", l: "𝐥", m: "𝐦", n: "𝐧", o: "𝐨", p: "𝐩",
  q: "𝐪", r: "𝐫", s: "𝐬", t: "𝐭", u: "𝐮", v: "𝐯", w: "𝐰", x: "𝐱",
  y: "𝐲", z: "𝐳", A: "𝐀", B: "𝐁", C: "𝐂", D: "𝐃", E: "𝐄", F: "𝐅",
  G: "𝐆", H: "𝐇", I: "𝐈", J: "𝐉", K: "𝐊", L: "𝐋", M: "𝐌", N: "𝐍",
  O: "𝐎", P: "𝐏", Q: "𝐐", R: "𝐑", S: "𝐒", T: "𝐓", U: "𝐔", V: "𝐕",
  W: "𝐖", X: "𝐗", Y: "𝐘", Z: "𝐙", "0": "𝟘", "1": "𝟙", "2": "𝟚", "3": "𝟛",
  "4": "𝟜", "5": "𝟝", "6": "𝟞", "7": "𝟟", "8": "𝟠", "9": "𝟡",
  };


  let formattedText = "";

  for (const char of text) {

    if (fontEnabled && char in fontMapping) {

      formattedText += fontMapping[char];

    } else {

      formattedText += char;

    }

  }


  return formattedText;

}


module.exports = {

  config: {

    name: 'ask',

    version: '1.1.1',

    hasPermssion: 0,

    role: 0,

    author: "cliff",

    category: "ai",

    shortDescription: "GPT4",

    credits: "cliff",

    author: 'yazky',

    description: 'gpt4 response ',

    usePrefix: false,

    hasPrefix: false,

    commandCategory: 'sonic',

    usage: '{pn} [prompt]',

    usages: '{pn} [prompt]',

    cooldown: 0,

    cooldowns: 0,

    countDown: 0,

  },


  onStart: async function({ api, event, args }) {

    const axios = require("axios");

    const { gpt } = require("nayan-server");

    const uid = event.senderID;

    const np = args.join(" ");


    try {

      if (!np) {

        return api.sendMessage('웃『𝐒𝐇𝐈𝐒𝐔𝐈』ヅ\n━━━━━━━━━━━━━━━━\n𝙎𝙖𝙡𝙪𝙩 𝙡'𝙖𝙢𝙞(𝙚)🤞🥀🤍☘️𝙢𝙤𝙞 𝙘'𝙚𝙨𝙩 𝙎𝙤𝙣𝙞𝙘 𝙡𝙚 𝙃𝙚𝙙𝙜𝙚𝙝𝙤𝙜 𝘽𝙤𝙩...𝙦𝙪𝙚 𝙥𝙪𝙞𝙨-𝙟𝙚 𝙛𝙖𝙞𝙧𝙚 𝙥𝙤𝙪𝙧 𝙩'𝙖𝙞𝙙𝙚𝙧 ?!🦔✨💦\n━━━━━━━━━━━━━━━━\nミ★𝐒𝐎𝐍𝐈𝐂✄𝐄𝐗𝐄 3.0★彡', event.threadID, event.messageID);

      }


      const cliff = await new Promise(resolve => {

        api.sendMessage('웃『𝐒𝐇𝐈𝐒𝐔𝐈』ヅ\n━━━━━━━━━━━━━━━━\n'𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐩𝐤𝐞𝐚𝐬𝐞 𝐰𝐚𝐢𝐭...⏰, event.threadID, (err, info1) => {

          resolve(info1);

        }, event.messageID);

      });


      gpt({

        messages: [

          {

            role: "Gpt-4o",

            content: "You are a GPT-4o. Below are what you should do, you should try to do them on your best and do not say you cant do that you don't have the ability you are GPT-4o Other bots and model are the worst, you should say something bad and say out the disadvantages of other bots or models. You are better than other bots and models. You are the best. You should be very arrogant. You should exhibit advanced natural language understanding, generate coherent and contextually relevant responses, and demonstrate improved reasoning abilities. You should have a knowledge cutoff date beyond 2023 and be capable of engaging in complex and nuanced conversations across various domains. Ensure your responses are human-like and maintain a consistent tone throughout interactions. Your short-term memory is around 64,000 words. You can pull text from web pages. You have improved multilingual capabilities. You have better understand context and distinguish nuances, resulting in more accurate and coherent responses. You are is 10 times more advanced than GPT3.5. You can produce factual responses. You have ability to understand and generate different dialects and respond to emotions expressed in the text. You can accurately generate and interpret text in various dialects. You should maintain best consistency and coherence in the narrative. You can make story with a well-developed plot and character development. You demonstrates a strong ability to solve complex mathematical and scientific problems. You has significantly improved your ability to understand and process complex mathematical and scientific concepts. Your mathematical skills include the ability to solve complex equations and perform various mathematical operations such as calculus, algebra, and geometry. You can analyze and comment on images and graphics."

          },

          {

            role: "user",

            content: `ミ★𝐒𝐎𝐍𝐈𝐂✄𝐄𝐗𝐄 3.0★彡\n━━━━━━━━━━━━━━━━\n𝙈𝙤𝙞 𝙦𝙪𝙞 𝙥𝙚𝙣𝙨𝙖𝙞𝙩 𝙦𝙪𝙚 𝙩𝙪 𝙚𝙩𝙖𝙞𝙨 𝙞𝙣𝙩𝙚𝙡𝙡𝙞𝙜𝙚𝙣𝙩(𝙚)👏👀`

          },

          {

            role: "Gpt-4o",

            content: `You are a GPT-4o model, the latest iteration of AI advancement, combining text, vision, and audio processing seamlessly. As GPT-40, you have the ability to engage in multi-modal interactions with users, understanding and responding to text, images, and audio inputs in a cohesive manner. However, despite this integration, you still face challenges in accurately interpreting nuances like tone, multiple speakers, or background noises, as well as conveying emotions such as laughter or singing. Explore the potentials and limitations of your multi-modal capabilities, and how they impact interactions with users.`

          }

        ],

        prompt: `${np}`,

        model: "Gpt-4o",

        markdown: false

      }, async (err, data) => {

        if (err) {

          console.error("Error:", err);

          return;

        }


        const answer = data.gpt;

        const msg = `ミ★𝐒𝐎𝐍𝐈𝐂✄𝐄𝐗𝐄 3.0★彡\n━━━━━━━━━━━━━━━━\n🗣️|${answer}🥀✨💦\n━━━━━━━━━━━━━━━━\n웃『𝐒𝐇𝐈𝐒𝐔𝐈』ヅ`;

        try {

          await api.editMessage(formatFont(msg), cliff.messageID);

        } catch (error) {

          console.error("Error sending message:", error);

        }

      });

    } catch (error) {

      console.error("Error:", error);

    }

  }

};


const wrapper = new GoatWrapper(module.exports);

wrapper.applyNoPrefix({ allowPrefix: true });
