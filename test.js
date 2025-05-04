const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({
    headless: "new", // Use the new headless mode
    // If you want to see the browser UI, set to false
    // headless: false,
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
