export class selecthotel {

    constructor(page){
        this.page = page
        this.selectinghotel = page.locator('//input[@id="radiobutton_0"]')
        this.button = page.locator('//input[@id="continue"]')
    }
    async finalhotel(){
        await this.selectinghotel.click()
    }
    async clickbutton(){
         await this.button.click()
    }


 }