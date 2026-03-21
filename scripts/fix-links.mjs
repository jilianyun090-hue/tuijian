import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.join(__dirname, '../docs');

let totalFixed = 0;

function walkSync(dir, callback) {
  fs.readdirSync(dir).forEach(name => {
    const filePath = path.join(dir, name);
    const stat = fs.statSync(filePath);
    if (stat.isFile() && filePath.endsWith('.md')) {
      callback(filePath);
    } else if (stat.isDirectory() && name !== '.vuepress' && name !== 'node_modules') {
      walkSync(filePath, callback);
    }
  });
}

walkSync(docsDir, (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  const orig = content;

  // Fix ../index.md -> /
  content = content.replaceAll('../index.md', '/');
  // Fix ./index.md -> ./  (in same dir links)
  content = content.replaceAll('./index.md', './');
  // Fix relative .md links that should be absolute HTML paths
  // e.g. /proxy/line-type-guide.md -> /proxy/line-type-guide.html
  content = content.replace(/\]\(\/([^)]+)\.md\)/g, '](/$1.html)');
  // Fix vpn-guide.md -> vpn-guide.html in links (relative same dir)
  // e.g. (./vpn-guide.md) -> (/proxy/vpn-guide.html)  -- leave relative ones as is, VuePress handles them

  if (content !== orig) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${path.relative(docsDir, filePath)}`);
    totalFixed++;
  }
});

console.log(`\nTotal files fixed: ${totalFixed}`);
