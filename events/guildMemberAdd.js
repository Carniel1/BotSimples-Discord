/**
  * O evento guildMemberAdd é emitido após um membro entrar.
*/

module.exports = async (client, member) => {
  const Discord = require('discord.js')

  const welcome = new Discord.MessageEmbed()
    .setColor(process.env.COLOR)
    .setThumbnail(`${member.user.displayAvatarURL({ dynamic: true })}?size=1024`)
    .setTitle('👋 Bem-vindo(a) a Taverna!')
    .setDescription(`${member}, vá em <#929810400063680512> e leia os tópicos. E também não se esqueça de se apresentar em <#929810406397067294> :)`)
    .setImage('https://lh3.googleusercontent.com/pw/AM-JKLWtMPDXRGETrCg4rDnRX9W9DaLVY_3xLpkowY1_PtCmCilNRZkjMp4oJcvzZ-fZa4sMDVQviw5cRYmYSLuQO_Gn1d-D-IgF4AiHsFmJ-8yp-qnL3kqQhJOC9OcZcVh35lUjA8y4U3Fyhv6IdWJS847yfA=w392-h695-no?authuser=0')
    .setFooter('2021 © Taverna', 'https://lh3.googleusercontent.com/pw/AM-JKLWtMPDXRGETrCg4rDnRX9W9DaLVY_3xLpkowY1_PtCmCilNRZkjMp4oJcvzZ-fZa4sMDVQviw5cRYmYSLuQO_Gn1d-D-IgF4AiHsFmJ-8yp-qnL3kqQhJOC9OcZcVh35lUjA8y4U3Fyhv6IdWJS847yfA=w392-h695-no?authuser=0')
    .setTimestamp()

  const join = new Discord.MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL)
    .setColor(process.env.COLOR)
    .setAuthor('👤 Um novo membro entrou no servidor!')
    .setDescription(`${member} acabou de entrar.`)
    .setThumbnail(`${member.user.displayAvatarURL({ dynamic: true })}?size=1024`)
    .addField('**Entrou no Discord em**', formatDate('DD/MM/YYYY, às HH:mm:ss', member.user.createdAt), true)
    .setFooter('2022 © Carniel', 'https://lh3.googleusercontent.com/pw/AM-JKLWtMPDXRGETrCg4rDnRX9W9DaLVY_3xLpkowY1_PtCmCilNRZkjMp4oJcvzZ-fZa4sMDVQviw5cRYmYSLuQO_Gn1d-D-IgF4AiHsFmJ-8yp-qnL3kqQhJOC9OcZcVh35lUjA8y4U3Fyhv6IdWJS847yfA=w392-h695-no?authuser=0')
    .setTimestamp()

  member.guild.channels.cache.get(process.env.BOASVINDAS).send(welcome)
  member.guild.channels.cache.get(process.env.ENTRADA).send(join)
}

/**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate(template, date) {
  const specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function(t, item, i) {
    return t.split(specs[i]).join(item)
  }, template)
}
