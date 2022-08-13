const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');


const Restaurant = db.define('restaurant',{
    name: {
    type: DataTypes.STRING
    },
    location: {
    type: DataTypes.STRING
    },
    cuisine: {
    type: DataTypes.STRING
    }
    })

async function main(){
    await Restaurant.sync({force: true})
    
        await Restaurant.create({
            name: 'McDonalds',
            location: 'London',
            cuisine: 'American'
        })

}

// main()
    
module.exports = {Restaurant};