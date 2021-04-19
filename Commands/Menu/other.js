const Discord = require('discord.js');
const { prefix, LockGuildID, PermittedGuilds, AllowGuilds, author } = require('../settings.json');

module.exports = {
    name: "utilidades",
    description: "comando de utilidades",

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
                    .setTitle(`${client.user.username} | Utilidades & Moderação `)
                    .setDescription(` Moderation.
                \n **Banning:**
                \n **Ban** | \`${prefix}ban [user]\` \n **Unban** | \`${prefix}unban [user] (reason)\` \n **Unban All** | \`${prefix}unbanall\`
                \n **Kicking:**
                \n **Kick** | \`${prefix}kick [user]\`
                \n **Messages:**
                \n **Purge** | \`${prefix}purge [Numb]\` *Max: 100 | 2 Weeks Old*
                `)
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
                    .setTitle(`${client.user.username} | Utilidades & Moderação. `)
                    .setDescription(`<a:carregando_rosa:832596286225907784> **Utilize: ag!{ban(ou outros)} | Outros abaixo:**
                \n **<a:carregando_rosa:832596286225907784> Banimentos:**
                \n > **<a:setinha:832457842891030568> Banir/Desbanir** | \`${prefix}ban [Menção e/ou ID]\` \n > **<a:setinha:832457842891030568> Unban** | \`${prefix}unban [Menção e/ou ID] (razão)\` \n > **<a:setinha:832457842891030568> Unban All** | \`${prefix}unbanall\`
                \n **<a:carregando_rosa:832596286225907784> Expulsões:**
                \n > **<a:setinha:832457842891030568> Kickar** | \`${prefix}kick [Menção e/ou ID]\`
                \n **<a:carregando_rosa:832596286225907784> Limpador:**
                \n > **<a:setinha:832457842891030568> Limpar mensagens** | \`${prefix}limpar [Quantidade]\` **Max: 100**
                `)
                    .setFooter(`© ${client.user.username} | Prefixo: ${prefix} | By: ${author}`)
                    .setColor(0x36393E)
                    .setTimestamp(Date.now());
                message.channel.send(help).catch(() => {
                    console.error(red(`[Falha no comando] : [Sevidor] ${message.guild.name} | [CANAL] ${message.channel.name} | [Razão] Sem permissão para efetuar essa ação.`));
                });
            }
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }
}