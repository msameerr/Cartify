
import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import RegisterModel from "./models/register.js";


const app = express();
const port = 3001;

app.use(cors());
app.use(json());

const connectionString = `mongodb+srv://arshadsameer820:karachi123@cartify.9ukrsiv.mongodb.net/?retryWrites=true&w=majority`;

mongoose
	.connect(connectionString, { dbName: "cartifydb" })
	.then(() => console.log("MongoDB Connected..."));

    app.post("/register-user", (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
    
    
        const newRegister = new RegisterModel({
            name,
            email,
            password,
    
        });
    
        newRegister.save().then(() => res.json("Register Succesfully!"));
    });

    app.post('/login', async (req, res) => {
        const { email, password } = req.body;
      
        try {
          // Check if the user with the given email and password exists in the database
          const user = await RegisterModel.findOne({ email, password });
      
          if (user) {
            // User found, send success response
            res.status(200).json({ success: true, message: 'Login successful' });
          } else {
            // User not found, send failure response
            res.status(401).json({ success: false, message: 'Invalid email or password' });
          }
        } catch (error) {
          // Handle errors
          console.error('Error during login:', error);
          res.status(500).json({ success: false, message: 'Internal server error' });
        }
      });

app.get("/", (req, res) => res.send("Welocome to Cartify!"));
app.listen(port, () => console.log(`Yee! app listening on port ${port}!`));


