/**
 * O Comando "avatar" mostrará a imagem de perfil do usuário.
*/

const Discord = require('discord.js')

module.exports = {

  /** Primeiro o metodo run(client, message, args) será executado pelo arquivo message.js
    * Que passará os argumentos atraves do middleware.
  */

  run: function(client, message, args) {
    const member = message.mentions.users.first() || message.author

    const embed = new Discord.MessageEmbed()
      .setDescription(`**🖼️ Avatar de ${member}**`)
      .setImage(member.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
      .setColor(process.env.COLOR)
      .setFooter('2022 @ Taverna', 'https://lh3.googleusercontent.com/pw/AM-JKLWtMPDXRGETrCg4rDnRX9W9DaLVY_3xLpkowY1_PtCmCilNRZkjMp4oJcvzZ-fZa4sMDVQviw5cRYmYSLuQO_Gn1d-D-IgF4AiHsFmJ-8yp-qnL3kqQhJOC9OcZcVh35lUjA8y4U3Fyhv6IdWJS847yfA=w392-h695-no?authuser=0')
      .setTimestamp()

    message.channel.send(embed)
  },

  conf: {},

  /**
    * Aqui exportamos ajuda do comando como o seu nome categoria, descrição, etc...
  */

  get help() {
    return {
      name: 'avatar',
      category: 'Informação',
      description: 'Mostra o avatar do usuário.',
      usage: '!avatar',
    }
  },
}
