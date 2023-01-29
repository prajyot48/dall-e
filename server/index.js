import express from 'express'
import * as dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './mongodb/connect.js'
const uri = "mongodb+srv://Prajyot:Qwerty%40123@cluster0.lqaymvh.mongodb.net/?retryWrites=true&w=majority";

import dalleRoutes from './routes/dalleRoutes.js'
import postRoutes from './routes/postRoutes.js'
 

dotenv.config();

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))


app.use('/api/v1/post',postRoutes);
// async (req,res)=>{
//     res.send('Hello from DALL-E')
// })
app.use('/api/v1/dalle',dalleRoutes)
// async (req,res)=>{
//     res.send('Hello from DALL-E')
// })

app.get('/',async (req,res)=>{
    res.send('Hello from DALL-E')
})

const startServer = async() => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
    } catch(error){
        console.log(error);
    }

}

startServer();