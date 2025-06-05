import { User } from "../models/UserData.js";

export const searchUserFunc = async (req, res) => {
     const { username} = req.body;

  try {
        const isUserFound  = await User.findOne({
            username : username , 
        });

        if(!isUserFound){
           return   res.status(404).json({
      message: "User not found!",
    });
        }
        return  res.status(200).json({
          username : isUserFound.username,
          isOnline : isUserFound.isOnline
    });
    }
    
    catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};



export const SendFriendRequestUserFunc = async (req, res) => {
       const { OwnUsername, toUserName} = req.body;

  try {

    
       const SendUser = await User.findOne({
            username : OwnUsername , 
        });
        const ReceiveUser = await User.findOne({
            username : toUserName , 
        });

        if(!SendUser){
           return   res.status(404).json({
           message: "User not found!",
       });
      }

            if(!ReceiveUser){
           return   res.status(404).json({
           message: "User not found!",
       });
      }


      if(SendUser.friends.includes(ReceiveUser.username)){
         return res.status(400).json({ message: "You are already friends." });
      }

      if (ReceiveUser.friendRequests.includes(SendUser.username)) {
      return res.status(400).json({ message: "Friend request already sent." });
     }


      await ReceiveUser.friendRequests.push(SendUser.username);
      await ReceiveUser.save();



        return  res.status(200).json({message : "Friend request send successfully!"});
    
    }
    
    catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};



export const AcceptFriendRequestUserFunc = async (req, res) => {
  const { OwnUsername, ofUserName } = req.body;

  try {
    const SenderUser = await User.findOne({ username: ofUserName });
    const ReceiveUser = await User.findOne({ username: OwnUsername });

    if (!SenderUser || !ReceiveUser) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (SenderUser.friends.includes(ReceiveUser.username)) {
      return res.status(400).json({ message: "You are already friends." });
    }

    if (!ReceiveUser.friendRequests.includes(SenderUser.username)) {
      return res.status(400).json({ message: "No friend request found from this user." });
    }

    
    // Add friends
    ReceiveUser.friends.push(SenderUser.username);
    SenderUser.friends.push(ReceiveUser.username);

    // Remove friend request
    ReceiveUser.friendRequests = ReceiveUser.friendRequests.filter(username => username !== SenderUser.username);

    await ReceiveUser.save();
    await SenderUser.save();

    return res.status(200).json({ message: `With ${SenderUser.username} you are friends now!` });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
