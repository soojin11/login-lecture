"use strict"

const express = require("express");
const router = express.Router();

//module.exports 한 것을 쓰기 위해
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

//외부로 내보내기
module.exports = router;