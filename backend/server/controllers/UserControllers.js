import { User } from "../models/UserData.js";

export const login = async (req, res) => {
     const { username, password } = req.body;

  try {
        const isUserFound  = await User.findOne({
            username : username , 
            password : password
        });

        if(!isUserFound){
           return   res.status(401).json({
      message: "Invalid credentials!",
    });
        }
        return  res.status(200).json({
      message: "User login action successfull",
    });
    }
    
    catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const saveUser = new User({
      username: username,
      password: password,
    });

    await saveUser.save();

    res.status(201).json({
      message: "User creation successfull",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
