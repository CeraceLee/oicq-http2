#!/usr/bin/env node
try {
  const { main } = require("./cli");
  main();
} catch (e) {
  console.log(e)
  console.log(`Please run "yarn install" first!`);
}
