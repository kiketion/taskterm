#!/usr/bin/env node

require('./commands');
const { connectDB } = require('./db');

async function main() {
  await connectDB();
}

main();
