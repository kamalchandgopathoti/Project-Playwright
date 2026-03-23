import{ test, expect} from '@playwright/test'

test ('Errors are Here', async ({page})=> {
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(3000);
});