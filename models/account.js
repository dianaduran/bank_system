module.exports = function(sequelize, Sequelize) {
    var Account = sequelize.define('account', {

        id: {
            autoIncrement: true,           
            primaryKey: true,
            type: Sequelize.INTEGER           
        },

        ac_balance: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            validate: {
                notEmpty: false,
            }
        },
        ac_currency: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: false,
            }
        },
  },{
    freezeTableName:true,
   });

   return Account;
}