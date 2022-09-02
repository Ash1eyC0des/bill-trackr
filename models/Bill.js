const mongoose = require('mongoose')

const BillSchema = new mongoose.Schema({
  bill: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  category: {
    type: String,
    required: false
  },
  paid: {
    type: Boolean,
    required: true
  },
  paidDate: {
    type: Date,
    required: false
  }
})

module.exports = mongoose.model('Bill', BillSchema)
