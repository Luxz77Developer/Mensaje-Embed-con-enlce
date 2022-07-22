const Discord = require("discord.js");

module.exports = {
    name: "enlace",
    aliases: [],
    des: "enlace em embed",
    permisos: [""], //importante colocar un rol para poder ejecutarlo
    run: async (client, message, args, prefix) => {
        message.channel.send({
            embeds: [
                new Discord.MessageEmbed()
                    .setTitle("Aqui esta el enlace pedido")//MEnsaje Principal
                    .setDescription(
                        `
                        [Enlace](https://www.google.com) 
                        `//Descripcion
                    )
                    .setColor("GREEN")
            ],
        });
    },
};