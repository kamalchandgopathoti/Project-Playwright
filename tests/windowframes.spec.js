import { test , expect } from '@playwright/test'

test ('windows and pages handling' , async ({browser})=> {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.in/')
    
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 17 pro 2tb silver ')
    await page.locator('//input[@type="submit"]').click();

    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
      //  page.click('//h2[contains(@aria-label,"Sponsored Ad - iPhone 17 Pro 512 GB: 15.93 cm","Cosmic Orange" )][1]')
       //   page.click('//h2[contains(@aria-label,"Sponsored Ad - iPhone 17 Pro Max 2 TB: 17.42 cm (6.9″) Display with Promotion, A19 Pro Chip, Best Battery Life in Any iPhone Ever, Pro Fusion Camera System, Center Stage Front Camera; Cosmic Orange" )][1]')
       page.click('//h2[text()="Results"]/ancestor::div[@data-cel-widget="search_result_0"]/following-sibling::div[@data-asin="B0FQF9ZLD7"]/descendant::h2[contains(@aria-label,"iPhone 17 Pro Max 2 TB: 17.42 cm (6.9″)")]')
    ])
    await newPage.waitForLoadState()
    const title = await newPage.title()
    console.log(title)
    
})