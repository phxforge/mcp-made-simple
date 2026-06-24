const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

async function run() {
    const keyPath = path.join(__dirname, 'service_account.json');
    if (!fs.existsSync(keyPath)) {
        console.error("Error: service_account.json not found in the root directory.");
        console.error("Please place your Google Cloud Service Account credentials key file (service_account.json) in the root directory of this project first.");
        process.exit(1);
    }

    const key = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
    const jwtClient = new google.auth.JWT(
        key.client_email,
        null,
        key.private_key,
        ['https://www.googleapis.com/auth/indexing'],
        null
    );

    console.log("Authorizing credentials with Google...");
    await jwtClient.authorize();
    console.log("Authorized successfully with Google Indexing API!");

    // Extract slugs dynamically from lib/articles.ts
    const articlesPath = path.join(__dirname, 'lib', 'articles.ts');
    let slugs = [];
    if (fs.existsSync(articlesPath)) {
        const articlesContent = fs.readFileSync(articlesPath, 'utf8');
        const slugRegex = /slug:\s*"([^"]+)"/g;
        let match;
        while ((match = slugRegex.exec(articlesContent)) !== null) {
            slugs.push(match[1]);
        }
    } else {
        console.warn("Warning: lib/articles.ts not found. Defaulting to empty articles list.");
    }

    const SITE_URL = 'https://www.mcpmadesimple.com';
    const urlsToCrawl = [
        // Static Pages
        SITE_URL,
        `${SITE_URL}/start-here`,
        `${SITE_URL}/mastery`,
        `${SITE_URL}/about`,
        `${SITE_URL}/guides`,
        `${SITE_URL}/articles`,
        `${SITE_URL}/tools`,
        `${SITE_URL}/use-cases`,
        `${SITE_URL}/contact`,
        `${SITE_URL}/privacy`,
        `${SITE_URL}/terms`,
        
        // Guides
        ...['is-mcp-safe', 'setup', 'what-is-mcp', 'workflows'].map(slug => `${SITE_URL}/guides/${slug}`),
        
        // Tools
        ...['asana', 'dropbox', 'github', 'gmail', 'google-calendar', 'google-drive', 'notion', 'slack', 'trello'].map(slug => `${SITE_URL}/tools/${slug}`),
        
        // Use Cases
        ...['developers', 'solopreneurs', 'teams'].map(slug => `${SITE_URL}/use-cases/${slug}`),
        
        // Articles
        ...slugs.map(slug => `${SITE_URL}/articles/${slug}`)
    ];

    console.log(`Found ${urlsToCrawl.length} URLs to submit for indexing...`);

    for (const url of urlsToCrawl) {
        try {
            await google.indexing('v3').urlNotifications.publish({
                auth: jwtClient,
                requestBody: {
                    url: url,
                    type: 'URL_UPDATED'
                }
            });
            console.log(`Successfully queued: ${url}`);
        } catch (e) {
            console.error(`Error submitting ${url}:`, e.message);
        }
    }
    console.log("Bulk indexing sprint request completed!");
}

run().catch(console.error);
