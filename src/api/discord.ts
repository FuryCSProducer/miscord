import { Server } from '../types/fastify'
import { Guild, GuildChannel, GuildMember } from 'discord.js'

function channel ({ type, name, id, parent }: GuildChannel) {
  return {
    type, name, id,
    category: parent ? parent.id : null
  }
}

function member ({ nickname, user: { discriminator, username } }: GuildMember) {
  return {
    nickname, username, discriminator
  }
}

function guildWithChannels ({ name, id, channels }: Guild) {
  return {
    name, id,
    channels: channels.array().map(channel)
  }
}

function guildWithUsers ({ name, id, members }: Guild) {
  return {
    name, id,
    users: members.array().map(member)
  }
}

export default async (app: Server) => {
  app.get('/channels', async (request, reply) => {
    return discord.client.guilds.array().map(guildWithChannels)
  })

  app.get('/users', async (request, reply) => {
    return discord.client.guilds.array().map(guildWithUsers)
  })

  app.get('/guilds/:guild/channels', async (request, reply) => {
    if (!discord.client.guilds.has(request.params.guild)) return reply.sendError(404, 'Guild not found')
    return discord.client.guilds.get(request.params.guild)!!.channels.array().map(channel)
  })
}
