const express = require('express');
// const app = express();
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const fs = require("fs")
const citiesData = require("./data.json"); // Load cities data from JSON file
//connection code


const app = express();
const server = http.createServer(app);
const io = socketIo(server);


main().then(()=>{
    console.log("connection Done..");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/techpanthers');
};

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));

// Load data.json
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

// Function to find best location for a new store
function suggestNewStore(city) {
    let subAreas = data.cities[city];

    // Sort by highest demand & foot traffic, but fewer existing stores
    let bestArea = subAreas
        .filter(area => area.existing_stores === 0) // Only areas with no stores
        .sort((a, b) => (b.daily_orders + b.foot_traffic) - (a.daily_orders + a.foot_traffic))[0];

    return bestArea || null; // Return best area or null if all have stores
}

var city='Mumbai';

app.get("/",(req,res)=>{
    // console.log(suggestNewStore("Pune"));
    // res.render("home.ejs",{c:data.cities});
    res.redirect("/dash");
});

app.post("/index/add",(req,res)=>{
    let data = req.body;
    console.log(data,"=========");
})

app.get("/index",(req,res)=>{
    io.on("connection",(socket)=>{
        console.log("connected",citiesData);
        

        socket.emit("data1",citiesData);
    })
    // console.log(data.cities[city]);
    res.render("index.ejs",{c:data.cities[city]});
});
app.get("/dash",(req,res)=>{
    // console.log(data.cities["Pune"]);
    res.render("dash.ejs",{ cities:data.cities});
});

// app.post('/add', (req, res) => {
//     const selectedCity = req.body['store-type']; // Get selected city
//     console.log("User selected:", selectedCity);
//     res.redirect("/dash");
// });
server.listen(8080,()=>{
    console.log("app is listing...");
});







