const Discord = require('discord.js');
const { LockGuildID, PermittedGuilds, AllowGuilds } = require('../settings.json');

module.exports = {
    name: "ban",
    description: "ban command",

    async run(client, message, args) {

        const AllowedGuildIDs = PermittedGuilds.find((g) => g === `${message.guild.id}`)
        if (AllowGuilds === false) {
            if (message.guild.id !== LockGuildID) {
                const Unauth = new Discord.MessageEmbed()
                    .setDescription(`Comando não autorizado.`)
                    .setColor(0x36393E);

                const Leaving = new Discord.MessageEmbed()
                    .setDescription(`Saindo do grupo...`)
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
                const user2 = message.mentions.users.first();
                // If we have a user mentioned
                if (user2) {
                    // Now we get the member from the user
                    const member = message.guild.member(user2);
                    const banembed = new Discord.MessageEmbed()
                        .setDescription("*Você não tem permissão pra usar esse comando, boboca!*")
                        .setColor(0x36393E)
                        .setTimestamp(Date.now());

                    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(banembed)

                    const highroleembed = new Discord.MessageEmbed()
                        .setDescription("*Você não pode banir membros superiores ou com cargo igual a você, bobão!*")
                        .setColor(0x36393E)
                        .setTimestamp(Date.now());
                    if (message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send(highroleembed);
                    // If the member is in the guild
                    if (member) {

                        member
                            .ban({ days: 7, reason: "Banimento sem motivo." })
                            .then(() => {
                                // We let the message author know we were able to kick the person
                                const bannedembed = new Discord.MessageEmbed()
                                    .setDescription(`***Banido com sucesso ${user2.tag}***`)
                                    .setColor(0x36393E)
                                    .setTimestamp(Date.now());
                                message.channel.send(bannedembed)
                            })
                            .catch(err => {

                                message.reply('Eu não posso banir esse membro. (Trombone triste)');
                                // Log the error
                                console.error(err);
                            });
                    } else {
                        // The mentioned user isn't in this guild
                        const nomemembed = new Discord.MessageEmbed()
                            .setDescription("*Esse membro nem se quer está aqui para eu punir-lo. (Trombone triste)*")
                            .setColor(0x36393E)
                            .setTimestamp(Date.now());
                        message.channel.send(nomemembed)
                    }
                    // Otherwise, if no user was mentioned
                } else {
                    const nobanmentionembed = new Discord.MessageEmbed()
                        .setDescription("*Você esqueceu de mencionar um usuário.*")
                        .setColor(0x36393E)
                        .setTimestamp(Date.now());
                    message.channel.send(nobanmentionembed)
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
                const user2 = message.mentions.users.first();
                // If we have a user mentioned
                if (user2) {
                    // Now we get the member from the user
                    const member = message.guild.member(user2);
                    const banembed = new Discord.MessageEmbed()
                        .setDescription("*Você não tem permissão pra usar esse comando, boboca!*")
                        .setColor(0x36393E)
                        .setTimestamp(Date.now());

                    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(banembed)

                    const highroleembed = new Discord.MessageEmbed()
                        .setDescription("*Você não pode banir membros superiores ou com cargo igual a você, bobão!*")
                        .setColor(0x36393E)
                        .setTimestamp(Date.now());
                    if (message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send(highroleembed);
                    // If the member is in the guild
                    if (member) {

                        member
                            .ban({ days: 7, reason: "Banimento autorizado." })
                            .then(() => {
                                // We let the message author know we were able to kick the person
                                const bannedembed = new Discord.MessageEmbed()
                                    .setDescription(`***Banido com sucesso ${user2.tag}***`)
                                    .setColor(0x36393E)
                                    .setTimestamp(Date.now());
                                message.channel.send(bannedembed)
                            })
                            .catch(err => {

                                message.reply('Eu não posso banir esse membro. (Trombone triste)');
                                // Log the error
                                console.error(err);
                            });
                    } else {
                        // The mentioned user isn't in this guild
                        const nomemembed = new Discord.MessageEmbed()
                            .setDescription("*Esse membro nem se quer está aqui para eu punir-lo. (Trombone triste)*")
                            .setColor(0x36393E)
                            .setTimestamp(Date.now());
                        message.channel.send(nomemembed)
                    }
                    // Otherwise, if no user was mentioned
                } else {
                    const nobanmentionembed = new Discord.MessageEmbed()
                        .setDescription("*Você esqueceu de mencionar um usuário.*")
                        .setColor(0x36393E)
                        .setTimestamp(Date.now());
                    message.channel.send(nobanmentionembed)
                }
            }
        }

    }
}