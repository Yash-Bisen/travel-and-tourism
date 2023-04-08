const express=require('express');
const path =require("path");
const app=express();
const hbs = require("hbs");
const bcrypt = require("bcryptjs");


require("./db/conn");
const Cabbooking = require ("./models/Cabbookings")
const Register = require("./models/registers");
const busbooking = require("./models/busbooking");
const trainbooking = require("./models/trainbooking");
const flightbooking = require("./models/flightbooking");
const bookingform =require("./models/Booking_Form");
const packagebooking =require("./models/package_booking");
const { json } = require("express");


const port=process.env.PORT || 3000;

const static_path = path.join(__dirname, "/public");
const template_path = path.join(__dirname, "/templates/views");
const partials_path = path.join(__dirname, "/templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);



app.get("/",(req,res)=>{
    res.render("register")
});

app.get("/loginPage",(req,res)=>{
    res.render("loginPage")
});


app.get("/register",(req,res)=>{
    res.render("register")
});


app.get("/Destination_path",(req,res)=>{
    res.render("Destination_path")
});
app.get("/Buses",(req,res)=>{
    res.render("Buses")
});
app.get("/Trains",(req,res)=>{
    res.render("Trains")
});
app.get("/Cabes",(req,res)=>{
    res.render("Cabes")
});
app.get("/Select_cabs",(req,res)=>{
    res.render("Select_cabs")
});
app.get("/Select_buses",(req,res)=>{
    res.render("Select_buses")
});
app.get("/Select_trains",(req,res)=>{
    res.render("Select_trains")
});
app.get("/Select_flights",(req,res)=>{
    res.render("Select_flights")
});

app.get("/Booking_Form",(req,res)=>{
    res.render("Booking_Form")
});
app.get("/packages",(req,res)=>{
    res.render("packages")
});
app.get("/package_booking",(req,res)=>{
    res.render("package_booking")
});

app.get("/booking_successfull",(req,res)=>{
    res.render("booking_successfull")
});

// register check

app.post("/register",async(req,res)=>{
   try{
        const password = req.body.password;
        const cpassword = req.body.cpassword;

        if(password === cpassword){

            const registerEmployee = new Register({
                name:  req.body.name,
                email:req.body.email,
                password:password,
                cpassword:cpassword
            })

            //password hashing




            //data saving

           const registered = await registerEmployee.save();
            res.status(201).render("loginPage");
        }else{
            res.send("password not matching");
        }

        
   }catch(error){
    res.status(400).send(error);
   }
});


// Login check

app.post("/loginPage", async(req,res)=>{
    try{
        const email =req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email:email});
       const isMatch = await bcrypt.compare(password,useremail.password);
        if(isMatch){
            res.status(201).render("Destination_path");
        }else{
            res.send("password  not matching");
        }


    }catch(error){
        res.status(400).send("Invalid email")
    }
});

// Cabes booking


app.post("/Cabes", async(req,res)=>{
    try{

       const clientData = new Cabbooking({
        way: req.body.way,
        from: req.body.from,
        to : req.body.to,
        Departuredate:req.body.Departuredate,
        pickuptime: req.body.pickuptime,
        returndate: req.body.returndate,
        returntime :req.body.returntime,
        Driverstatus:req.body.Driverstatus

       })

       const booked = await clientData.save();
        res.status(201).render("Select_cabs")
    }catch(error){
     res.status(400).send(error);
    }
 });


//  Buses


app.post("/Buses", async(req,res)=>{
    try{

       const clientData = new busbooking({
        from: req.body.from,
        to : req.body.to,
        departuredate:req.body.departuredate,
        nooftraveller: req.body.nooftraveller

       })

       const booked = await clientData.save();
        res.status(201).render("Select_buses")
    }catch(error){
     res.status(400).send(error);
    }
 });


//  flights


app.post("/Destination_path", async(req,res)=>{
    try{

       const clientData = new flightbooking({
        from: req.body.from,
        to : req.body.to,
        departuredate:req.body.departuredate,
        classname: req.body.classname

       })

       const booked = await clientData.save();
        res.status(201).render("Select_flights")
    }catch(error){
     res.status(400).send(error);
    }
 });



//  Trains



app.post("/Trains", async(req,res)=>{
    try{

       const clientData = new trainbooking({
        
        from: req.body.from,
        to : req.body.to,
        departuredate:req.body.departuredate,
        nooftraveller: req.body.nooftraveller

       })

       const booked = await clientData.save();
        res.status(201).render("Select_trains")
    }catch(error){
     res.status(400).send(error);
    }
 });


 app.post("/Select_buses", async(req,res)=>{
   res.status(201).render("Booking_Form")
 })

 app.post("/Select_cabs", async(req,res)=>{
    res.status(201).render("Booking_Form")
  })

  
 app.post("/Select_flights", async(req,res)=>{
    res.status(201).render("Booking_Form")
  })

   
 app.post("/packages", async(req,res)=>{
    res.status(201).render("package_booking")
  })
 
 
 

  app.post("/Booking_Form",async(req,res)=>{
    try{

        const clientData = new bookingform({
         
            numtaveler: req.body.numtaveler,
            title: req.body.title,
            fullname:req.body.fullname,
            age:req.body.age,
            email:req.body.email,
            mobilenum:req.body.mobilenum,
            vehicalname:req.body.vehicalname
        })
 
        const booked = await clientData.save();
         res.status(201).render("booking_successfull")
         
     }catch(error){
      res.status(400).send(error);
     }
});

app.post("/package_booking",async(req,res)=>{
    try{

        const clientData = new packagebooking({
         
            numtaveler: req.body.numtaveler,
            title: req.body.title,
            fullname:req.body.fullname,
            age:req.body.age,
            email:req.body.email,
            mobilenum:req.body.mobilenum,
            Location:req.body.Location
        })
 
        const booked = await clientData.save();
         res.status(201).render("booking_successfull")
     }catch(error){
      res.status(400).send(error);
     }
});






// const bcrypt = require("bcryptjs");

// const securePassword = async(password) =>{
//     const passwordHash = await bcrypt.hash(password, 10);
//     console.log(passwordHash);

//     const passwordMatch = await bcrypt.compare(password, passwordHash);
//     console.log(passwordMatch);
// }

// securePassword("thapa@123");


const jwt = require("jsonwebtoken");


const createToken = async() =>{
    const token = await jwt.sign({_id:"636f7b32ea4c5d6778c333ee"},"123456789123456789123456789123456789");
    console.log(token);

    const userVer = await jwt.verify(token,"123456789123456789123456789123456789");
}

app.listen(port,()=>{
    
            console.log("Started the server the name");
        
})

