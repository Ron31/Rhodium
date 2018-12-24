const fs = require('fs');
const cmdDir = fs.readdirSync('./commands/');
var colors = require('colors');

module.exports.run = (client) => {
    console.log("Parsing commands".blue);
    client.commands = new Map;
    for (let dir of cmdDir) {
        console.log("- Loading group " + dir);
        client.groups.push(dir);
        let group = fs.readdirSync(`./commands/${dir}`);
        for (let commandFile of group) {
            console.log("-- Loading command " + commandFile.split(".")[0] + " of " + dir)
            if (!commandFile.endsWith('.js')) return;
            let command = require(`../commands/${dir}/${commandFile}`);
            client.commands.set(commandFile.split('.')[0], [command, dir]);
        }
    }
    console.log("");
}
