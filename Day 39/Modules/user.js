const userModel = require("../Models/user");
var nodemailer = require("nodemailer");
var crypto = require("crypto");
const bcrypt = require("bcrypt");
var sendgridtransport = require("nodemailer-sendgrid-transport");

const transport = nodemailer.createTransport(sendgridtransport({
    auth:{
api_key:"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"
    }
}))
exports.resetPassword  = async(req,res)=>{
    console.log("im here");
  console.log(req.body);
  try{
  crypto.randomBytes(32,async(err,buffer)=>{
      try{
      if(err){
          console.log(err);
      }
      const token = buffer.toString("hex");
      const user = await userModel.find({email:req.body.email})
    console.log("user",user);
      if(user==null){
          res.status(400).send({msg:"user doesnt exist"});
      }
   
    var update_response = await userModel.findByIdAndUpdate(user[0]._id,{
        resetToken:token,
        expireToken:Date.now() + 3600000
      })
   
    //   var response = await user.save();
    var email = user[0].email;
    console.log("email",email)
    try{
      transport.sendMail({
          to:user[0].email,
          from:"savitabharati30@gmail.com",
          subject:"password reset",
          html:`
          <p>You are requested for password reset</p>
          <h5>Click on the link <a href="http://localhost:3001/reset/${token}">to reset password</a></h5>
          `
        }) 
    }catch(err){
        console.log(err);
    }
    }catch(err){
        console.log(err);
    }
    })

    res.send({msg:"check your email"});
}catch(err){
    res.send(err);
}
}
exports.updatePassword = async(req,res)=>{
    try{
    const newPassword = req.body.new_password;
    const sentToken = req.body.token;
   var user =  await userModel.find({resetToken:sentToken,expireToken:{$gt:Date.now()}})
   if(!user){
    return res.status(422).send({error:"Try again session expired"})
   }
   const salt = await bcrypt.genSalt();
    console.log("salt", salt);
    
    hashpassword = await bcrypt.hash(newPassword, salt);
   await userModel.findByIdAndUpdate(user[0]._id,{
       password:hashpassword,
       resetToken:undefined,
       expireToken:undefined
   })
   res.send({msg:"password updated successfully"})
}catch(err){
    console.log("err");
}
}
exports.register = async(req,res)=>{
    console.log("im here");
     try{
        var user_check = await userModel.find({email:req.body.email})
        console.log("user", user_check.length);
        console.log("user", user_check);
    if( user_check.length !== 0){
             console.log("im here");
             return res.send("user already registerd");
         }
         const salt = await bcrypt.genSalt();
       req.body.password = await bcrypt.hash(req.body.password,salt);
      console.log("body",req.body);
      const user = new userModel({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password
      })
      var response = await user.save();
      console.log("response",response);
      res.send(response);
     }catch(err){
      console.log(err);
     }
}
