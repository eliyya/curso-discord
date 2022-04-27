export default class {

    /**
     * 
     * @param {import('discord.js').Message} message 
     */
    static run(message) {
        console.log('Mensaje eliminado', message.content, 'en el canal', message.channel.name)
    }

}