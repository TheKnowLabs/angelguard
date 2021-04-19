const Discord = require('discord.js');
const { prefix, author, LockGuildID, PermittedGuilds, AllowGuilds, founder, founderId, SupportServer } = require('../settings.json');

module.exports = {
    name: "sobre",
    description: "sobres",

    async run(client, message, args) {
        const AllowedGuildIDs = PermittedGuilds.find((g) => g === `${message.guild.id}`)
        if (AllowGuilds === false) {
            if (message.guild.id !== LockGuildID) {
                const Unauth = new Discord.MessageEmbed()
                    .setDescription(`Comando não autorizado.`)
                    .setColor(0x36393E);

                const Leaving = new Discord.MessageEmbed()
                    .setDescription(`Saindo do servidor...`)
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
                const userCount = client.guilds.cache.map((guild) => guild.memberCount).reduce((p, c) => p + c);
                const about = new Discord.MessageEmbed()
                    .setTitle(`${client.user.username} | Sobre`)
                    .setDescription(`\n\n**Desenvedor** \n\n\`Discord:\` <@${founderId}> | \`${founder}\`\n \`Servidor de suporte:\` [Clique](${SupportServer}) \n \n **Status do BOT:**\n \`${userCount}\` __**Usuários protegidos.**__ \n \`${client.guilds.cache.size}\` __**Servidore protegidos.**__   \n`)
                    .setThumbnail(`${client.user.avatarURL({ dynamic: true })}`)
                    .setFooter(`© ${client.user.username} | Prefixo: ${prefix} | Desenvolvedor: ${author}`)
                    .setColor(0x36393E)
                    .setTimestamp(Date.now());
                message.channel.send(about).catch(() => {
                    console.error(red(`[Falha no comando] : [Sevidor] ${message.guild.name} | [CANAL] ${message.channel.name} | [Razão] Sem permissão para efetuar essa ação.`));
                });
            }
        } else {
            if (message.guild.id !== AllowedGuildIDs) {
                const Unauth = new Discord.MessageEmbed()
                    .setDescription(`Comando não autorizado.`)
                    .setColor(0x36393E);

                const Leaving = new Discord.MessageEmbed()
                    .setDescription(`Saindo do servidor...`)
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
                const userCount = client.guilds.cache.map((guild) => guild.memberCount).reduce((p, c) => p + c);
                const about = new Discord.MessageEmbed()
                    .setTitle(`<a:carregando:832458267207663636> ${client.user.username} | Sobre`)
                    .setDescription(`\n\> <:VSCode:832461676086296576> **Desenvolvedor** \n\n\`Discord:\` <@${founderId}> | \`${founder}\`\n \`Suporte:\` [Clique](${SupportServer}) \n \n> **<a:carregando_rosa:832596286225907784> Status do BOT:**\n \n \`${userCount}\` **Usuários protegidos.** :shield: \n \`${client.guilds.cache.size}\` **Servidores protegidos.** :shield:   \n`)
                    .setThumbnail(`${client.user.avatarURL({ dynamic: true })}`)
                    .setFooter(`© ${client.user.username} | Prefixo: ${prefix} | Desenvolvedor: ${author}`)
                    .setColor(0x36393E)
                    .setTimestamp(Date.now());
                message.channel.send(about).catch(() => {
                    console.error(red(`[Falha no comando] : [Servidor] ${message.guild.name} | [Canal] ${message.channel.name} | [Motivo] Sem permissão para efetuar essa ação`));
                });
            }
        }

    }
}