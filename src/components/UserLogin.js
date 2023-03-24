const COHORT_NAME = '2301-FTB-MT-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

// import React from "react"
import { useState } from "react";
import {useNavigate } from "react-router-dom"

const UserLogin = (props) => {
    const [ myUsername, setMyUsername] = useState ("");
    const [ myPassword, setMyPassword] = useState ("");

    const navigate= useNavigate()

    async function loginFunction(e) {
        console.log("this works")
        e.preventDefault();

        try { 
            const response = await fetch (`${BASE_URL}/users/login`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user: {
                        username: myUsername,
                        password: myPassword
                    }
                })
            })
            
            const result = await response.json();
            console.log(result);
           //Set token (if reusult was successfull)
           if (!result.success) {
            alert("Password or username is incorrect, please try again.")
           } else {
            const myJWT = result.data.token;

            localStorage.setItem("token", myJWT)
            navigate("/posts"); 
           }
            
        }   catch (error) {
            console.log(error);
        }
    }
    return (
       <section> 
            <h3> Login To Account Below </h3>
            <form onSubmit={loginFunction}>
                <input 
                    type="text"
                    placeholder= "username"
                    value={myUsername}
                    onChange={(event) => setMyUsername(event.target.value)}
                />
                <input 
                    type="text"
                    placeholder="password"
                    value={myPassword}
                    onChange={(event) => setMyPassword(event.target.value)}
                /> 
                <button type="submit"> Login to Account </button> 
            </form> 
       </section>
    )
}

export default UserLogin