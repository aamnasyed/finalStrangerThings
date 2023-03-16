const COHORT_NAME = '2301-FTB-MT-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const DeletePost = (props) => {

    const { title}
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
            return result
        } catch (error) {
            console.log(error)
        }
    }

    if (result.success) {
        let filteredThings
    }





                <form>
                    {/* <input
                        type="text"
                        placeholder="what you want to delete??"
                        onChangeEvent={(event) => {
                            ...(event.target.value)
                        }}
                    />  */}

                <button type="submit"> Submit </button>    
                </form> 

}