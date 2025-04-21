import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
const app = express();
const PORT = process.env.PORT;

app.use(express.json());//for req.bodies to exist

app.get('/', (req, res) =>{res.send('hello from server');})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))