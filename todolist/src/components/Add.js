import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Add() {
    const navigate = useNavigate()

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleFnameChange = (e) => {
        setFirstname(e.target.value)
    }
    const handleLnameChange = (e) => {
        setLastname(e.target.value)
    }
    const handleEmailchange = (e) => {
        setEmail(e.target.value)
    }
    const handlePhoneNumChange = (e) => {
        setPhone(e.target.value)
    }

    const handleSubmit = () => {
        console.log({firstname,lastname,email,phone})

        const _blogs = localStorage.getItem('blogs') && localStorage.getItem('blogs').length > 0 ? JSON.parse(localStorage.getItem('blogs')) : []

        localStorage.setItem('blogs', JSON.stringify([..._blogs, { firstname,lastname,email,phone}]))

        navigate('/')
    }

    return (
        <>
            <div style={{width:"100%",textAlign:'center'}} >
            <h3> Form Data </h3>
            <TextField value={firstname} onChange={(e) => handleFnameChange(e)} label="First Name" variant="filled" /> <br />
            <TextField value={lastname} onChange={(e) => handleLnameChange(e)} label="Last Name" variant="filled" />   <br />
            <TextField value={email} onChange={(e) => handleEmailchange(e)} label="Email" variant="filled" />   <br />
            <TextField value={phone} onChange={(e) => handlePhoneNumChange(e)} label="Phone Number" variant="filled" />  <br /><br/>
            <Button onClick={handleSubmit} variant="contained" >  SUBMIT  </Button>
            </div>
        </>
    )
}

export default Add 
