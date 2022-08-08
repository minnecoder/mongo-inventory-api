import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';

const addUser = async (req: Request, res: Response, next: NextFunction) => {
    // Check if the user already exists
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
        return res.status(400).json({
            message: 'User already exists'
        });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    try {
        // Create a new user
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
            role: 'user'
        });

        // Save the new user
        const savedUser = await newUser.save();

        return res.status(201).json(savedUser);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    // Check if the user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({
            message: 'User does not exist'
        });
    }

    // Check if the password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).json({
            message: 'Invalid password'
        });
    }
    console.log(process.env.JWT_SECRET);
    // Create and assign a token
    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET as string);

    return res.status(200).json({
        token,
        user: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role
        }
    });
};

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getSingleUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findById(req.params.userId);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userId);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default { addUser, loginUser, getUsers, getSingleUser, updateUser, deleteUser };
