module.exports.run = async (msg, args, client) => {
        msg.channel.send(args.join(' '));
        msg.delete()
};

module.exports.info = {
    description: "Gives out the given string.",
    level: 0,
    enabled: true
};