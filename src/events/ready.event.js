export default class {

    /**
     * The ready event.
     * @param {import('discord.js').Client<true>} client 
     */
    static run(client) {
        console.log(client.user.username + ' Ready!!!')
    }

}