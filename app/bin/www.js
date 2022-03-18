"use strict"

//상위 폴더
const app = require("../app");
//?? 랑 같음
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => { console.log("서버 가동") });