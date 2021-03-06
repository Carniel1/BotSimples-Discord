/**
 * O Comando "news" adiciona o cargo de "Novidades" aos membros.
*/

const Discord = require('discord.js')

module.exports = {
  run: (client, message, args) => {
    const notifyRole = message.guild.roles.cache.get(process.env.NOVIDADES)

    if (!notifyRole) {
      const notifyEmbed1 = new Discord.MessageEmbed()
        .setColor('#29C9FC')
        .setAuthor('Não foi encontrado o  id do cargo ou ele não existe no servidor!')
        .setFooter('2021 © Taverna', 'https://i.imgur.com/Mu4KEVh.png?width=200,height=200')
        .setTimestamp()
      message.channel.send(notifyEmbed1)

      return
    }

    if (!message.member.roles.cache.has(process.env.NOVIDADES)) {
      message.member.roles.add(process.env.NOVIDADES)

      const notifyEmbed2 = new Discord.MessageEmbed()
        .setColor('#29C9FC')
        .setAuthor('Você adicionou o cargo Novidades 🔔')
        .setDescription('*Agora você receberá notificações quando houver notícias da comunidade!*')
        .setFooter('2022 © Taverna', 'https://lh3.googleusercontent.com/pw/AM-JKLWtMPDXRGETrCg4rDnRX9W9DaLVY_3xLpkowY1_PtCmCilNRZkjMp4oJcvzZ-fZa4sMDVQviw5cRYmYSLuQO_Gn1d-D-IgF4AiHsFmJ-8yp-qnL3kqQhJOC9OcZcVh35lUjA8y4U3Fyhv6IdWJS847yfA=w392-h695-no?authuser=0')
        .setTimestamp()

      message.channel.send(notifyEmbed2)
    } else {
      message.member.roles.remove(process.env.NOVIDADES)

      const notifyEmbed3 = new Discord.MessageEmbed()
        .setColor('#29C9FC')
        .setAuthor('Você removeu cargo Novidades 🔕')
        .setDescription('*Você removeu o cargo, e não irá receber mais notificações da comunidade.*')
        .setFooter('2022 © Taverna', 'https://lh3.googleusercontent.com/pw/AM-JKLWtMPDXRGETrCg4rDnRX9W9DaLVY_3xLpkowY1_PtCmCilNRZkjMp4oJcvzZ-fZa4sMDVQviw5cRYmYSLuQO_Gn1d-D-IgF4AiHsFmJ-8yp-qnL3kqQhJOC9OcZcVh35lUjA8y4U3Fyhv6IdWJS847yfA=w392-h695-no?authuser=0')
        .setTimestamp()

      message.channel.send(notifyEmbed3)
    }
  },

  conf: {
    // Comando deve ser usado apenas dentro de um servidor
    onlyguilds: true,
  },

  /**
   * Aqui exportamos Ajuda do comando como o seu nome categoria, descrição, etc...
  */

  get help() {
    return {
      name: 'news',
      category: 'Útil',
      description: 'O Comando "novidades" adiciona o cargo de "Novidades" aos membros.',
      usage: '!news',
    }
  },
}
