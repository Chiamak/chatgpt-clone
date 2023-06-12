import React from 'react'

const Form = ({handleSubmit, input, onChange}) => {
  return (
    <form className='main-page-box' onSubmit={handleSubmit}>
        <input value={input} onChange={onChange}/>
        <button typeof='submit'>
        <svg stroke="white" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
    </form>
  )
}

export default Form