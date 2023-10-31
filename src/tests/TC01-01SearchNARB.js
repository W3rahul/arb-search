import puppeteer from 'puppeteer';
import { TestData } from '../common/testdata.js';

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();

    page.setDefaultTimeout(3600000);

    await page.setViewport({ width: 1280, height: 642 });

    await page.goto("https://next.appreviewbot.com");

    await sleep(6000);

    const startTime = await page.evaluate(() => performance.now()); 

    await page.type(TestData.nextARB.SearchBox, TestData.keyword.AppName); 

    await page.click(TestData.nextARB.SearchBox); 

    await page.waitForSelector(TestData.nextARB.Results); 

    const endTime = await page.evaluate(() => performance.now());

    const timeTakenInSeconds = (endTime - startTime) / 1000;

    console.log(`Time taken to display elements: ${timeTakenInSeconds} seconds`);

    await browser.close();

})();
