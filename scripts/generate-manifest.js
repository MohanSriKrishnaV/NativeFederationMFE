/**
 * Generates federation.manifest.json for production builds.
 * Uses env vars MFE1_URL and MFE2_URL, or falls back to localhost for local testing.
 *
 * Usage:
 *   MFE1_URL=https://mfe1.example.com MFE2_URL=https://mfe2.example.com node scripts/generate-manifest.js
 *   node scripts/generate-manifest.js   (uses localhost - for local prod build test)
 */
const fs = require('fs');
const path = require('path');

const manifestPath = path.join(
  __dirname,
  '..',
  'projects',
  'core',
  'src',
  'assets',
  'federation.manifest.json'
);

const mfe1Url = process.env.MFE1_URL || 'http://localhost:4201';
const mfe2Url = process.env.MFE2_URL || 'http://localhost:4203';

const manifest = {
  mfe1: `${mfe1Url.replace(/\/$/, '')}/remoteEntry.json`,
  mfe2: `${mfe2Url.replace(/\/$/, '')}/remoteEntry.json`,
};

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
console.log('Generated federation.manifest.json:', manifest);
