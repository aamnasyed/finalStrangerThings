const COHORT_NAME = '2301-FTB-MT-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const CreatePosts = (props) => {
    const [createPost, setCreatePost] = useState({});
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ location, setLocation ] = useState("") 
    console.log(props)

    const navigate = useNavigate()

    useEffect(() => {
        console.log(localStorage.getItem("token"))
        if (localStorage.getItem("token")) {
            props.setIsLoggedIn(true)
            console.log("this is working")
        } else {
            props.setIsLoggedIn(false);
            console.log("no token exists")
        }
    }, []);

    async function makePost(e) {
        e.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}/posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,

                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
                },
                body: JSON.stringify({
                    post: {
                       title: title,
                       description: description,
                       price: price, 
                       location: location
                    }
                })
            });
            const result = await response.json(); 
            console.log(result); 
            setCreatePost(result);
            navigate("/posts")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={makePost}>
            <h3> Create A Post</h3>
            <input 
                type="text" 
                placeholder="Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
             <input 
                type="text" 
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
             <input 
                type="text" 
                placeholder="Price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            />
             <input 
                type="text" 
                placeholder="Location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
            />
            <button> Submit </button>
        </form>
    );
};

export default CreatePosts
