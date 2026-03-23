import { test , expect } from '@playwright/test'

test ('Testing Phase' , async ({page})=> {

    await page.goto('https://www.amazon.in/')
    const priya = page.locator('//input[@id="twotabsearchtextbox"]')
    await priya.pressSequentially('pickles', {delay:1000})
    await page.locator("#sac-autocomplete-results-container").getByLabel('priya pickles').click()

    await page.waitForTimeout(10000)
    

})