const path = require("path");
const fs = require("fs");
let solc = require("solc");

console.log(__dirname);

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const inboxSource = fs.readFileSync(inboxPath, "utf-8");

module.exports = solc.compile(inboxSource, 1).contracts[":Inbox"];
