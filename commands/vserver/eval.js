//const whitelist = require('../../config').eval_whitelist;

module.exports.run = async (msg, args, client) => {
    /*if (!whitelist.includes(msg.author.id)) {
        return msg.channel.send(':no_entry_sign: No rights!')
    }*/
    let silent = false;
    if (args[0].toLowerCase() == "-s"){
        silent = true;
        args.shift();
        msg.delete();
    }
    console.log(args.join(' '))
    try {
        let evaled = await eval(args.join(' '))
        evaled.replace(client.config.token, "<Censored Token>")
        if(!silent)client.embed.success(msg.channel, '```' + evaled + '```', '<a:success:471096765613998080> Eval finished successfully.')
        else return;
    } catch(e) {
        return client.embed.error(msg.channel, '```' + e.message + '```', ':warning: Eval returned an error');
    }
    
}

module.exports.info = {
    description: "Eval Command",
    level: 6,
    enabled: true,
    usage: ["some.code(here)"]
};
