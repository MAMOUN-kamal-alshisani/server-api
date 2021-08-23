
'use strict';

const customer = (Sql, DataType) => Sql.define('customer', {
    customerName: {
        type: DataType.STRING,
        allowNull: false,
    },
    customerId: {
        type: DataType.INTEGER,
        allowNull: false,
    },
});

module.exports = customer;