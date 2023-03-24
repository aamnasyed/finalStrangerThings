import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react"
import './style.css'; 

import { GetPosts, 
        UserLogin, 
        UserRegister, 
        CreatePosts, 
        Profile 
}  from "./components";

const App = (props) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ allThings, setAllThings ] = useState([]);


    return (

        <BrowserRouter> 
            <section>
                <nav className="navBar">
                    <Link to="/posts"> Posts </Link>
                    <Link to="/register"> Create Account </Link>

                    {
                        isLoggedIn ? "" : (
                            <section clasName="navBar2">
                                <Link to="/createposts"> Create A Post </Link>
                                <Link to="/userLogin"> Login To Account </Link>
                                <Link to="/profile"> Profile </Link>
                            </section>
                        )
                    }

                </nav>

                <Routes>
                    <Route path="/register" element={<UserRegister isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/posts" element={<GetPosts/>} thingsProps={setAllThings}/> 
                    <Route path="/userLogin" element={<UserLogin/>}/>
                    <Route path="/createposts" element={<CreatePosts isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> } />                   
                </Routes>

            </section>
        </BrowserRouter>
    
    )
}

createRoot(document.getElementById("app")).render(<App/>)