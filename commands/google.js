const Discord = require ('discord.js')
const request = require ('request')
const cheerio = require ('cheerio')
module.exports = {
	name: 'image',
	description: 'Ping!',
	execute(message, args) {
        let results = 'random image';
        image(message, results);
        
        
	},
};
function image (message, results) {

    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + results,
        method: "GET",
        headers: {
            "Accept": "text",
            "User-Agent":"Chrome"
        }
    };
    request(options, function (error, respose, responseBody){
        if (error){
            return console.log('an error has occurred.')
        }//if there is a error
        $ = cheerio.load(responseBody);
        var links = $(".image a.link");
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr('href'));
        if (!urls.length){
            return console.log('no results found. sadge')
        }//see if there are results lol
        const embed = new Discord.MessageEmbed()
        .setTitle(results)
        .setImage(urls[Math.floor(Math.random() * urls.length)])
        .setFooter('Searched by ' + message.author.username)
        .setColor('#880e0e');
        message.channel.send(embed);
    }) 
}