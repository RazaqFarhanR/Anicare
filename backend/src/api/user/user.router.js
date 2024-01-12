const express = require("express");
const router = express.Router();

const {
    userRegister,
    userLogin
} = require("./user.controller")

router.post("/user/register", userRegister);
router.post("/user/login", userLogin);

//export module
module.exports = router;