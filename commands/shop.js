/** @format */

// again very badly made use ikonik bot v2 for a better version!
module.exports = {
  name: "shop",
  description: "Ping!",
  execute(message, args) {
    const Discord = require("discord.js");
    let attch = "https://api.nitestats.com/v1/shop/image.png";
    let attachment = new Discord.MessageAttachment(attch);
    message.channel.send(attachment);
  },
};
