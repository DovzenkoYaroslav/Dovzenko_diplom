const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  city: { type: String, required: true },
  club: { type: String, required: true },
  cardType: { type: String, required: true }, // new, child, extension, renewal
  issueDate: { type: Date }, // только для extension/renewal
  status: { 
    type: String, 
    enum: ['new', 'processing', 'approved', 'rejected'], 
    default: 'new' 
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Application', applicationSchema);