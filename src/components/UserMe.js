const COHORT_NAME = '2301-FTB-MT-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

// import React from "react"
import { useEffect, useState } from "react";

const UserMe = (props) => {

    const [ myData, setMyData ] = useState({})
    const [ myPosts, setMyPosts] = useState([])
    const [ myMessages, setMyMessages ] = useState([])
    const [ myId, setMyId ] = useState("")
    const [ myUsername, setMyUsername ] = useState("")


    useEffect(() => {
        console.log(localStorage.getItem("token"))

        if (localStorage.getItem("token")) {
            props.isLoggedIn(true);
            // async function name goes here
            fetchingData();
        } else {
            props.isLoggedIn(false)
            console.log("No token exist")
        }

        async function fetchingData () {
            try {
            const response = await fetch (`${BASE_URL}/users/me`, {
                headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                myData:{
                    post: myPosts,
                    messages: myMessages,
                    id: myId, 
                    username: myUsername
                }
            })
        })
            //am i missing something here

            const result = await response.json();
            console.log("Below is our personal account data:")
            console.log(result)
            setMyData(translatedData.data)
        }   catch (error) {
                console.log(error);
        }
        }
}, [])
// [] ==> is this for the mounthing phase? make sure to look it up later
    return (
        <div> 
            {
                props.isLoggedIn ? <h3> Welcome {myData.username}</h3> : <h3> Please login or register for a new account</h3>
            }
        </div>
    )
}


export default UserMe