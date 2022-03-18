"use strict"

//상위 폴더
const app = require("../app");
const logger = require("../src/config/logger");
//?? 랑 같음
const PORT = process.env.PORT || 3000;




app.listen(PORT, () => { logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`) });