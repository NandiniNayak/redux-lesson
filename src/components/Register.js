import React, {useState} from 'react'
import {divStyles, inputStyles, labelStyles} from '../styles'
import {useDispatch} from "react-redux"

const Register = ({history}) => {
    // console.log("HISTORY", history)
    const initialFormState = {
        username: "",
        email: "",
        password: ""
    } 
    const [userDetails,setUserDetails] = useState(initialFormState)
    const dispatch = useDispatch()

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        registerUser(userDetails)
        history.push("/")
    }
    function registerUser(user){
        console.log("USER", user)
        dispatch({
            type:"setLoggedInUser",
            data:user.username
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div style={divStyles}>
                <label style={labelStyles}>Username</label>
                <input style={inputStyles} required type="text" name="username" placeholder="Enter a username" onChange={handleChange}></input>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Email</label>
                <input style={inputStyles} required type="email" name="email" placeholder="Enter an email" onChange={handleChange}></input>
            </div>
            <div style={divStyles}>
                <label style={labelStyles}>Password</label>
                <input style={inputStyles} required type="password" name="password" placeholder="Enter a password" onChange={handleChange}></input>
            </div>
            <input type="submit" value="Register"></input>
            
        </form>
    )
}
export default Register