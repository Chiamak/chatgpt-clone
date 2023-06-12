import React,{useState} from 'react'

const Chatans = ({message, state}) => {
  return (
    <div className='main-page-ans'>
        <div className={`chat-box ${message.user === 'gpt' && 'answer'}`} 
          style={{backgroundColor: message.user === 'gpt' && state ? 'rgb(46, 46, 184)': message.user === 'gpt' && 'rgb(216, 132, 6)', color:'navajowhite'}}>
          {message.user === 'gpt' ? 
            (<img alt='box' src='./bird.png'/>)
            : (
              <h1 style={{backgroundColor: state ? 'navajowhite' : 'navy'}}>me</h1>
            )
          } 
          <div className='ans'>
            {message.user === 'gpt' && message.message ?
              (
                <p>{message.message}</p>  
              )
              : 
              (<p>{message.message}</p>)
             } 
          </div>  
        </div>
    </div>
  )
}

export default Chatans