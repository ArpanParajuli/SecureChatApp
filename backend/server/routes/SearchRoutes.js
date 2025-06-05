import express from "express";

import {searchUserFunc , SendFriendRequestUserFunc , AcceptFriendRequestUserFunc} from "../controllers/SearchUserController.js"
const router = express.Router();


router.post("/search-user" ,searchUserFunc);
router.post("/sendreq-user" ,SendFriendRequestUserFunc);
router.post("/acceptreq-user" ,AcceptFriendRequestUserFunc);




export const SearchRoutes = router;


