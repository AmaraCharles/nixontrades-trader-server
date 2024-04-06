const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
 
   
  
  name: {
    type: String,
    required: false,
  },
  frequency: {
    type: String,
    required: false,
  },
  risk: {
    type: String,
    required: false,
  },
  id: {
    type: String,
    required: false,
  },
 
  
  drawdown: {
    type: String,
    required: false,
  },
  strategy: {
    type: String,
    required: false,
  },
  
  profit: {
    type: String,
    required: false,
  },

  serviceType: {
    type: String,
    required: false,
  },
 
  paymentMode: {
    type: String,
    required: false,
  },
 
  receiverName: {
    type: String,
    required: false,
  },
  receiverEmail: {
    type: String,
    required: false,
  },
  receiverAddress: {
    type: String,
    required: false,
  },
  deliveryDay: {
    type: String,
    required: false,
  },

  senderName: {
    type: String,
    required: false,
  },
  senderEmail: {
    type: String,
    required: false,
  },
  senderAddress: {
    type: String,
    required: false,
  },
 
 
    location: {
    type: String,
    required: false,
  },
  itemType: {
    type: String,
    required: false,
     },
  weight: {
    type: String,
  },
  mot: {
    type: String,
  },
  consignmentDetails: {
    type: String,
  },
  
  history: {
    type: Array,
  },
 
  fmt: {
    type: String,
    required: false,
  },
  
 
  
});

module.exports = mongoose.model("users", UsersSchema);
