var express = require("express");
var { compareHashedPassword } = require("../../utils");
const UsersDatabase = require("../../models/User");
var router = express.Router();

router.post("/login", async function (request, response) {
  const { id} = request.body;
  /**
   * step1: check if a user exists with that email
   * step2: check if the password to the email is correct
   * step3: if it is correct, return some data
   */

  // step1
  const user = await UsersDatabase.findOne({ id: id });

  if (user) {
    // step2
    // const passwordIsCorrect = compareHashedPassword(user.receiverName, receiverName);

      response.status(200).json({ code: "Ok", data: user });
    }
     else if(!user) {
      response.status(502).json({ code: "no user found" });
    }
   else {
    response.status(404).json({ code: "invalid credentials" });
  }
})
;

module.exports = router;
