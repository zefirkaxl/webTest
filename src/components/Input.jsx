import React from 'react'


const Input = ({error,label,...props})=>{
  return (
    <div className=' flex-col flex'>
      <label >{label}</label>
      <input {...props} required />
      {error && <div>{error}</div>}
    </div>
  )
}

export default Input