"use strict"

const express = require("express");
const router = express.Router();

//module.exports 한 것을 쓰기 위해
const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

//외부로 내보내기
module.exports = router;