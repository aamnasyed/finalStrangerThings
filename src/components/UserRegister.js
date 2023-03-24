const COHORT_NAME = '2301-FTB-MT-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const UserRegister = () => {

  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate()

  async function createNewAccount(e) {
    e.preventDefault();

    try {
      console.log("New username is: " + newUsername)
      console.log("New password is: " + newPassword)

        if (newUsername.length < 8) {
        alert("Username does not meet requirement, please try again");
        return;
      } else if (newPassword.length < 8) {
        alert("Password does not meet requirements, please try again")
        return ;
      }

      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify ({
          user: {
            username: newUsername,
            password: newPassword, 
          }
        })
      })

      const translatedData = await response.json(); 

      console.log(translatedData)

      if (!translatedData.success) {
        alert("Unable to create account, please try again")
      } else {
        const myJWT = translatedData.data.token;

        localStorage.setItem("token", myJWT)

        navigate("/posts")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return ( 
    <section>
      <h3>Create A New Account</h3>

      <form onSubmit={createNewAccount}>
        <input 
          type="text" 
          placeholder="New Username"
          value={newUsername}
          onChange={(event) => setNewUsername(event.target.value)}
        />
        <input 
          type="text" 
          placeholder="New Password"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
        />
        <button type="submit"> Create Account</button>
      </form>
    </section>
  )
}

export default UserRegister








