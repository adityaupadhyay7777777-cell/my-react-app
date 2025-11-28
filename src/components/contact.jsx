import React from 'react'
import { useState } from 'react'
import './contact.css'

function Contact() {
    const [name,setname] = useState('enter your name');
    const [email,setemail] = useState('enter your email');
    return (
        <div>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name}
                onChange={(e)=>{setname(e.target.value)}} />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email}
                onChange={(e)=>{setemail(e.target.value)}} />
                <input id='submit' type="submit" value="Submit" onClick={(e)=>{
                    e.preventDefault();
                    alert(`name:${name} , email:${email}`)

                }}/>
            </form>
        </div>
    )
}
export default Contact
