import fs from 'fs';
import path from 'path';

const sitemapPath = path.resolve('docs/.vuepress/dist/sitemap.xml');

try {
  if (fs.existsSync(sitemapPath)) {
    let content = fs.readFileSync(sitemapPath, 'utf8');
    
    if (content.includes('.html</loc>')) {
      // 批量将 .html</loc> 替换为 </loc>，以支持干净链接 (Clean URLs)
      content = content.replace(/\.html<\/loc>/g, '</loc>');
      
      fs.writeFileSync(sitemapPath, content, 'utf8');
      console.log(`✅ fix-sitemap: 成功移除了 sitemap.xml 中所有的 .html 后缀`);
    } else {
      console.log('✅ fix-sitemap: sitemap.xml 中未发现 .html 后缀');
    }
  } else {
    console.warn(`⚠️ fix-sitemap: 未能在 ${sitemapPath} 找到 sitemap.xml，已跳过。`);
  }
} catch (e) {
  console.error(`❌ fix-sitemap 遇到错误:`, e);
}
