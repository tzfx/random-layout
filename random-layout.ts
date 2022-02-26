import { program as main } from "commander";
import { Qwerty } from "./lib/layout/qwerty";
import { nodeCrypto, shuffle } from "random-js";
import { Dvorak } from "./lib/layout/dvorak";

main.name("random-layout")
    .description("Randomize the alphanumeric section of your keyboard.")
    .version("1.0.0");

main.option("-l --layout", "set layout", "qwerty").option(
    "--all",
    "randomize all keys instead of just by row."
);

const opts = main.parse(process.argv).showHelpAfterError().opts();

const engine = nodeCrypto;

const board =
    opts.layout === "querty"
        ? new Qwerty()
        : opts.layout === "dvorak"
        ? new Dvorak()
        : new Qwerty();

console.log(`Randomizing layout (${board.name})`);
console.log(`------------`);

if (opts.all) {
    console.log("Shuffling entire board... (--all)");
    // Flatten the entire layout.
    const allkeys = Object.values(board.keys).reduce((p, c) => {
        p.push(...c);
        return p;
    }, []);
    shuffle<string>(engine, allkeys);
    // Re-assemble the board based on shuffled array.
    Object.entries(board.keys).map(([row, keys], i) =>
        keys.forEach((_, j) => ((board.keys as any)[row][j] = allkeys.pop()))
    );
} else {
    // Shuffle by row.
    Object.keys(board.keys).forEach((row) =>
        shuffle<string>(engine, (board.keys as any)[row])
    );
}
console.log(board.toString());
