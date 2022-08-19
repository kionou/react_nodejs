const  Sequelize  = require("sequelize")

let sequelize = new Sequelize("Test_vue","postgres","nan2021",{
    dialect:'postgres',
    host:'localhost',
    port:'5432'
})

module.exports=sequelize;