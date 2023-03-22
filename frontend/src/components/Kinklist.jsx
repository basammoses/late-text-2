import React, { useEffect, useState } from "react";
import list from './list.json'


export default function KinkList() {
  const [isChecked, setIsChecked] = useState(list);
  const [results, setResults] = useState([]);
  console.log(isChecked);
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

