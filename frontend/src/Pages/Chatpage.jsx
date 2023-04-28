import { Box } from "@chakra-ui/layout";
import { useState, useContext, useEffect } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { AuthContext } from "../components/Authentication/auth-context.jsx";
import axios from "axios";


const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const auth = useContext(AuthContext);
  const { user,  setUser } = auth;
 
     const verifyUser = () => {
    axios
      .get("http://localhost:3000/api/user/verify", { withCredentials: true })
      .then((res) => {
        setUser(res.data);
      });


  }
  useEffect(() => {
  
    verifyUser();
  
    
  }, []);


  
    
    

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
