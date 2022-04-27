export default class {

    /**
     * 
     * @param {import('discord.js').GuildMember} oldMember 
     * @param {import('discord.js').GuildMember} newMember 
     */
    static run(oldMember, newMember) {
        if (oldMember.displayName !== newMember.displayName)
            console.log(oldMember.displayName + ' changed their name to ' + newMember.displayName)
    }

}