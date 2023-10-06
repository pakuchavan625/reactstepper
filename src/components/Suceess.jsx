import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Suceess = () => {
const navigate = useNavigate()
  return (
    <>
    <div>Your Registered successfully with our Page</div>
    <Button variant="outlined" className="nextButon" onClick={()=>{
navigate('/')
    }} style={{ marginLeft: "10px" }}
     >Back to home</Button>
</>
    
  )
}

export default Suceess