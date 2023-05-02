import React, { useEffect, useState } from "react";
import list from './list.json'
import axios from 'axios';
import { ChatState } from "../Context/ChatProvider";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/Authentication/auth-context.jsx";

const api = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: true,
})


export default function KinkList() {
  const auth = useContext(AuthContext);
  const history = useNavigate();
  const [isChecked, setIsChecked] = useState(list);
 
  console.log(isChecked);
  const { user } = auth;
  // console.log(results);

  
  
  const approvedKinks = []
  const handleOnChange = (name) => {
    const updateIsChecked = isChecked.map((item, index) => {
      if (item.name === name) {
        return { ...item, checked: !item.checked }
      
      
      }
      return item;
    })
      
    
  ;
    setIsChecked(updateIsChecked);
    console.log(approvedKinks);
    
    
    
    
  };
  
  function handleResults() {
    isChecked.forEach((item, index) => {
      if (item.checked === true && approvedKinks.includes(item.name) === false) {
        approvedKinks.push(item.name);
      
      }
      return approvedKinks;
      
    })
    console.log(approvedKinks);
    
    ;
     const config = { 
       headers: {
         Authorization: `Bearer ${user.token}`,
         
        
      },
     };
    api.patch('/api/user/update', approvedKinks, config)
      .then((res) => {
        console.log(res);
        history('/chats');
      }
    )

    
    
    
  


   
    
    
   
  }
 
  




  
  


  return (
    <div className="kinks">
      <div className="container">
        <div className="header">
          <h1>
            <b>
              Pick Your Pleasure
            </b>
          </h1>
        </div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>

              <div className="kinkList">
                <input
                  type="checkbox"
                  id={index}
                  isChecked={item.checked}
                  onChange={() => handleOnChange(item.name)}
                />

                <label htmlFor={index}>

                  {item.name}

                  <br />
                  {item.description}

                  <form >

                  </form>

                </label>

              </div>
            </li>

          ))}
        </ul>
        <div className="btn">
          <button onClick={handleResults}>Submit</button>
        </div>
      </div >
    </div>
  );
}

