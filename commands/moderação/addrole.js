const Discord = require("discord.js")

module.exports = {
 
  run: async(client, message, args) => {
    if (!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR'])){message.reply(`❌ | ${message.author}, > **Você não tem permissão para usar esse comando!**`)
    } else {
      let sv = message.guild.id;
      let membro = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      let cargo = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
      if(!membro || !cargo) {
        message.reply(`❌ | ${message.author}, Mencione alguém e algum cargo! \`!addrole [@user] [@cargo]\``)
      } else {
        client.guilds.cache.get(sv).members.cache.get(membro.id).roles.add(cargo.id)
        message.reply(`✅ | ${message.author}, Adicionei o cargo ${cargo} para o membro ${membro}`)
   

    }
    } 
  },

  conf: {
    onlyguilds: true,
  },

  get help() {
    return {
      name: 'addrole',
      category: 'Moderação',
      description: 'Comando de Adicionar Cargo Para Um usuario!',
      usage: '!addrole [@user] [@cargo]',
      admin: true,
    }
  },
}
