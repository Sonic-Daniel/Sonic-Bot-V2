module.exports = {
  config: {
    name: "join",
    aliases: ['addme', 'joinme'],
    version: "1.0",
    author: "Samir B. Thakuri",
    countDown: 5,
    role: 2,
    shortDescription: {
      en: "Add user to support group",
    },
    longDescription: {
      en: "This command adds the user to the group wher bot exist",
    },
    category: "owner",
    guide: {
      en: "To use this command, simply type !join <threadID>.",
    },
  },

  onStart: async function ({ api, args, message, event }) {
    const supportGroupId = args[0];
    if (!supportGroupId) {
      api.sendMessage("𝔙𝔢𝔲𝔦𝔩𝔩𝔢𝔷 𝔞𝔧𝔬𝔲𝔱𝔢𝔯 ℑ𝔇 𝔡𝔲 𝔤𝔯𝔬𝔲𝔭𝔢.....🔴.", event.threadID);
      return;
    }
    const threadID = event.threadID;
    const userID = event.senderID;
    const threadInfo = await api.getThreadInfo(supportGroupId);
    const participantIDs = threadInfo.participantIDs;
    if (participantIDs.includes(userID)) {
      api.sendMessage(
        "𝔅𝔬𝔰𝔰.....𝔳𝔬𝔲𝔰 𝔢𝔱𝔢𝔰 𝔡𝔢𝔧𝔞 𝔡𝔞𝔫𝔰 𝔩𝔢 𝔤𝔯𝔬𝔲𝔭𝔢🍀𝔙𝔢𝔯𝔦𝔣𝔦𝔢𝔷 𝔳𝔬𝔱𝔯𝔢 𝔟𝔬𝔦𝔱𝔢 𝔡𝔢 𝔪𝔢𝔰𝔰𝔞𝔤𝔢.....🍷",
        threadID
      );
    } else {
      api.addUserToGroup(userID, supportGroupId, (err) => {
        if (err) {
          console.error("🔴| Failed to add user to support group:", err);
          api.sendMessage("𝔊𝔯𝔬𝔲𝔭𝔢 𝔦𝔫𝔱𝔯𝔬𝔲𝔳𝔞𝔟𝔩𝔢......🙅𝔙𝔢𝔲𝔦𝔩𝔩𝔢𝔷 𝔪'𝔶 𝔞𝔧𝔬𝔲𝔱𝔢𝔯 𝔭𝔲𝔦𝔰 𝔯𝔢𝔢𝔰𝔰𝔞𝔶𝔢𝔯...🍷", threadID);
        } else {
          api.sendMessage(
            "𝔅𝔬𝔰𝔰....𝔳𝔬𝔲𝔰 𝔞𝔳𝔢𝔷 𝔢𝔱𝔢 𝔞𝔧𝔬𝔲𝔱𝔢 𝔞𝔲 𝔤𝔯𝔬𝔲𝔭𝔢🔴.",
            threadID
          );
        }
      });
    }
  },
}
