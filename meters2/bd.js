const { prototype } = require('events');
const { stdin } = require('process');
const { Sequelize, DataTypes } = require('sequelize');



const sequelize = new Sequelize('db_meter', 'nat', '1234', {
  host: 'localhost',
  dialect: 'postgres'
  
});
const Meter = sequelize.define('meter',{
    id: {
        primaryKey: true,
        autoIncrement: true, 
        type: DataTypes.INTEGER,
    },
    water: DataTypes.STRING,
    T1: DataTypes.STRING,
    T2: DataTypes.STRING,
    gas: DataTypes.STRING,
    ls: DataTypes.STRING,
    
})

    sequelize.sync({ force: true });
    

module.exports= {
    Meter
}