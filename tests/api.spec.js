import {test, request} from '@playwright/test'
import postdata from '../data/post.json'
import token from '../data/token.json'
import putdata from '../data/put.json'

var b_id = ""
var bariertoken = ""
test.describe.serial('api',async()=> { 

//  test('Get Bookig Id', async ({request})=>{ 
//    const response =  await request.get('https://restful-booker.herokuapp.com/booking')
//    const body = await response.json()
//    console.log(body)
    
//    })

//  test ('Get Booking Details', async ({ request })=>{
//     const response  = await request.get('https://restful-booker.herokuapp.com/booking/2561')
//     const body = await response.json()
//     console.log(body)
//   })

  test('Create Booking API',async ({ request })=> {
    const response = await request.post('https://restful-booker.herokuapp.com/booking', { data: postdata })
    const body = await response.json()
    b_id = await body.bookingid
    console.log(body)
    console.log(b_id)
  })

  test ('Create a Token' , async ({request}) => {
    const response  = await request.post('https://restful-booker.herokuapp.com/auth' , { data: token})
    const body  = await response.json()
    bariertoken = await body.token
    console.log(body)
    console.log(bariertoken)
  })
  
  test ('Update Booking Details', async({request}) =>{
    const response = await request.put(`https://restful-booker.herokuapp.com/booking/${b_id}`, { 
    headers: {
        "Content-Type": "application/json",
        Cookie: `token=${bariertoken}`
    },
    data: putdata
    })
    const  body = await response.json()
    console.log(body)
  })


})