const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        title: {type: String, require: true, unique: true},
        desc: {type: String, requre: true},
        image: {type: String, requre: true},
        category: {type: Array},
        size: {type: String},
        color: {type: String},
        price: {type: Number, requre: true},
    },
    {timestamps: true}
);

module.exports = mongoose.model("Product", ProductSchema)