// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const { z } = require('zod');
const user = require('../Model/Model');
// const multer  = require('multer')

// // const user = require('../model/Model')
// // const Admin = require('../'); 

// const userSchema = z.object({
//   name: z.string().min(2, { message: "Name Must Be At Least 2 Characters Long" }),
//   email: z.string().email({ message: "Invalid Email Format" }),
//   password: z.string().min(6,{ message: "Password Must Be At Least 6 Characters Long" })
// });

// const insert = async (req, res) => {
//   try {
//     const { name, email, password } = userSchema.parse(req.body);
//     const hashedPassword = await bcrypt.hash(password, 10);      

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).send("User Already Exists");
//     }

//     const payload = { name, email };
//     const token = jwt.sign(payload, 'user_secret', { expiresIn: '1d' });

//     const newUser = await user.create({
//       name,
//       email,
//       password: hashedPassword,
//       token:token
//     });

//     res.send({ status: true, user: newUser });
//   } catch (error) {
//     if (error instanceof z.ZodError) {
//       const validationErrors = error.errors.map(err => ({
//         field: err.path[0],
//         message: err.message
//       }));

//       return res.status(400).send({
//         status: false,
//         errors: validationErrors
//       });
//     }
//     console.error("Error Adding User:", error); 
//     res.status(500).send({ status: false, error: error.message });
//   }
// };

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const response = await User.findOne({ email });
//     // const admin = await Admin.findOne({ email });

//     if (response) {
//       const isPasswordMatch = await bcrypt.compare(password, response.password);
//       if (isPasswordMatch) {
//         const payload = { name: response.name, email: response.email };
//         const token = jwt.sign(payload, "user_secret", { expiresIn: "1d" });

//         await User.updateOne({ email }, { token });

//         return res.send({ status: '001', message: "Token Updated Successfully", token });
//       }   
//     } else if (admin) {
//       const isPasswordMatch = await bcrypt.compare(password, admin.password);
//       if (isPasswordMatch) {
//         const payload = { name: admin.name, email: admin.email };
//         const token = jwt.sign(payload, "admin_secret", { expiresIn: "1h" });

//         await Admin.updateOne({ email }, { token });

//         return res.send({ status: '001', message: "Token Updated Successfully", token });
//       }
//     }

//     return res.status(401).send({
//       status: "001",
//       message: "Invalid Credentials Or User/Admin Not Registered"
//     });
//   } catch (error) {
//     console.error("Error During Login:", error);
//     return res.status(500).send({ status: false, error: error.message });
//   }
// };

// const someMiddleware = (req, res, next) => {
//   console.log('This Is A Middleware');
//   req.shivi = "One";
//   next(); 
// };

// const logout = async (req, res ) => {
//   try {
//     // console.log(req , "uuser")
//     const { email } = req.body;

//     if (!email) {
//       return res.status(400).send({
//         status: false,
//         message: "Email Is Required"
//       });
//      }

//     const result = await user.findOne({ email });

//     if (result) {
//       await user.updateOne({ email }, { token: null });

//       return res.send({
//         status: true,
//         message: "Logout Successful, Token Cleared"
//       });
//     } else {
//       return res.status(404).send({
//         status: false,
//         message: "User Not Found"
//       });
//     }

//   } catch (error) {
//     console.error("Logout Error:", error);
//     return res.status(500).send({
//       status: false,
//       error: error.message
//     });
//   }
// };

const multer=async(req,res)=>{
  // console.log(req.files,"multer");
  const filename=req.files
  // console.log(filename);
  const {name,email}= req.body
  
  const insert =user.create({
    image:filename,
    name:name,
    email:email
  })
  
   const files = req.files;
   const data = req.body;

  if (!files) {
      return res.status(400).send({ message: 'Please Upload files' });
  }

  console.log(files);
  // console.log({data});
  res.send({
    message: 'Files Uploaded Successfully',
    // name: name,
    // email: email,
    // image:filename,
    // files: files.map(file => file.buffer) // returning the uploaded filenames
});
};

const getImage = async(req,res)=>{

  const data = await user.find({});
  res.send({status:"001" , message:"Data Get Successfully"})
}

  // res.send({message:"File Uploded Sucessfully"})
//   console.log(req.body,"body");
  // res.send(req.file);


module.exports = {multer,getImage};

