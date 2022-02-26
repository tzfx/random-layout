# random-layout

This is a node-based console application that prints out a shuffled alpha area for a keyboard layout.

By default, this will shuffle internal to layout rows, to keep a common profile. This behaviour can be overriden with the `--all` option.

## To run

By using npm, we can take advantage of the ts-node library, allowing the TypeScript code to run with a transparent compilation step to js.

```js
npm ci
npm run start -- --help
> random-layout@1.0.0 start
> ts-node ./random-layout.ts "--help"

Usage: random-layout [options]

Randomize the alphanumeric section of your keyboard.

Options:
  -V, --version  output the version number
  -l --layout    set layout
  --all          randomize all keys instead of just by row.
  -h, --help     display help for command
```

## To build for distribution

`tsc`
