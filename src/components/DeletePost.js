import { useEffect } from "react"

const COHORT_NAME = '2301-FTB-MT-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const DeletePost = (props) => {

    const { things, setTitle, setPrice, setDiscription, setLocation, setPost } = props;

    useEffect(() => {
        console.log(localStorage.getItem("token"))
        if (localStorage.getItem("token")) {
            props.setIsLoggedIn(true)
            console.log("this is working")
        } else {
            props.setIsLoggedIn(false);
            console.log("no token exists")
        }
        fetchThings(); //we might have to omit this later but idk
    }, []);

    const deletePost = async (event) => {
        console.log(event.target.value)
        try {
            const response = await fetch(`${BASE_URL}/posts/${event.target.value}`, {
                //${BASE_URL}/posts/_id
                //${BASE_URL}${event.target.value}
                method: "DELETE", 
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : `Bearer ${localStorage.getItem("token")}`
                     // ${TOKEN_STRING_HERE}
                }
            });
            const result = await response.json(); 
            console.log(result);

            if (result.success) {
                // or (resultResponse.success)
                let filteredThings = things.filter((singleThingsElement) => {
                    if (singleThingsElement.id != event.target.value) {
                        return singleThingsElement
                    }
                })
                setPost(filteredThings)
            }
            // return result
        } catch (error) {
            console.log(error)
        
        }
    }

    return ( 
        <section> 
                {
                    things.length ? things.map((singleThingsElement) => {
                        return ( 
                            <div key={singleThingsElement.id}> 
                                <p> Title: {singleThingsElement.title} </p>
                                <p> Price: {singleThingsElement.price} </p>
                                <p> Description: {singleThingsElement.description} </p>
                                <p> Location: {singleThingsElement.location} </p>
                                <button onClick={deletePost} value={singleThingsElement.id}> </button>
                            </div>

                        )
                    }): <div> No Data Available </div>
                }
              <form>
                    <input
                        type="text"
                        placeholder="what you want to delete??"
                        onChangeEvent={(event) => {
                        // onChangeEvent={(event) => {
                            setPost(event.target.value)
                        }}
                    /> 

                <button type="submit"> Submit </button>    
                </form> 
        </section>
    )

}

export default DeletePost