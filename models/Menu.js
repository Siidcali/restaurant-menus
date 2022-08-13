const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

// TODO - create a Menu model

const Menu = db.define('menu', {

    title: {
        type: DataTypes.STRING
    }
})

async function main(){
    await Menu.sync({force: true})
    await Menu.create({
        title: 'Saver Menu'
    })
}

// main()
module.exports = {Menu};