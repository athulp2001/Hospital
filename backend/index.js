const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const multer = require('multer');
const path = require('path');
const registerModel = require("./Model/Registermodel");
const FormData = require("./Model/Dep");
const DepHeadData =require("./Model/DepHead")
const EmpolyData =require("./Model/Empoly")
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose.connect("mongodb://127.0.0.1:27017/Mehospital", { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", (req, res) => {
    res.send("hello");
});

///REGISTERREGISTERREGISTERREGISTERREGISTERREGISTERREGISTER////

app.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
        .then((hash) => {
            registerModel.create({ name, email, password: hash })
                .then(user => { res.json(user) })
                .catch(err => { res.json(err) });
        });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await registerModel.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ userId: user._id, email: user.email }, 'your-secret-key', {
        expiresIn: '1h',
      });

      res.status(200).json({ message: 'Login successful', token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


//MULTERMULTERMULTERMULTERMULTERMULTERMULTERMULTERMULTERMULTERMULTERMULTERMULTERMULTER///////////////


var storage = multer.diskStorage({
    destination: '../aclint/src/Admin/Departments/DepImage',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

var upload = multer({ storage });

app.post('/submit', upload.single('image'), async (req, res) => {
    try {
        const formData = new FormData({
            name: req.body.name,
            year: req.body.year,
            description: req.body.description, 
            image: req.file.filename,
        });
        await formData.save();

        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

 ////////////////PUT PUT PUT PUT ///////////////////////////

 
app.put("/updateDep/:id", upload.single('image'), async (req, res) => {
    const userId = req.params.id;
    const { name, year, description } = req.body;

    try {
        let updatedFields = { name, year, description };
        if (req.file) {
            updatedFields.image = req.file.filename;
        }

        const updatedUser = await FormData.findByIdAndUpdate(userId, updatedFields, { new: true });

        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});




///DEPHEAD MULTER DEPHEAD MULTER DEPHEAD MULTER DEPHEAD MULTER DEPHEAD MULTER DEPHEAD MULTER///////////


var storage = multer.diskStorage({
    destination: '../aclint/src/Admin/DepartmentHeads/DepHeadImg',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

var upload = multer({ storage });

app.post('/submitdephead', upload.single('image'), async (req, res) => {
    try {
        const hey = new DepHeadData({
            headName: req.body.headName,
            epolyNumber: req.body.epolyNumber,
            age: req.body.age,
            description: req.body.description,
            selectDepartment: req.body.selectDepartment,
            image: req.file.filename,
        });
        await hey.save();

        res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
app.put("/updateDepHead/:id", upload.single('image'), async (req, res) => {
    const userId = req.params.id;
    const {headName, epolyNumber, age, description, selectDepartment,image} = req.body;

    try {
        let updatedFields = { headName, epolyNumber, age, description, selectDepartment,image };
        if (req.file) {
            updatedFields.image = req.file.filename;
        }

        const updatedUser = await DepHeadData.findByIdAndUpdate(userId, updatedFields, { new: true });

        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
///EMPLOY  EMPLOY EMPLOY EMPLOY EMPLOY  EMPLOY EMPLOY  EMPLOY EMPLOY EMPLOY EMPLOY ///////////

var storage =multer.diskStorage({
    destination:'../aclint/src/Admin/Employ/EmployImg',
    filename:(req,file,cb)=>{
        cb(null,file.filename+"-"+Date.now()+path.extname(file.originalname))
    }
});
var upload =multer({storage})

app.post("/submitemploy",upload.single("image"),async(req,res)=>{
    try{
        const empolydata =new EmpolyData({
            name:req.body.name,
            employeNumber:req.body.employeNumber,
            age:req.body.age,
            decription:req.body.decription,
            selectDepartment:req.body.selectDepartment,
            reportTo:req.body.reportTo,
            image:req.file.filename
        })
       await empolydata.save()
       res.status(200).json({ message: 'Form submitted successfully' });

    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})
app.put("/updateEmpoly/:id", upload.single('image'), async (req, res) => {
    const userId = req.params.id;
    const {name, employeNumber, age, decription, selectDepartment,reportTo,image } = req.body;

    try {
        let updatedFields = {name, employeNumber, age, decription, selectDepartment,reportTo,image };
        if (req.file) {
            updatedFields.image = req.file.filename;
        }

        const updatedUser = await EmpolyData.findByIdAndUpdate(userId, updatedFields, { new: true });

        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.listen(7001, () => {
    console.log("SERVER IS RUNNING!!!!");
});


/////////////////GET GET GET GET GET GET GET GET /////////////////////////////////



app.get("/getDep", (req,res)=>{
    FormData.find()
   .then(users=>res.json(users))
   .catch(err=>console.log(err))
})


app.get("/getDepHead",(req,res)=>{
    DepHeadData.find()
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
})

app.get("/getEmpoly",(req,res)=>{
    EmpolyData.find()
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
})

///////////////////////DLEDTE DELETE DELETE DELETE DELETE///////////////////////////

app.delete("/deleteDep/:id", async (req, res) => {
    const userId = req.params.id;
  
    try {
      await FormData.findByIdAndDelete(userId);
      res.json({ status: "Ok", data: "Deleted" });
    } catch (error) {
      console.error(error);
    }
  });
//////////////////////////delete DEP HEAD////////////////////////////
  app.delete("/deleteDepHead/:id", async (req, res) => {
    const userId = req.params.id;
  
    try {
      await DepHeadData.findByIdAndDelete(userId);
      res.json({ status: "Ok", data: "Deleted" });
    } catch (error) {
      console.error(error);
    }
  });

  app.delete("/deleteEmpoly/:id", async (req, res) => {
    const userId = req.params.id;
  
    try {
      await EmpolyData.findByIdAndDelete(userId);
      res.json({ status: "Ok", data: "Deleted" });
    } catch (error) {
      console.error(error);
    }
  });
  
 
