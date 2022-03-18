// const winston = require("winston");
const { createLogger, transports, format } = require("winston");
const { combine, timestamp, simple, colorize, printf, label } = format;
const printFormat = printf(({ timestamp, level, message, label }) => {
    return `${timestamp} [${label}] ${level} ${message}`
});

const printLogFormat = {
    file: combine(
        label({
            label: "백엔드 맛보기"
        }),
        // colorize(),
        timestamp({
            format: "YYYY-MM-DD HH:MM:ss"
        }),
        printFormat
    ),
    console: combine(
        colorize(),
        simple(),
    )
};



const opts = {
    file: new transports.File({
        filename: "winston.log",
        dirname: "./log",
        level: "info",
        format: printLogFormat.file,
    }),
    console: new transports.Console({
        //에러 밑에 있는 것들은 출력되지 않음(npm winston에서 확인)
        level: "info",
        format: printLogFormat.console,
    })
}
const logger = createLogger({
    transports: [
        opts.file
    ],
});

if (process.env.NODE_ENV !== "production")
    logger.add(opts.console);


logger.stream = {
    write: (message) => logger.info(message),
}

module.exports = logger;