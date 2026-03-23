import { test , expect } from '@playwright/test'

test ( 'Checking' , async ({page})=> {
    await page.goto('https://demoqa.com/text-box')
    await page.locator('//input[@id="userName"]').fill('Chand')
    await page.locator('//input[@id="userEmail"]').fill('chand@gmail.com')
    await page.locator('//textarea[@id="currentAddress"]').fill('chennai')
    await page.locator('//textarea[@id="permanentAddress"]').fill('Andhra Pradesh')
    await page.locator('//button[text()="Submit"]').click()

    
})