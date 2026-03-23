import { test } from '@playwright/test'
import { loginpage } from '../page/loginpage'
import { searchhotel } from '../page/searchhote'
import { selecthotel } from '../page/selecthotel'
import { bookinghotel } from '../page/bookinghotel'


test ( 'Implementing POM', async ({ page}) =>{

    const loginpage1 = new loginpage(page)
    await loginpage1.visitUrl()
    await loginpage1.enterusername()
    await loginpage1.enterpassword()
   

    const [newpage] = await Promise.all([
        loginpage1.clickbutton()
    ])
    const searchhotel1 = new searchhotel(page)
    await searchhotel1.enterlocation()
    await searchhotel1.enterhotel()
    await searchhotel1.enterroomtype()
    await searchhotel1.enternoofrroms()
    await searchhotel1.enteradultsperroom()
    await searchhotel1.enterchilrenperroom()

    const [newpage1] = await Promise.all([
        searchhotel1.clickbutton()
    ])
    const selecthotel1 = new selecthotel(page)
    await selecthotel1.finalhotel()

    const [newpage2] = await Promise.all([
        selecthotel1.clickbutton()
    ])
    const bookinghotel1 = new bookinghotel(page)
    await bookinghotel1.firstname()
    await bookinghotel1.lastname()
    await bookinghotel1.billingaddress()
    await bookinghotel1.creditcardno()
    await bookinghotel1.creditcardtype()
    await bookinghotel1.expirydatemonth()
    await bookinghotel1.expirydateyear()
    // await bookinghotel1.cvvno()

    await page.waitForTimeout(5000)
    await bookinghotel1.booknow()

    await page.waitForTimeout(15000)

       
})