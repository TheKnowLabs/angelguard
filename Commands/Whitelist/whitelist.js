const Discord = require('discord.js');
const { founderId, LockGuildID, PermittedGuilds, AllowGuilds } = require('../settings.json');
const { red, yellowBright } = require('chalk');
const TrustedUserIDs = require('../Database/trustedUserIDs.json');
const Acess = require('../Database/whitelist.json');
const fs = require("fs");

module.exports = {
    name: "pl",
    description: "Comando de Passe Livre.",

    async run(client, message, args) {
        // 
        const notOwner = new Discord.MessageEmbed()
            .setDescription('Apenas o posse ou um \`usuário com passe\` pode ter acesso a este comando.')
            .setColor(0x36393E)

        const Trusted = TrustedUserIDs.find((user) => user === `${message.author.id}`);
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
                const Mentioned = message.mentions.users.first();
                const GetMember = message.guild.member(Mentioned);

                if (Mentioned) {
                    if (message.author.id === founderId || Trusted) {
                        /**
                         * Whitelist User
                        */
                        function Whitelist(ID) {
                            const AccessID = Acess;
                            const Array2 = require('../Database/whitelisted.json')

                            const FindID = AccessID.find((el) => el === ID)
                            const InArray = AccessID.includes(FindID);

                            if (InArray === true) {
                                return message.reply('Este usuário já tem um passe livre.').then((msg) => msg.delete({ timeout: 4000 })) && console.log(red('ERROR: USER ALREADY WHITELISTED'));
                            } else if (isNaN(ID)) {
                                return message.reply('Me arrranje um ID válido por favor.') || console.error(red('ERROR: PROVIDE VALID NUMBER'))
                            } else {
                                AccessID.push(ID);
                                Array2.push("<@" + ID + ">")

                                const content = JSON.stringify(AccessID, null, 2);
                                const content2 = JSON.stringify(Array2, null, 2)
                                console.log(yellowBright('Alterações salvas. ✅'));
                                fs.writeFileSync('Commands/Database/whitelist.json', content, 'utf8', function (err) {
                                    if (err) {
                                        return console.error(err)
                                    }
                                })
                                fs.writeFileSync('Commands/Database/whitelisted.json', content2, 'utf8');
                                const Successful = new Discord.MessageEmbed()
                                    .setDescription(`Adicionado com sucessso a lista de passes \`${GetMember.id}\`. Atualiizando DataBase`)
                                    .setColor(0x36393E)
                                message.channel.send(Successful).then((msg) => msg.react('✅'))
                            }

                        }
                        Whitelist(GetMember.id);
                    } else {
                        message.channel.send(notOwner)
                    }
                } else {
                    const noID = new Discord.MessageEmbed()
                        .setDescription('Usuário não mencionado.')
                        .setColor(0x36393E)
                    return message.channel.send(noID) && console.log(red('Não encotrei retorno ou menção. (Trombone triste)'))
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
                const Mentioned = message.mentions.users.first();
                const GetMember = message.guild.member(Mentioned);

                if (Mentioned) {
                    if (message.author.id === founderId || Trusted) {
                        /**
                         * Whitelist User
                        */
                        function Whitelist(ID) {
                            const AccessID = Acess;
                            const Array2 = require('../Database/whitelisted.json')

                            const FindID = AccessID.find((el) => el === ID)
                            const InArray = AccessID.includes(FindID);

                            if (InArray === true) {
                                return message.reply('Este usuário já tem um passe livre.').then((msg) => msg.delete({ timeout: 4000 })) && console.log(red('ERROR: USER ALREADY WHITELISTED'));
                            } else if (isNaN(ID)) {
                                return message.reply('Me arrranje um ID válido por favor.') || console.error(red('ERROR: PROVIDE VALID NUMBER'))
                            } else {
                                AccessID.push(ID);
                                Array2.push("<@" + ID + ">")

                                const content = JSON.stringify(AccessID, null, 2);
                                const content2 = JSON.stringify(Array2, null, 2)
                                console.log(yellowBright('Alterações salvas. ✅'));
                                fs.writeFileSync('Commands/Database/whitelist.json', content, 'utf8', function (err) {
                                    if (err) {
                                        return console.error(err)
                                    }
                                })
                                fs.writeFileSync('Commands/Database/whitelisted.json', content2, 'utf8');
                                const Successful = new Discord.MessageEmbed()
                                    .setDescription(`Adicionado com sucessso a lista de passes \`${GetMember.id}\`. Atualizando DataBase`)
                                    .setColor(0x36393E)
                                message.channel.send(Successful).then((msg) => msg.react('✅'))
                            }

                        }
                        Whitelist(GetMember.id);
                    } else {
                        message.channel.send(notOwner)
                    }
                } else {
                    const noID = new Discord.MessageEmbed()
                        .setDescription('Usuário não mencionado.')
                        .setColor(0x36393E)
                    return message.channel.send(noID) && console.log(red('Usuário não mencionado'))
                }
            }
        }

    }
}