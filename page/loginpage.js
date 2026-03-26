export class loginpage {

    constructor(page){
        this.page = page 
        this.uname  = page.locator('//input[@id="username"]')
        this.pass  = page.locator('//input[@name="password"]')
        this.button  = page.locator('//input[@name="login"]')
    }
    async visitUrl(){
         await this.page.goto('https://adactinhotelapp.com/')
    }
    async enterusername(){
         await this.uname.fill("Trontheuser")
    }
    async enterpassword(password){
         await this.pass.fill("Qwerty@1")
    }
    async clickbutton(){
         await this.button.click()
    }
    

}