const {db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

// Define the model!  Here are the details:

// Create a new Item file in the models directory

// The Item model should have name and image properties, both of which are strings

// The Item model should also have price (number) and vegetarian (boolean) properties

const Item = db.define('item', {

    name:{
        type: DataTypes.STRING
    },
    image:{
        type: DataTypes.STRING
    },
    vegetarian:{
        type: DataTypes.BOOLEAN
    },
    price:{
        type: DataTypes.REAL
    }

    
})

module.exports = { Item }