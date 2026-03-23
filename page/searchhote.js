 export class searchhotel {
    constructor (page){
        this.page = page
        this.location = page.locator('//select[@id="location"]')
        this.hotel = page.locator('//select[@id="hotels"]')
        this.roomtype = page.locator('//select[@id="room_type"]')
        this.noofrooms = page.locator('//select[@id="room_nos"]')

        this.adultsperroom = page.locator('//select[@id="adult_room"]')
        this.childrenperroom = page.locator('//select[@id="child_room"]')
        this.button = page.locator('//input[@id="Submit"]')
        
    
    }

    async enterlocation(){
        await this.location.selectOption({ label: "London" })
    }
    async enterhotel(){
        await this.hotel.selectOption({value:"Hotel Sunshine"})
    }
    async enterroomtype(){
        await this.roomtype.selectOption({index: 4})
    }
    async enternoofrroms(){
        await this.noofrooms.selectOption({ label: "2 - Two" })
    }
    async enteradultsperroom(){
        await this.adultsperroom.selectOption({value:"2"})
    }
    async enterchilrenperroom(){
        await this.childrenperroom.selectOption({label: "2 - Two"})
    }
    async clickbutton(){
         await this.button.click()
    }


}    
    