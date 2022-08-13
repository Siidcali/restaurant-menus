const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu')
const {Item} = require('./item')


Menu.belongsTo(Restaurant)
Restaurant.hasMany(Menu)

Item.belongsToMany(Menu, {through: 'menu_items'})
Menu.belongsToMany(Item, {through: 'menu_items'})



module.exports = { Restaurant, Menu, Item }