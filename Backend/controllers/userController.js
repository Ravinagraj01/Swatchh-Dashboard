import generateToken from "../config/generateToken.js";
import TrashReport from "../models/TrashReport.js";
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

export const getUserProfile = async (req, res) => {
    try {
        const user = req.user;
        res.json({
            name : user.name,
            email : user.email,
            role : user.role,
            points : user.points
        })
    } catch (error) {
        res.status(500).json({
            message : 'Server Error'
        })
    }
}

export const getUserReports = async (req, res) => {
    try {
        const reports = await TrashReport.find({ user: req.user._id});
    } catch (error) {
        res.status(500).json({
            message : 'Server Error'
        })
    }
}