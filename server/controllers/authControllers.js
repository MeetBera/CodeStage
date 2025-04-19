const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.register = async (req,res) => {
    try{
        const { name, email, password, role = 'candidate' } = req.body
        const existingUser = await User.findOne({email})
        if(existingUser) return res.status(400).json({msg: "User already Exists"})

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({name, password: hashedPassword, email})

        const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '2h'})
        res.status(203).json({ user, token })
    }
    catch(err){
        res.status(500).json({ msg: "Registration failed", error: err.message });
    }
}

exports.login = async (req,res) => {
    try{
        const { email, password } = req.body
        const user = await User.findOne({email})
        if(!user) return res.status(400).json({msg:"User does not exist, Register"})
        
        const ismatch = await bcrypt.compare(password, user.password);
        if(!ismatch) return res.status(400).json({ msg: "Invalid credentials" });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '2h' });
        res.status(200).json({user, token})
    }
    catch(err){
        res.status(500).json({ msg: "Login failed", error: err.message });
    }
}