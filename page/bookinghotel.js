export class bookinghotel {

    constructor (page){
        this.page = page
        this.fname = page.locator('//input[@id="first_name"]')
        this.lname =  page.locator('//input[@id="last_name"]')
        this.billaddress = page.locator('//textarea[@id="address"]')
        this.ccno = page.locator('//input[@id="cc_num"]')
        this.cctype = page.locator('//select[@id="cc_type"]')
        this.emonth = page.locator('//select[@id="cc_exp_month"]')
        this.eyear = page.locator('//select[@id="cc_exp_year"]')
        this.cn = page.locator('//input[@id="cc_cvv"]')
        this.book = page.locator('//input[@id="book_now"]')

    }
    async firstname (){
        await this.fname.fill("Ana")
    }
    async lastname (){
        await this.lname.fill("Frost")
    }
    async billingaddress (){
        await this.billaddress.fill("New York")
    }
    async creditcardno (){
        await this.ccno.fill("8956658998566589")
    }
    async creditcardtype (){
        await this.cctype.selectOption({value:"MAST"})
    }
    async expirydatemonth (){
        await this.emonth.selectOption({value:"12"})
    }
    async expirydateyear (){
        await this.eyear.selectOption({value:"2030"})
    }
    async cvvno (){
        await this.cn.fill("5432")
    }
    async booknow (){
        await this.book.click()
    }







}