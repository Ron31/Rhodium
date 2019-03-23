module.exports.run = async (msg, args, client) => {
    // TODO: implement Guild-ModLog-Channel
    if(!args) { return msg.channel.send("Maybe you should mention a user."); }
    const user = msg.mentions.users.first();

    if(!user){
            msg.channel.send("Maybe you should mention a user.");
        }
        else {
            const member = msg.guild.member(user);
            if(!member) { return msg.reply(`That user isn\\'t in this guild!`);}
            try{
                const member = msg.guild.member(user);
                member.kick(`${args.join(" ").replace(`<@!${msg.mentions.members.first().id}>`, "").replace(`<@${msg.mentions.members.first().id}>`, "")}`).then(() => {
                    msg.reply(`Successfully kicked ${user.tag}`);
                }).catch(err => {
                    msg.reply('I was unable to kick the member');
                    console.error(err);
                });
            }
            catch (err){
                if(err.name === "DiscordAPIError"){
                    client.embed.uni(msg, ":warning: There was an error with executing this command.", err.name, [["Description", err.message, true]], "#FF0000");
                }
                else { console.log(err); }
            }
        }
};

module.exports.info = {
    description: "Ban a member.",
    level: 0,
    permissions: 4,
    enabled: true,
    usage: ["<@User>"]
};