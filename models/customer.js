module.exports = function(sequelize, Sequelize) {
 
    var Customer = sequelize.define('customer', {
 
        id: {
           // autoIncrement: true,
            primaryKey: true,
           // type: Sequelize.INTEGER,
            allowNull: false,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1
        },
 
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        username: {
            type: Sequelize.TEXT
        },
 
        // about: {
        //     type: Sequelize.TEXT
        // },
        phone_number:{
            type:Sequelize.STRING,
            unique:true,
            allowNull:false
        },
        address:{
            type:Sequelize.STRING,
            allowNull:false
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
        last_login: {
            type: Sequelize.DATE
        },
 
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
 
    },{
        freezeTableName:true,
    });

    return Customer;
 
}