import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../config/generateToken.js";
import { response } from "express";

//@description     Get or Search all users
//@route           GET /api/user?search=
//@access          Public

export const update = asyncHandler(async (req, res) => {
  const user = await User.findOneAndUpdate(
    { _id: req.user._id },

    { $set: { interests: req.body } },
    { new: true }
  );

  res.send(user);
  if (user) {

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      interests: user.interests,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});


export const intrestMatch = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: req.user._id } })
    const myinterests = req.user;

 






    let matches = []
      
    
      
    
  
    
  ;

  // Loop through each user
  users.forEach(user => {
    // Initialize the user's score to 0
    let score = 0;

    // Loop through each interest
    user.interests.forEach(interest => {
      // If the user has the same interest, increase their score by 1
      if (req.user.interests.includes(interest)) {
        score += 1;
      }
    });

    // If the user has a score greater than 0, add them to the matches object
    if (score > 0) {
      
      
      
      matches[0] = {
        name: user.name,
        email: user.email,
        interests: user.interests,
        _id: user._id,
        pic: user.pic

      }
        
      

    }

    
  
      
      
      
  }
    
  );



  // Sort the matches object by score (descending) and return it

  
    


  console.log( Object.keys(matches).sort((a, b) => b[1] - a[1]))

  res.send(JSON.stringify(matches))
  }  
catch (error) {
  res.status(400).json({ message: error.message });

  }
});









//    user.map((user) => {
//   user.interests.map((intrest) => {
//     if (req.user.interests.includes(intrest)) {

//       return user;
//     }
//   });
// });

















export const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
      $or: [
        { name: { $regex: req.query.search, $options: "i" } },
        { email: { $regex: req.query.search, $options: "i" } },
      ],
    }
    : {};




  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

//@description     Register new user
//@route           POST /api/user/
//@access          Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });


  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
      interests: user.interests,

    });
  } else {
    throw new Error(user)



  }
});

