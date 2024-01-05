import React from 'react'
import './custominput.css'
const CustomInput = ({placeholder,type,label,value,onChange}) => {
  return (
    <div className='customInputContainer'>
        <span>{label}</span>
        <input type={type} name="" id="" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}/>
    </div>
  )
}

export default CustomInput