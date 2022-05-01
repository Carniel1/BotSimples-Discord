/**
 * O evento guildMemberRemove é emitido após um membro sair do servidor.
*/

module.exports = (client, member) => {
  const Discord = require('discord.js')

  const leave = new Discord.MessageEmbed()
    .setColor(process.env.COLOR)
    .setAuthor('👥 Um membro saiu do servidor.')
    .setThumbnail(`${member.user.displayAvatarURL({ dynamic: true })}?size=1024`)
    .setDescription(`${member} acabou de sair.`)
    .setFooter('2022 © Liga dos Programadores', 'https://lh3.googleusercontent.com/pw/AM-JKLWtMPDXRGETrCg4rDnRX9W9DaLVY_3xLpkowY1_PtCmCilNRZkjMp4oJcvzZ-fZa4sMDVQviw5cRYmYSLuQO_Gn1d-D-IgF4AiHsFmJ-8yp-qnL3kqQhJOC9OcZcVh35lUjA8y4U3Fyhv6IdWJS847yfA=w392-h695-no?authuser=0')
    .setTimestamp()

  member.guild.channels.cache.get(process.env.SAIDA).send(leave)
}
