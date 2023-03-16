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
    }, []);

    const deletePost = async () => {
        try {
            const response = await fetch(`${BASE_URL}/posts/_id`, {
                method: "DELETE", 
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : `Bearer ${TOKEN_STRING_HERE}`
                }
            });
            const result = await response.json(); 
            console.log(result);

            if (resultResponse.success) {
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
              <form>
                    <input
                        type="text"
                        placeholder="what you want to delete??"
                        onChangeEvent={(event) => {
                            setPost(event.target.value)
                        }}
                    /> 

                <button type="submit"> Submit </button>    
                </form> 
        </section>
    )

}