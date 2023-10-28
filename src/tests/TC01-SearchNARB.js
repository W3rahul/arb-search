import puppeteer from 'puppeteer';

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();

    page.setDefaultTimeout(3600000);

    await page.goto("https://next.appreviewbot.com");

    await sleep(6000);

    const startTime = await page.evaluate(() => performance.now()); // measure the start time

    await page.type("input[id='arbAppSearch']", 'Whatsapp'); //search the app

    await page.click("input[id='arbAppSearch']"); 

    await page.waitForSelector("div[class='flex items-center p-3 cursor-pointer bg-white hover:bg-gray-200']"); //get the results 

    const endTime = await page.evaluate(() => performance.now()); // measure the end time

    const timeTakenInSeconds = (endTime - startTime) / 1000;

    console.log(`Time taken to display elements: ${timeTakenInSeconds} seconds`);

    await browser.close();

})();
