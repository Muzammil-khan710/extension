import "./App.css";
import React, { useState } from "react";

const App = () => {
  let arr1 = ["a", "b", "c"];
  let arr2 = [1, 2, 3];
  let obj = Object.assign({}, arr1, arr2);

  // Output: {0: "a", 1: "b", 2: "c", 3: 1, 4: 2, 5: 3}
  const [message, setMessage] = useState("");

  // State to store the list of messages
  const [messages, setMessages] = useState([]);
  const [replyBot, setResplyBot] = useState(["I dont know sorry!"]);

  // Function to handle sending a message
  const handleSend = () => {
    // Add the current message to the list of messages
    setMessages([...messages, message]);
    // Clear the current message
    setMessage("");
  };

  return (
    <div className="main_container">
      <div className="extension">
        <div className="header">
          <h1>This is chrome extension</h1>
        </div>

        <div className="output_box">
          <div className="input_user">
            <img src="images/profile.png" className="profileimg" />
            <ul className="input_header">
              {messages.map((m, index) => (
                <li key={index}>{m}</li>
              ))}
            </ul>
          </div>

          <div className="botreply">
            <img src="images/bot.png" className="botimg" />
            <ul className="input_headertwo">
              {messages.map((m2, index) => (
                <li key={index}>{replyBot}</li>
              ))}
            </ul>
          </div>
        </div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input"
          placeholder="Enter your Question"
        />
        <div className="btn">
          <button type="submit" onClick={handleSend}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

// let arr1 =  ['questionss']
// let arr2 =  ['ans']
// let arr3 = [
//   {
//   questions:1,
//   bot:1,
//   }
// ]
// arr3.map((item)=> {
//   return(
//     <ul>
//       <li>{item.questions}</li>
//       <li>{item.bot}</li>
//     </ul>
//   )
// })
