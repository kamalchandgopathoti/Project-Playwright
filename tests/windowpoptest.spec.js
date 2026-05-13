import {test, expect} from '@playwright/test'

test ("Windows Handling", async({browser}) =>{
    
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.in/')

    await page.locator('//input[@id="twotabsearchtextbox"]').fill("iphone 17 pro 2tb silver")
    await page.locator('//input[@id="nav-search-submit-button"]').click();

    const [newpage] =  await Promise.all([
        
        context.waitForEvent('page'),
        page.click('//h2[text()="Results"]/ancestor::div[@data-cel-widget="search_result_0"]/following-sibling::div[@data-asin="B0FQF9ZLD7"]/descendant::h2[contains(@aria-label,"iPhone 17 Pro Max 2 TB: 17.42 cm (6.9″)")]'),
        // //h2[text()="Results"]/ancestor::div[@data-cel-widget="search_result_0"]/following-sibling::div[@data-asin="B0FQF9ZLD7"]/descendant::h2[contains(@aria-label,"iPhone 17 Pro Max 2 TB: 17.42 cm (6.9″)")][contains(@aria-label,"Silver")]

 
    ])
    await newpage.locator('//i[@class="a-icon a-accordion-radio a-icon-radio-inactive"]').click()
     await newpage.waitForTimeout(3000)
     await newpage.locator('//i[@class="a-icon a-accordion-radio a-icon-radio-inactive"]').click()
     await newpage.waitForTimeout(3000)
     await newpage.locator('(//input[@id="add-to-cart-button"])[2]')
    // await newpage.locator('(//input[@id="add-to-cart-button"])[2]').scrollIntoViewIfNeeded()
     await newpage.locator('//input[@id="mbb-offeringID-1"]').check()
    await newpage.locator('(//input[@id="add-to-cart-button"])[2]').click();
    await newpage.waitForTimeout(3000)

}
)