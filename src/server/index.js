const dotenv = require('dotenv')
dotenv.config()
const key =process.env.API_KEY
console.log(`Your API key is ${key}`)
const fetch = require('node-fetch')
//const api =process.env.ANALIS_API
const api ='https://api.meaningcloud.com/sentiment-2.1?'
const bodyParser = require('body-parser')
const cors = require('cors')
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const  PORT  = 8081

// Starting an instance of the app
const app = express()
// Cors for cross origin allowance
app.use(cors())
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static('dist'))

console.log(__dirname)
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})
app.post('/analyse', async(req,res)=>{
  //const {body:{url}} = req
  const {url}=req.query
 try{
    const response = await fetch(`${api}key=${key}&text=''&url=${url}&lang=en`)
    const data = await response.json()
    res.send(data)
    }catch(error){
        console.log('error :'+error)
    }
})
// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`The Server is listening on port ${PORT}!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
