const { Schema, model } = require('mongoose');

const productSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'product name must be provide'],
    },
    price: {
      type: Number,
      required: [true, 'product price must be provided'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 4.5,
    },
    company: {
      type: String,
      enum: {
        values: ['ikea', 'liddy', 'caressa', 'marcos'],
        message: '{VALUE} is not supported',
      },
    },
  },
  { timestamps: true }
);

const Product = model('Product', productSchema);

module.exports = Product;
