const sqlite3 = require("sqlite3");
// trazendo somente o open do sqlite
const { open } = require("sqlite")

module.exports = () =>
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
    });