/**
  * O Comando "botinfo" mostrará informações do bot.
*/

const Discord = require('discord.js')
const moment = require('moment')

moment.locale('pt-br')

module.exports = {
  run: function(client, message, args) {
    const inline = true
    const date = client.user.createdAt
    const userName = client.user.username
    const status = {
      online: '`🟢` Online',
      offline: '`⚫` Offline',
    }
    const link = "em prevê"

    const embed = new Discord.MessageEmbed()
      .setColor(process.env.COLOR)
      .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}?size=1024`)
      .setAuthor('🤖 Minhas informações')
      .addField('**Meu nome**', userName)
      .addField('**Meu ID**', client.user.id)
      .addField('**Estou online a**', moment().to(client.startTime, true))
      .addField('**Fui criado em**', moment(date).format('DD/MM/YYYY, à\\s HH:mm:ss'))
      .addField('🔗 **Meu código fonte**', link)
      .setFooter('2022 @ Taverna', 'https://lh3.googleusercontent.com/pw/AM-JKLWtMPDXRGETrCg4rDnRX9W9DaLVY_3xLpkowY1_PtCmCilNRZkjMp4oJcvzZ-fZa4sMDVQviw5cRYmYSLuQO_Gn1d-D-IgF4AiHsFmJ-8yp-qnL3kqQhJOC9OcZcVh35lUjA8y4U3Fyhv6IdWJS847yfA=w392-h695-no?authuser=0')
      .setTimestamp()

    if (client.user.presence.status) {
      embed.addField(
        '**Status**',
        status[client.user.presence.status],
        inline,
        true,
      )
    }

    message.channel.send(embed)
  },

  conf: {},

  get help() {
    return {
      name: 'botinfo',
      category: 'Informação',
      description: 'Mostra informações do bot.',
      usage: '!botinfo',
    }
  },
}
