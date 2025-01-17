const express=require("express");
const zod=require("zod");
const jwt=require("jsonwebtoken");
const jwtPassword="1234";
const app=express();

app.use(express.json());
const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gm",
        password: "123321",
        name: "Priya kumari",
    },
];

function userExists(username, password) {
    for(let i=0;i<ALL_USERS.length;i++)
    {
        if(ALL_USERS[i]["username"]==username && ALL_USERS[i]["password"]==password)
        {
            return true;
        }
        
        
            
        
    }
    return false;
}

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesn't exist in our in-memory db",
        });
    }

    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/user",(req,res)=>
{
    const token=req.headers.authorization;
    
    try{
        const decode=jwt.verify(token,jwtPassword);
        const username=decode.username;
        res.status(200).json({
            users:ALL_USERS
        })
    }
    catch(err)
    {
        res.json({
            msg:"Wrong token"
        })
    }
   
})

app.listen(3000);
