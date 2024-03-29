const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    sku: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, default: 0 },
    type: { type: String, default: 'donation' }, //donation or sell
    imageurl: { type: String, default: null },
    description: { type: String, default: '' },
    own: { type: String },
    contact: { type: String, required: true },
    pushtime: { type: Date, default: Date.now() },
    quantity: { type: Number, require: true },
    author: { type: mongoose.Types.ObjectId },
    category: { type: mongoose.Types.ObjectId },
});
module.exports = mongoose.model('book', bookSchema);
