exports.run = async (bot, msg, arg) => {
    const ping = await msg.channel.send('Pera...')
    const clientm = ping.createdTimestamp - msg.createdTimestamp
    ping.edit('ð Sua MÃ£e pinga em mim todo dia, âï¸ Seu ping e: ' + clientm + ' âï¸')
}