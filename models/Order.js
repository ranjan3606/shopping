const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema(
    {
        userId: { type: String, require: true, unique: true },
        products: [
            {
                productId: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1
                },
            },
        ],
        anount: {type: Number, require: true},
        address: {type: Object, require: true},
        status: {type: Number, default: "pending"}
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema)