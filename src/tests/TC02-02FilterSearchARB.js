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

    await page.goto("https://appreviewbot.com");

    await sleep(6000);

    await page.click(TestData.ARB.ChangeFilter);

    await page.click(TestData.nextARB.SelectStore);

    await page.click(TestData.ARB.AppleStore);

    await page.click(TestData.nextARB.Country);

    const elements = await page.$$(TestData.ARB.Country); 

    for (const element of elements) {
        const text = await page.evaluate(el => el.textContent, element);
        if (text === 'India') {
            await element.click(); 
            break;
        }
    }

    const startTime = await page.evaluate(() => performance.now());

    await page.type(TestData.ARB.SearchBox, TestData.keyword.AppName);

    await page.waitForSelector(TestData.ARB.Results);

    const endTime = await page.evaluate(() => performance.now());

    const timeTakenInSeconds = (endTime - startTime) / 1000;

    console.log(`Time taken to display elements: ${timeTakenInSeconds} seconds`);

    await browser.close();

})();
