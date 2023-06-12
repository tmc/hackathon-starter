import { chromium } from 'k6/experimental/browser';
import { check } from 'k6';

export let options = {
    vus: 1,
    iterations: 1,
};

export default async function () {
    const browser = chromium.launch({ headless: false });
    const page = browser.newPage();
    page.goto('http://localhost:3000');
    await page.waitForNavigation();

    for (let i = 0; i < 50; i++) { // adjust as needed
        // pad the vu and the iteration number with zeros:
        const vuIndex = String(__VU).padStart(3, '0');
        const ssIndex = String(i).padStart(3, '0');
        page.screenshot({ path: `.${vuIndex}-${ssIndex}.png` });
        await page.waitForTimeout(50);
    }

    browser.close();
}

