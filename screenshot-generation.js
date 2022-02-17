const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/prescription.html'); // basically a link to the template
    page.setViewport({ width: 1080, height: 1474, deviceScaleFactor: 1 })
    await page.screenshot({ 
        path: 'screenshot.png',
        fullPage: true
    })
    await browser.close();
})();
