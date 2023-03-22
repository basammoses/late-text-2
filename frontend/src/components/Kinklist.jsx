import React, { useState } from "react";
import list from './list.json'


export default function KinkList() {
  const [isChecked, setIsChecked] = useState(list);
  // const [results, setResults] = useState([]);
  console.log(isChecked);
  // console.log(results);

  async function handleSubmit(e) {
    const kinks = isChecked;
    console.log(kinks)
    e.preventDefault()
  }

  const handleOnChange = (name) => {
    const approvedKinks = []
    const updateIsChecked = isChecked.map((item, index) => {
      if (item.name === name) {
        return { ...item, checked: !item.checked };
      } if (item.checked === true) {
        // console.log(item);
        approvedKinks.push(item);
        // setResults(approvedKinks);
      }
      return item;
    });
    setIsChecked(updateIsChecked);
  };



  return (
    <div className="kinks">
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

                <form onSubmit={handleSubmit}>

                </form>

              </label>
            </div>
          </li>

        ))}
      </ul>
      <div className="btn">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div >
  );
}

