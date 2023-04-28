import KinkList from "../components/Kinklist";
import { Box } from "@chakra-ui/layout";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { AuthContext } from "../components/Authentication/auth-context.jsx";
import { useEffect, useState, useContext} from "react";

export const Quizpage = () => {
  const auth = useContext(AuthContext);
  const { user } = auth;


  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}

      <KinkList />

    </div>
  );
};
