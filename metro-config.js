/* eslint-env node */
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// --- burnt ---
config.resolver.sourceExts.push("mjs");
config.resolver.sourceExts.push("cjs");
// --- end burnt ---

module.exports = config;
