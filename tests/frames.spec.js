import {test , except} from '@playwright/test'

test ("frames handling", async ({page}) => {
await page.goto('https://demo.automationtesting.in/Frames.html')
const singleframe = await page.frameLocator('//iframe[@id="singleframe"]')
await singleframe.locator('//input[@type="text"]').fill('something')
await page.locator('(//a[@class="analystic"])[2]').click()
const outerframe = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
const innerframe = await outerframe.frameLocator('//iframe[@src="SingleFrame.html"]')
await innerframe.locator('//input[@type="text"]').fill('nothing')


})