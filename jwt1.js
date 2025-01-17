const express=require("express");
const jwt=require("jsonwebtoken");
const zod=require("zod");
const jwtPassword="1234";
const app=express();
const schema=zod.object(
    {
        username:zod.string(),
        password:zod.string().min(7)
    }
)
app.use(express.json());

app.post("/",(req,res)=>
{
    const username=req.body.username;
    const password=req.body.password;
    const response=schema.safeParse({username,password});
    if(response.success)
    {
        var token=jwt.sign({username},jwtPassword);
        return res.json({
            token
        })
    }
    else
    {
        return res.status(400).json({
            msg: "Validation failed",
            errors: response.error.errors,
          });
    }

})

app.get("/verify",(req,res)=>
{
    let ans=true
    const token=req.headers.token;
    try{
        const verify=jwt.verify(token,jwtPassword);
       
    }
    catch(err)
    {
        ans=false;
    }
    return res.json({ans});
})

app.listen(3000);