import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react"
import './style.css'; 

import { UserRegister, UserLogin, UserMe, GetPosts, PostPosts, AllThingsList }  from "./components";

const App = () => {
    //make some state for login 
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ allThings, setAllThings ] = useState([]);

    return (

        <BrowserRouter> 
            <section>
                <nav>
                    <Link to="/posts"> Posts </Link>
                    {
                        isLoggedIn ? "" : (
                            <section>
                                <Link to="/register"> Create Account </Link>
                                <Link to="/login"> Login To Account </Link>
                                {/* <Link to="/userme"> User Information </Link> */}
                                <Link to="/createposts"> Make A Post</Link>
                            </section>
                        )
                    }
                
                </nav>

                <Routes>
                    <Route path="/register" element={<UserRegister isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/login" element={<UserLogin/>} />
                    <Route path="/posts" element={<GetPosts setAllThings={setAllThings}/>} />
                    <Route path="/post" element={<AllThingsList thingsProps={allThings}/>} />
                    <Route path="/createposts" element={<PostPosts isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> } />
                    <Route path="/userme" element={<UserMe isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> } />
                </Routes>

                {/* <Routes>
                    <Route path="/register" element={<UserRegister isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/login" element={<UserLogin/>} />
                    <Route path="/posts" element={<GetPosts setAllThings={setAllThings}/>} />
                    <Route path="/post" element={<AllThingsList allThings={allThings}/> } />
                    <Route path="/createposts" element={<PostPosts isLoggedIn= {isLoggedIn } setIsLoggedIn = {setIsLoggedIn}/> } />
                    <Route path="/userme" element={<UserMe isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} /> } />
                </Routes> */}
            </section>
        </BrowserRouter>
    
    )
}

createRoot(document.getElementById("app")).render(<App/>)