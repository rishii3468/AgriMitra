import express from "express"
import dotenv from "dotenv"
import cors from "cors" 
import path from "path"


import notesRoutes from "./routes/notesRoutes.js"
import cropRoutes from "./routes/cropRoutes.js"
import equipmentRoutes from "./routes/equipmentsRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import { connectDB } from "./config/db.js"
import corsOptions from "./config/corsOptions.js"
import credentials from "./middleware/credentials.js"


dotenv.config();


const app = express()
const PORT = process.env.PORT || 5001
const __dirname = path.resolve()


//middleware

app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use(credentials);

//CORS
app.use(cors(corsOptions));



app.use(express.json()) 

app.use("/api/crops",cropRoutes)

app.use("/api/notes",notesRoutes)

app.use("/api/equipments",equipmentRoutes)

app.use("/api/users",userRoutes)



if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}


    
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on port ",PORT);
    });

});

