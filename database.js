const express=require("express");
const mongoose=require("mongoose");
const zod=require("zod");
const app=express();
app.use(express.json());
const schema=zod.object({
    email:zod.string().email(),
    password:zod.string(),
    name:zod.string()
})


mongoose.connect("use you web string here")
const User = mongoose.model('User', { name: String,email: String,password : Number });


app.post("/usersignin",async (req,res)=>
{
    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;
    const response=schema.safeParse({email,password,name});
    const ok= await User.findOne({ email: email});
    if(ok)
    {
        res.status(200).json({
            msg:"user not present"
        })
    }
    else if(!response.success)
    {
        res.json({
            msg:"Incorrect input",
            errors: response.error.errors
        });
        return;
    }
    else{
        const  user = new User({ name: name,
            email:email,
            password:password
            
        
});
user.save();
    }

    
})

 
 app.listen(3000);
