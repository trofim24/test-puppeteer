const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser with no-sandbox flag
  const browser = await puppeteer.launch({
    headless: true,
  });
  
  // Create a new page
  const page = await browser.newPage();
  
  // Navigate to a URL
  await page.goto('https://example.com');
  
  // Take a screenshot
  await page.screenshot({ path: 'example.png' });
  
  // Get page title
  const title = await page.title();
  console.log('Page title:', title);
  
  // Close browser
  await browser.close();
})();
