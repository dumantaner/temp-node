// npm global command, comes with node

// npm --version

// local dependency
// npm i <packageName>

// global dependency use it in any project
// npm install -g <packageName>

// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)'
// manual approach (create package.json in the root, greate properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const item=[1,[2,[3,[4]]]];
const newItems=_.flattenDeep(item)
console.log(newItems);