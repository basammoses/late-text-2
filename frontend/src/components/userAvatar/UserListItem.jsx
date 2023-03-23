import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";
import { ChatState } from "../../Context/ChatProvider";
import React from "react";


const UserListItem = ({ handleFunction, user }) => {
  // const { user } = ChatState();
  console.log(user.name);
   

  
  function handleImg() {
    
    const image = <img src="./heart.png" alt="alt text"
      style={{
        
        width: "20px",
        height: "20px",
      }
        
      }

    
    
       />
      
    
      const imageElements = [];
    
      for (let i = 0; i < 5; i++) {
        imageElements.push(image);
      }
    
      return (
        <div>
          {imageElements}
        </div>
      );
    }
    

  


  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.pic}
      />
      <Box>
        <Text>{user.name}</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {user.email}
        </Text>
        
         
        {user.score}
    
         
        
        
        
      
        
      </Box>
    </Box>
  );
};

export default UserListItem;
