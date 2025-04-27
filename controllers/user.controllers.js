const path = require("path");
const {v4:uuidv4} = require("uuid");
const User = require("../models/user.models");


const getAllUser =async(req, res) => {
  try{
    const users = await User.find()
    res.status(200).json(users)
  }catch(error){
    res.status(500).send(error.message)
  }
};


const getOneUser = async (req, res) => {
  try{
    const singleuser = await User.findOne({id:req.params.id});
    res.status(200).json(singleuser);
  }catch(error){
    res.status(500).send(error.message);
  };
};

const CreateUser = async (req, res) => {
  try{
    const newuser = new User({
      id:uuidv4(),
      name:req.body.name,
      age:Number(req.body.age)
      });
      await newuser.save()
      res.status(201).json(newuser);
    }catch(error){
      res.status(500).send(error.message)
    }
  };

const UpdateUser = async(req, res) => {
  try{
    const singleuser = await User.findOne({id:req.params.id});
     singleuser.name = req.body.name;
     singleuser.age = req.body.age;
      await singleuser.save()
      res.status(200).json(singleuser);
    }catch(error){
      res.status(500).send(error.message)
    }
};
const DeleteUser =async (req, res) => {
  try{
    await User.deleteOne({id:req.params.id});
    res.status(200).json({messages:"user is deleted"});
  }catch(error){
    res.status(500).send(error.message);
  };
};

module.exports = { getAllUser, getOneUser, CreateUser, UpdateUser, DeleteUser };
