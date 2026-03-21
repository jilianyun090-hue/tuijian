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
  
  // Only process files with frontmatter title
  if (!content.match(/^---[\s\S]*?^title:/m)) return;
  // Skip home page
  if (content.match(/^home:\s*true/m)) return;
  
  const orig = content;
  
  // Remove the first markdown H1 heading (# ...) that appears after the frontmatter
  // Pattern: after closing ---, find the first # heading and remove it + blank line after
  content = content.replace(
    /(^---\n[\s\S]*?\n---\n\n)(# .+\n\n?)/m,
    '$1'
  );
  
  if (content !== orig) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Removed duplicate H1 from: ${path.relative(docsDir, filePath)}`);
    totalFixed++;
  }
});

console.log(`\nTotal files fixed: ${totalFixed}`);
