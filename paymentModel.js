const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  country: String,
  card: String,
  expiry: String,
  cvv: String,
  product: String,
  price: String,
  status: {
    type: String,
    default: 'Confirmed'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Payment', paymentSchema);
