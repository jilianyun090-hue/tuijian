import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsDir = path.join(__dirname, '../docs');

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        if (name === 'node_modules' || name === '.vuepress' || name.startsWith('.')) return;
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile() && filePath.endsWith('.md')) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update Title
    let titleMatch = content.match(/^title:\s*(.+)$/m);
    let titleChanged = false;
    if (titleMatch) {
        let title = titleMatch[1].trim();
        // Remove existing quotes to accurately measure length
        if ((title.startsWith('"') && title.endsWith('"')) || (title.startsWith("'") && title.endsWith("'"))) {
            title = title.substring(1, title.length - 1);
        }

        // Bing wants titles ~40-65 chars. If less than 35, add suffix.
        if (title.length < 35 && title.length > 0) {
            let titleAppendix = ' - 2026最新科学上网精选指南、流媒体解锁方案与实战教程深度解析';
            // ensure we don't duplicate
            if (!title.includes('2026最新')) {
                let newTitle = title + titleAppendix;
                // keep the frontmatter clean of quotes unless necessary, but safer to quote if it has colons
                content = content.replace(/^title:\s*(.+)$/m, `title: "${newTitle}"`);
                titleChanged = true;
                console.log(`Expanded short title in ${path.relative(docsDir, filePath)}`);
            }
        }
    }

    // Update Description
    let descMatch = content.match(/^description:\s*(.+)$/m);
    let descChanged = false;
    if (descMatch) {
        let desc = descMatch[1].trim();
        if ((desc.startsWith('"') && desc.endsWith('"')) || (desc.startsWith("'") && desc.endsWith("'"))) {
            desc = desc.substring(1, desc.length - 1);
        }
        
        // Bing wants descriptions ~100-160 chars. If less than 110, add suffix.
        if (desc.length < 110 && desc.length > 0) { 
            let appendix = '。本指南专门为您量身定制了最新的评测数据与全方位的实战教程，内容涵盖详细的网络平台配置指导、主流客户端的细致使用方法与诸多实用有效的防坑避雷建议，助您全面提升数字生活的安全性和冲浪体验，告别各类网络封锁烦恼。';
            
            let newDesc = desc;
            if (newDesc.endsWith('。') || newDesc.endsWith('.')) {
                 newDesc = newDesc + appendix.substring(1);
            } else {
                 newDesc = newDesc + appendix;
            }

            // prevent infinite growth if script is run multiple times
            if (!desc.includes('本指南专门为您量身定制')) {
                content = content.replace(/^description:\s*(.+)$/m, `description: "${newDesc}"`);
                descChanged = true;
                console.log(`Expanded short description in ${path.relative(docsDir, filePath)}`);
            }
        }
    }

    if (titleChanged || descChanged) {
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

walkSync(docsDir, (filePath) => {
    updateFile(filePath);
});
console.log('SEO Metadata update complete.');
