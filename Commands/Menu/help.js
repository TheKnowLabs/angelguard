const Discord = require('discord.js');
const { prefix, author, LockGuildID, PermittedGuilds, AllowGuilds } = require('../settings.json');

module.exports = {
    name: "ajuda",
    description: "comando para ajuda",

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
                const help = new Discord.MessageEmbed()
                    .setTitle(`${client.user.username}`)
                    .setDescription(`\n\`SET-UP\` \n\`OTHER\` \n\`INVITE\` \n\`SOBRE\` `)
                    .setThumbnail(`${client.user.avatarURL({ dynamic: true })}`)
                    .setFooter(`© ${client.user.username} | Prefixo: ${prefix} | By: ${author}`)
                    .setColor(0x36393E)
                    .setTimestamp(Date.now());
                message.channel.send(help).catch(() => {
                    console.error(red(`[Falha no comando] : [Sevidor] ${message.guild.name} | [CANAL] ${message.channel.name} | [Razão] Sem permissão para efetuar essa ação.`));
                });
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
                const help = new Discord.MessageEmbed()
                    .setTitle(`<a:carregando:832458267207663636> ${client.user.username}`)
                    .setDescription(`<a:carregando:832458267207663636> **Exemplo de uso:  ag!{sobre(ou outros)} | Outros abaixo:**\n\n\> <a:setinha:832457842891030568> **CONFIGS\** \n\> <a:setinha:832457842891030568> **UTILIDADES**\ \n\> <a:setinha:832457842891030568> **SOBRE\** \n\n `)
                    .setThumbnail(`${client.user.avatarURL({ dynamic: true })}`)
                    .setFooter(`© ${client.user.username} | Prefixo: ${prefix} | By: ${author}`)
                    .setColor(0x36393E)
                    .setTimestamp(Date.now());
                message.channel.send(help).catch(() => {
                    console.error(red(`[Falha no comando] : [Sevidor] ${message.guild.name} | [CANAL] ${message.channel.name} | [Razão] Sem permissão para efetuar essa ação.`));
                });
            }
        }

    }
}