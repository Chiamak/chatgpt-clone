import React, { useState} from 'react';
import './App.css';
import { useColorMode } from "theme-ui";
import Aside from './components/Asides/aside';
import Main from './components/Section/main';

function App() {
  const [colorMode, setColorMode] = useColorMode();
  const [state, setState] = useState(true);
  const[input, setInput] = useState('');
  const[chatbox, setChatbox] = useState([]);
  const[loading, setLoading] = useState(true);
  const[history, setHistory] = useState([]);

  function changeMode() {
    setColorMode(colorMode === "light" ? "dark" : "light");
    setState(colorMode === "light" ? true : false);
  }
 
  
  const getInput = (e) => {
    setInput(e.target.value);
  }

  const onDelete = ()=>{
    setChatbox([]);
    setLoading(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setHistory([...history, {user: 'me', message: `${input}`}]);
    console.log(history);
    let chatboxNew = [...chatbox, {user: 'me', message: `${input}`}];
    
    setInput('');
    setLoading(false);
    setChatbox(chatboxNew);
    
    const messages = chatboxNew.map((mess) => mess.message).join('\n');

    const res = await fetch("http://localhost:3080/", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({
        message: messages,
      })
    });

    const data = await res.json();

    setChatbox([...chatboxNew, {user : 'gpt', message: `${data.message}`}]);
    setHistory([...history, {chatboxNew}]);
  
  }

  return (
    <div className="App">
      <Aside  onDelete={onDelete} changeMode={changeMode} state={state} history={history}/>
      <Main loading={loading} chatbox={chatbox} state={state} onChange={getInput} handleSubmit={handleSubmit} input={input} />
    </div>
  );
}

export default App;
