import {test , expect} from '@playwright/test'
test ('Web Table Handling ' , async({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/')
        const rowdata0 = await page.locator('//table[@id="table02"]//tbody//tr[1]//td').allTextContents();console.log(rowdata0)
       try{
        await expect(rowdata0).toEqual([
        'Tiger Nixon','System Architect','Edinburgh','61','2011/04/25','$320,800']);
             console.log("YES Tiger Nixon  Records found")
         }catch (e) { console.log("NO Record was FOUND")}

        const rowdata = await page.locator('//table[@id="table02"]//tbody//tr[10]//td').allTextContents();console.log(rowdata)

       const rowdata2 = await page.locator('//table[@id="table02"]//tbody//tr').allTextContents()
        if(rowdata2.some(row => row.includes('Sonya Frost'))) { 
        console.log("YES  Sonya Frost record Exists")
       } else { console.log("NO Record was FOUND")}

    const rowdata1 = await page.locator('//table[@id="table02"]//tbody//tr',{hasText: 'Quinn Flynn'})
    const celedata1 = await rowdata1.locator('td').allTextContents(); console.log(celedata1);
        
    console.log("All the Names in the WEB Table are:-")
      const columndata = await page.locator('//table[@id="table02"]//tbody//tr//td[1]').allTextContents();console.log(columndata)
    try{
      expect(columndata).toContain('Fiona Green');console.log("Recorded files are there")
    }catch (e){console.log("Miss Match (or) NO Files Found")}

    const columndata1 =  await page.locator('//table[@id="table02"]//tbody//tr[14]//td[6]').allTextContents();console.log(columndata1)
    try{
    expect(columndata1).toEqual(['$313,500']);
    console.log("Deep equality Verified Match Successful")}
    catch(e){console.log("Deep equality Match Failed")}

    const specificdata = await page.locator('//table[@id="table02"]//tbody//tr',{hasText: '2011/12/12'}) 
    const data =  await specificdata.locator('td').allTextContents();console.log(data)
})


    
    
