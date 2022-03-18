const fs = require("fs");
//루트 찾아주는 모듈
const appRoot = require("app-root-path");

const accessLogStream = fs.createWriteStream(
    `${appRoot}/log/access.log`, { flags: "a" }
);

module.exports = accessLogStream;