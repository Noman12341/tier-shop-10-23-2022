const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imgUrl: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    type: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    diameter: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;