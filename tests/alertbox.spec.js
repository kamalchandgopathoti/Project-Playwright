import {test} from '@playwright/test'
test ('Alert Handling', async ({page}) =>{
   await page.goto('https://automationtesting.in/')
   await page.locator('#menu-item-254 > a').click()
   await page.hover('text=SwitchTo');
   await page.locator('text=Alerts').click();
        await page.once('dialog',async(dialog) =>{
            await console.log("I came to first Alert box :{[(Simple Alert)]} ::-->> ",dialog.message()); await dialog.accept();
        })
        await page.locator('//button[@class="btn btn-danger"]').click()
        await page.locator('(//a[@class="analystic"])[2]').click()
        await page.once('dialog' , async (dialog) => {
            await console.log("I came to the Second Alert box  :{[(Confirm Alert)]} ::-->> ",dialog.message()) ;   await dialog.dismiss();
        })
        await page.locator('//button[@class="btn btn-primary"]').click()
         await page.locator('(//a[@class="analystic"])[3]').click()
        await page.once('dialog' , async (dialog) => {
            await console.log("I came to the Third Alert box  :{[(Prompt Alert)]} ::-->> ",dialog.message());await dialog.accept('Vikky');            
        })
        await page.locator('//button[@class="btn btn-info"]').click(); 
       // await page.waitForTimeout(30000)
})
