const { Schema, model } = require('mongoose');

const PizzaSchema = new Schema({

    pizzaname: {
        type: String
    },

    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
})

// create pizza model using pizzaSchema

const Pizza = model('Pizza' , PizzaSchema);

// export pizza model
module.exports = Pizza;