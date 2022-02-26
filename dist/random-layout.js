"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var qwerty_1 = require("./lib/layout/qwerty");
var random_js_1 = require("random-js");
commander_1.program.name("random-layout")
    .description("Randomize the alphanumeric section of your keyboard.")
    .version("1.0.0");
commander_1.program.option("-l --layout", "set layout", "qwerty").option("--all", "randomize all keys instead of just by row.");
var opts = commander_1.program.parse(process.argv).showHelpAfterError().opts();
var engine = random_js_1.nodeCrypto;
var board = opts.layout === "querty" ? new qwerty_1.Qwerty() : new qwerty_1.Qwerty();
console.log("Randomizing layout (" + board.name + ")");
console.log("------------");
if (opts.all) {
    console.log("Shuffling entire board... (--all)");
    // Flatten the entire layout.
    var allkeys_1 = Object.values(board.keys).reduce(function (p, c) {
        p.push.apply(p, c);
        return p;
    }, []);
    random_js_1.shuffle(engine, allkeys_1);
    // Re-assemble the board based on shuffled array.
    Object.entries(board.keys).map(function (_a, i) {
        var row = _a[0], keys = _a[1];
        return keys.forEach(function (_, j) { return (board.keys[row][j] = allkeys_1.pop()); });
    });
}
else {
    // Shuffle by row.
    Object.keys(board.keys).forEach(function (row) {
        return random_js_1.shuffle(engine, board.keys[row]);
    });
}
console.log(board.toString());
