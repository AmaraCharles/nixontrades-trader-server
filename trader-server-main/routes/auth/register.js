var express = require("express");
var { hashPassword, sendWelcomeEmail,resendWelcomeEmail } = require("../../utils");
const UsersDatabase = require("../../models/User");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");

router.post("/register", async (req, res) => {
  const {photo,id, drawdown,strategy,risk,frequency, name,profit} = req.body;
  try {
    // Check if any user has that id
    const user = await UsersDatabase.findOne({ id: id });
  
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Id is already in use",
      });
    }
  
    await UsersDatabase.create({
      id,
      profit,
      photo,
      drawdown,
      strategy,
      risk,
      frequency,
      name,
      senderAddress: 'none',
      serviceType: 'none',
      paymentMode: 'none',
      receiverName: 'none',
      receiverEmail: 'none',
      receiverAddress: 'none',
      deliveryDay: 'none',
      senderName: 'none',
      senderEmail: 'none',
      itemType: 'none',
      mot: 'none',
      consignmentDetails: 'none',
      history: [],
      location: 'none',
    })
    .then((data) => {
      return res.json({ code: "Ok", data: "Trader created" });
    })
    .then(() => {
      var token = uuidv4();
      // Do something with the token
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
  
})


module.exports = router;
