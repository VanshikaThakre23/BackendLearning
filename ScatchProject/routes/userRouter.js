const express = require('express');
const router = express.Router();
const {registerUser, loginUser, logOut} = require("../controllers/authControllers.js");


router.get('/user', function (req, res) {
     res.send("hey hello from user");
});


router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/logout",logOut)

module.exports = router;