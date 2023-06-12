import React from 'react'
import Chatans from './chatans'
import Form from './form'

const Main = ({loading, chatbox, state, handleSubmit, onChange, input}) => {
  return (
    <div className='main-page'>
        {loading && (
        <div className='loading'>
          <img src='./bird.png' alt='bird' className='im3' />
          <h1 className='hload'>M-ChatBox</h1>
        </div>
        )}
        <div className='main-page-res'>
          {chatbox.map((message, index)=>(
            <Chatans key={index} message={message} state={state}/>
          ))}
        </div>
        <Form handleSubmit={handleSubmit} onChange={onChange} input={input} />
    </div>
  )
}

export default Main