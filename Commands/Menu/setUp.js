const Discord = require('discord.js');
const { prefix, LockGuildID, PermittedGuilds, AllowGuilds } = require('../settings.json');
const pagination = require("discord.js-pagination");

module.exports = {
    name: "configs",
    description: "help command",

    async run(client, message, args) {

        const pagina1 = new Discord.MessageEmbed()
            .setTitle(`${client.user.username} | Passe Livre`)
            .setDescription(`\n **<a:carregando_rosa:832596286225907784> Dê passe livre para seus amigos efetuarem ações sem serem banidos pelo Angel Guard.**\n\n > **<a:setinha:832457842891030568> Passe livre** | \`${prefix}pl [ID]\` \n > **<a:setinha:832457842891030568> Retirar passse livre** | \`${prefix}rpl [ID]\`\n > **<a:setinha:832457842891030568> Retirar passe de todos.** | \`${prefix}rpall\`\n > **<a:setinha:832457842891030568> Usuários com passe livre.** | \`${prefix}passes\``)
            .setColor(0x36393E)
            .setTimestamp(Date.now());

        const pagina2 = new Discord.MessageEmbed()
            .setTitle(`${client.user.username} | Lista Negra`)
            .setDescription(`\n*Retire esta pessoa de todos os servidores que o BOT está presente.*\n\n**Blacklist** | \`${prefix}bl [ID]\` \n**Unblacklist** | \`${prefix}ubl [ID]\` \n**Unblacklist All** | \`${prefix}uball\` \n**Blacklisted** | \`${prefix}blacklist\``)
            .setColor(0x36393E)
            .setTimestamp(Date.now());

        const pagina3 = new Discord.MessageEmbed()
            .setTitle(`${client.user.username} | Trust`)
            .setDescription(`\n*Confiar em um jogador para efetuar comandos especiais.*\n\n**Trust** | \`${prefix}trust [ID]\` \n**Untrust** | \`${prefix}untrust [ID]\` \n**Untrust All** | \`${prefix}untrustall\` \n**Trusted** | \`${prefix}trusted\``)
            .setColor(0x36393E)
            .setTimestamp(Date.now());

        const pagina4 = new Discord.MessageEmbed()
            .setTitle(`${client.user.username} | Habilitar & Desabilitar`)
            .setDescription(`\n**Não recomendado. Ele permite que o bot seja usado em outros servidores.**\n\n**Enable Guilds** | \`${prefix}eguilds\` \n**Disable Guilds** | \`${prefix}dguilds\``)
            .setColor(0x36393E)
            .setTimestamp(Date.now());

        const pagina5 = new Discord.MessageEmbed()
            .setTitle(`${client.user.username} | Adicionar & Remover`)
            .setDescription(`\n**Permite remoções ou acréscimos de guildas.**\n\n**Adicionar servidor** | \`${prefix}aguild\` \n**Remover servidor** | \`${prefix}rguild\`\n**Lista de servidores** | \`${prefix}glist\``)
            .setColor(0x36393E)
            .setTimestamp(Date.now());

        const paginas = [
            pagina1,
            pagina2,
            pagina3,
            pagina4,
            pagina5
        ]

        const emojis = ["<a:setinha_e:832605698901934182>", "<a:setinha:832457842891030568>"];

        const timeout = '100000'

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
                pagination(message, paginas, emojis, timeout).catch(() => {
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
                pagination(message, paginas, emojis, timeout).catch(() => {
                    console.error(red(`[Falha no comando] : [Sevidor] ${message.guild.name} | [CANAL] ${message.channel.name} | [Razão] Sem permissão para efetuar essa ação.`));
                });
            }
        }

    }
}