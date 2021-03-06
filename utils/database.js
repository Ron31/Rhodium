const Sequelize = require('sequelize');
const config = require("../config.json");

module.exports.run = client => {
    console.log("This util has no run function.")
}

const database = new Sequelize(config.mysql.dbname, config.mysql.username, config.mysql.password, {
    host: config.mysql.hostname,
    dialect: 'mysql'
});

let Users = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    user: {
        type: Sequelize.STRING(64),
        allowNull: false
    },
    commandlevel: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    credits: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    afk: {
        type: Sequelize.BOOLEAN
    },
    afkreason: {
        type: Sequelize.STRING(200)
    },
    title: {
        type: Sequelize.STRING(200)
    },
    description: {
        type: Sequelize.STRING(200)
    },
    lastclaimed: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    globalxp: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    globallvl: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    devmsgmuted: {
        type: Sequelize.BOOLEAN
    }
});

let Badges = database.define('badges', {
    user: {
        type: Sequelize.STRING(300),
        allowNull: false
    },
    badge: {
        type: Sequelize.STRING(300),
        allowNull: false
    }
});

let ShopPurchases = database.define('shop_purchases', {
    user: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    itemid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

let ShopData = database.define('shop_data', {
    name: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
    },
    category: {
        type: Sequelize.STRING(300),
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

let Server = database.define('servers', {
    serverid: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    prefix: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    modlogbool: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    modlog: {
        type: Sequelize.STRING(200),
        allowNull: true
    },
    jlmsgbool: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    jlmsgchannel: {
        type: Sequelize.STRING(200)
    }
});

class DB {
    static get connection(){ return database; }
    static get shoppurchases(){ return ShopPurchases; }
    static get shopdata(){ return ShopData; }
    static get user(){ return Users; }
    static get guild(){ return Server; }
    static get badges(){ return Badges; }
}

module.exports = DB;
