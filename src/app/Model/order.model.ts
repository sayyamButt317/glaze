const mongoose = require("mongoose");

const productschema = new mongoose.Schema(
  {
    Description: {
      type: String,
      required: true,
    },
    ProductName: {
      type: String,
      required: true,
    },
    ActualPrice: {
      type: Number,
      required: true,
    },
    DiscountedPrice:{
      type: Number,
      required: true,
    },
    ProductImage: {
      type: String,
    },
    ProductinStock: {
      type: Number,
      required: true,
    },
    Category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    
    },
    owner:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }
  },
  { timestamps: true }
);
export const product = mongoose.model("products", productschema)