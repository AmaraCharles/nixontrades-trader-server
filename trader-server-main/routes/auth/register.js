var express = require("express");
var { hashPassword, sendWelcomeEmail,resendWelcomeEmail } = require("../../utils");
const UsersDatabase = require("../../models/User");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");

router.post("/register", async (req, res) => {
  const {id, drawdown,strategy,risk,frequency, name,profit,photo} = req.body;

     

  
  await UsersDatabase.create({
    
    id, 
    profit,
    drawdown,
    strategy,
    risk,
    frequency,
    name, 
    photo:photo,
    senderAddress:'none',
    serviceType:'none',
    paymentMode:'none',
    receiverName:'none',
    receiverEmail:'none',
    receiverAddress:'none',
    deliveryDay:'none',
    senderName:'none',
    senderEmail:'none',
    itemType:'none',
      mot:'none',
   consignmentDetails:'none',
   history:[],
   location:'none',
  })
    .then((data) => {
      return res.json({ code: "Ok", data: "package created" });
    })
    .then(() => {
      var token = uuidv4();
      
    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    });
});




module.exports = router;
