module.exports = function(sequelize, Sequelize) {
    var Loan = sequelize.define('loan', {

        id: {
            autoIncrement: true,           
            primaryKey: true,
            type: Sequelize.INTEGER           
        },

        loan_number: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            validate: {
                notEmpty: false,
            }
        },
        
        loan_amount: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            validate: {
                notEmpty: false,
            }
        },
        loan_vdate: {
            type: Sequelize.DATE,
            allowNull: false,
            validate: {
                notEmpty: false,
            }
        },

        loan_mdate: {
            type: Sequelize.DATE,
            allowNull: false,
            validate: {
                notEmpty: false,
            }
        },

        loan_rate: {
            type: Sequelize.DECIMAL,
            allowNull: false,
            validate: {
                notEmpty: false,
            }
        },
   
},{
    freezeTableName:true,
   });

   return Loan;
}