import React, {useState,useEffect} from "react";
import {Button,Input} from '@material-ui/core';
import {FormControl ,InputLabel} from '@material-ui/core';
import './App.css';
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [message, setmessage] = useState([
    {username:"bikram", text:"hello"},
    {username:"saroj",  text:"whatup"}]);
  const [username, setusername] = useState("");

  useEffect(() => {
  
      setusername(prompt("please give your name"));
  
  }, []);
  
  const setMessages=(event)=>{
    event.preventDefault();
    setmessage([...message,{username:username,text:input}]);
   setInput("");
  }
 
  return (
    <div className="App">
     <h1>hello clever programmmer</h1>
     <h2>welcome {username}</h2>
     <form>
     <FormControl>
       <InputLabel>Leave a Message</InputLabel>
           <Input value={input} onChange={(e)=>setInput(e.target.value)} />
           <Button type="submit" disabled={!input} variant="contained" color="primary" onClick={setMessages}>Send the messages</Button>
       </FormControl>
     </form>
     {message.map((item)=> 
     <Message username={item.username}
     text={item.text}/>
     )}
    </div>
  );
}

export default App;
