const path = require('path');
const { Sequelize } = require('sequelize');

// TODO - connect to db via sequelize
const db=new this.sequelize({
    dialect:'sqlite',
    Storage:'./data.sqlite'
})
module.exports = {
    db
};
