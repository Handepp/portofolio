const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const candidates = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
];

const browserPath = candidates.find(p => fs.existsSync(p));
if (!browserPath) {
  console.error('Error: Could not find Chrome or Edge installation.');
  process.exit(1);
}

const rootDir = path.resolve(__dirname, '..');
const outDir = path.join(rootDir, 'assets', 'docs');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const outFile = path.join(outDir, 'Reyhan_Devara_CV_ATS.pdf');
const htmlFile = 'file:///' + path.join(rootDir, 'cv.html').replace(/\\/g, '/');

console.log(`Generating ATS PDF using: ${browserPath}`);
console.log(`Input: ${htmlFile}`);
console.log(`Output: ${outFile}`);

try {
  const cmd = `"${browserPath}" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="${outFile}" "${htmlFile}"`;
  execSync(cmd, { stdio: 'inherit' });
  const stats = fs.statSync(outFile);
  console.log(`\nSuccess! PDF generated: ${outFile} (${(stats.size / 1024).toFixed(1)} KB)`);
} catch (err) {
  console.error('Failed to generate PDF:', err.message);
  process.exit(1);
}
