import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { parseStringPromise } from 'xml2js';

const SITE_URL = 'https://clash-jichang.com';
const INDEXNOW_KEY = '8ede82819b424e96bd0aa83679469cae'; 
const SITEMAP_PATH = path.resolve('docs/.vuepress/dist/sitemap.xml');

async function submitIndexNow() {
  try {
    if (!fs.existsSync(SITEMAP_PATH)) {
      console.error('Sitemap not found at:', SITEMAP_PATH);
      return;
    }

    const sitemapXml = fs.readFileSync(SITEMAP_PATH, 'utf-8');
    const sitemap = await parseStringPromise(sitemapXml);
    const urls = sitemap.urlset.url.map(u => u.loc[0]);

    console.log(`Found ${urls.length} URLs in sitemap. Submitting to IndexNow...`);

    const response = await axios.post('https://www.bing.com/indexnow', {
      host: 'clash-jichang.com',
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls
    });

    if (response.status === 200 || response.status === 202) {
      console.log('✅ IndexNow submission successful!');
    } else {
      console.error('❌ IndexNow submission failed:', response.status, response.data);
    }
  } catch (error) {
    console.error('❌ Error submitting to IndexNow:', error.message);
  }
}

// Create the key file in the public directory if it doesn't exist
const publicPath = path.resolve('docs/.vuepress/public');
const keyFilePath = path.join(publicPath, `${INDEXNOW_KEY}.txt`);
if (!fs.existsSync(keyFilePath)) {
  fs.writeFileSync(keyFilePath, INDEXNOW_KEY);
  console.log(`Created IndexNow key file: ${keyFilePath}`);
}

submitIndexNow();
