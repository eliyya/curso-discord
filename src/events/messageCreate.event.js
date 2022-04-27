export default class {

    /**
     * The messageCreate event.
     * @param {import('discord.js').Message<true>} message 
     */
     static run(message) {
        console.log(message.content)
    }

}