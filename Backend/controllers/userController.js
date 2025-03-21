import generateToken from "../config/generateToken.js";
import User from "../models/User.js";



//User RegistrationL
export const registerUser = async (req, res) => {
    const {name, email, password} = req.body;
    const userExists = await User.findOne({email});

    if(userExists){
        return res.status(400).json({
            status: 0,
            message: "User already exists"
        })
    }

    const user = await User.create({name, email, password});

    if(user){
        return res.status(201).json({
            status: 1,
            _id: user._id,
            name : user.name,
            email : user.email,
            token : generateToken(user._id)
        });
    }else{
        return res.status(400).json({
            status: 0,
            message: "Invalid user data"
        })
    };

}

//Login user:
export const authuser = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(user.password && (await user.matchPassword(password))){
        res.json({ 
            _id: user._id, 
            name: user.name, 
            email: user.email, 
            token: generateToken(user._id) });
    }else{
        res.status(401).json({
            status: 0,
            message: "Invalid email or password"
        })
    };
};