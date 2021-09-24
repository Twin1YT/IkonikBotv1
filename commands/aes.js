/** @format */

const { DiscordAPIError } = require("discord.js");
// very poorly made! use my bot for a better version!
const Discord = require("discord.js");
const axios = require("axios");
module.exports = {
  name: "aes",
  description: "Ping!",
  execute(message, args) {
    axios.get("https://fortnite-api.com/v2/aes").then((res) => {
      const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("aes keys")
        .setURL("https://fortnite-api.com/v2/aes")
        .addFields(
          {
            name: "Build",
            value: `\`${res.data.data.build}\``,
          },
          {
            name: "Main Key",
            value: `\`${res.data.data.mainKey}\``,
          }
        )
        .setFooter(`Updated at ${res.data.data.updated}`);
      message.channel.send(embed);
    });
  },
};
