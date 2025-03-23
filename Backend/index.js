import express from  "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import trashRoutes from "./routes/trashRoutes.js"

dotenv.config();

const app = express();
app.use(express.json())

connectDB();

app.get('/', (req, res) => {
    res.send('App is running...')
})

app.use('/api/users', userRoutes);
app.use('/api/trash', trashRoutes);

app.listen(process.env.PORT, ()=> {
    console.log(`Server started at port ${process.env.PORT}`);

})