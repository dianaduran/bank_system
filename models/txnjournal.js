module.exports = function(sequelize, Sequelize) {
    var Txnjournal = sequelize.define('txnjournal', {

        id: {
            autoIncrement: true,           
            primaryKey: true,
            type: Sequelize.INTEGER           
        },

        txn_date: {
            type: Sequelize.DATE,
            allowNull: false,
            validate: {
                notEmpty: false,
            }
        },

        txn_type: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: false,
            }
        },

        txn_description: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: false,
            }
        },

        txn_amount: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            validate: {
                notEmpty: false,
            }
        },
  
},{
    freezeTableName:true,
   });

   return Txnjournal;
}