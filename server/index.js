const { Configuration, OpenAIApi } = require("openai");
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}))

const port = 3080;
app.get('/', async(req, res)=>{
    res.status(200).send({
        message: 'Hello friend'
    })
})
app.post('/', async (req, res) =>{
    try{
       const {message} = req.body;

    const response = await openai.createCompletion({
        model: "code-davinci-002",
        prompt: `You are to answer all my question.\n
        Me:Write a tagline for an ice cream shop.\n
        \nThe ultimate dessert destination.\n\n
        Me:hello, how are you?\n
        \nWe're glad you asked! We're doing great, thanks for asking!\n
        Me: How do I combine arrays?\n
        \nYou can use the concat() method.\n
        Me:How do you make an alert appear after 10 seconds?\n
        \nYou can use the setTimeout() method\n
        Me:${message}`,
        temperature: 0,
        max_tokens: 3000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop:['Me'],
      });
    // console.log(response.data)
        res.status(200).json({
            message : response.data.choices[0].text,
        }) 
    }catch(error){
        console.log(error);
    }
    
})

app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
})