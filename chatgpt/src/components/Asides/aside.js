import React, { useState} from 'react'
import Actions from './actions';

const Aside = ({ onDelete,state, changeMode, history}) => {
  const[see, setSee] = useState(false);
  const[look, setLook] = useState(false);

    const Handletoggle = () =>{
        setSee((current)=>!current);
  };
  const Htoggle= () =>{
      setLook((current)=>!current);
  };
   
  return (
    <div className='side-menu' style={{backgroundColor : state ? 'rgb(69, 69, 201)' : 'navy', color: ' navajowhite'}}>
      <div className='side-menu-up'>
        <div className='side-menu-chat'>
            <span> + </span>New chat
        </div>          
        <div className='side-menu-model'>
          <button type='button' onClick={Handletoggle}>Help</button>
          {see && (
            <div>This is uses OpenAIApi to answers all your question and code alike.
                Follow the link for more info 
                <a href='https://platform.openai.com/'> OpenAIApi</a>
                <div className='helpbox'>
                    <h4>Example:</h4>
                    <li>You: How do I combine arrays?</li>
                    <li>M-chatbot: You can use the concat() method.</li>
                </div>
                <h3>Model : <span>code-davinci-002</span></h3>
                <h3>Creator: <span>Eze Chiamaka .B</span></h3>
                <h3>Created : <span>24th Feb - 17th March, 2023</span></h3>
            </div>            
          )}
        </div>
        <div className='side-menu-model'> 
        <button type='button' onClick={Htoggle}>History</button>
            {look && (
              <ul className='history'>
                {history.map((history, index)=>(
                <li key={index}>{history.user}: {history.message}</li>
              ))}
              </ul>
            )}
        </div>
      </div>
      <hr></hr>
      <Actions onDelete = {onDelete} changeMode = {changeMode} state={state}/>
    </div>
  )
}

export default Aside