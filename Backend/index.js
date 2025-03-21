import express from  "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"

dotenv.config();

const app = express();
app.use(express.json())

connectDB();

app.get('/', (req, res) => {
    res.send('App is running...')
})

app.listen(process.env.PORT, ()=> {
    console.log(`Server started at port ${process.env.PORT}`);

})