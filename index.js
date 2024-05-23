// HINTS:
import express from "express";// 1. Import express and axios
import axios from "axios";


const app = express();// 2. Create an express app and set the port number.
const port = 3000;

app.use(express.static("public"));// 3. Use the public folder for static files.

app.get("/", async(req,res) => {
   try{
    const result = await axios.get("https://secrets-api.appbrewery.com/random");// 4. When the user goes to the home page it should render the index.ejs file.

    
    
    res.render("index.ejs", {
       
        secret : result.data.secret, 
        user : result.data.username,  //this is used to directly get access to the username and secret of the API
    });
   }
   catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});



app.listen(port, () => {
    console.log(`Server is running on ${port}. `);
})
