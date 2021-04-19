const Discord = require('discord.js');
const { LockGuildID, PermittedGuilds, AllowGuilds } = require('../settings.json');
const Whitelsited = require('../Database/whitelisted.json');

module.exports = {
    name: "passes",
    description: "list of whitelist users command",

    async run(client, message, args) {
        const AllowedGuildIDs = PermittedGuilds.find((g) => g === `${message.guild.id}`)
        if (AllowGuilds === false) {
            if (message.guild.id !== LockGuildID) {
                const Unauth = new Discord.MessageEmbed()
                    .setDescription(`Comando não autorizado.`)
                    .setColor(0x36393E);

                const Leaving = new Discord.MessageEmbed()
                    .setDescription(`Saindo do grupo.`)
                    .setColor(0x36393E);

                setTimeout(function () {
                    message.channel.send(Unauth).then(msg => {
                        msg.delete({ timeout: 2000 })
                    })
                }, 500)
                setTimeout(function () {
                    message.channel.send(Leaving).then(msg => {
                        msg.delete({ timeout: 1000 })
                    })
                }, 4000)
                setTimeout(function () {
                    message.guild.leave();
                }, 6000)
            } else {
                if (Whitelsited.length > 0) {
                    const List = new Discord.MessageEmbed()
                        .setTitle(`${client.user.username} | Usuários com passe: ${Whitelsited.length}`)
                        .setDescription(`${Whitelsited}`)
                        .setColor(0x36393E)
                    message.channel.send(List)
                } else {
                    const noList = new Discord.MessageEmbed()
                        .setTitle(`${client.user.username} | Usuários com passe: ${Whitelsited.length}`)
                        .setDescription(`Sem usuários com passe no momento.`)
                        .setColor(0x36393E)
                    message.channel.send(noList)
                }
            }
        } else {
            if (message.guild.id !== AllowedGuildIDs) {
                const Unauth = new Discord.MessageEmbed()
                    .setDescription(`Comando não autorizado.`)
                    .setColor(0x36393E);

                const Leaving = new Discord.MessageEmbed()
                    .setDescription(`Saindo do grupo.`)
                    .setColor(0x36393E);

                setTimeout(function () {
                    message.channel.send(Unauth).then(msg => {
                        msg.delete({ timeout: 2000 })
                    })
                }, 500)
                setTimeout(function () {
                    message.channel.send(Leaving).then(msg => {
                        msg.delete({ timeout: 1000 })
                    })
                }, 4000)
                setTimeout(function () {
                    message.guild.leave();
                }, 6000)
            } else {
                if (Whitelsited.length > 0) {
                    const List = new Discord.MessageEmbed()
                        .setTitle(`${client.user.username} | Usuários com passe: ${Whitelsited.length}`)
                        .setDescription(`${Whitelsited}`)
                        .setColor(0x36393E)
                    message.channel.send(List)
                } else {
                    const noList = new Discord.MessageEmbed()
                        .setTitle(`${client.user.username} | Usuários com passe: ${Whitelsited.length}`)
                        .setDescription(`Sem usuários com passe no momento.`)
                        .setColor(0x36393E)
                    message.channel.send(noList)
                }
            }
        }

    }
}