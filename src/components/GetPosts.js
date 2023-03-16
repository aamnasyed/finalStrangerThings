const COHORT_NAME = '2301-FTB-MT-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

import { useState, useEffect } from "react";

const GetPosts = () => {
    const [ strangeThings, setStrangeThings ] = useState([])

    useEffect (() => {

        const fetchStrangeThings = async () => {
            try {
                const response = await fetch (`${BASE_URL}/posts`) 
                
                const translatedData = await response.json();

                const actualStrangeThingsData = translatedData.data.posts;
                console.log(actualStrangeThingsData)
                setStrangeThings(actualStrangeThingsData);
                
            } catch (error) {
                console.log(error)
            }      
        }
        fetchStrangeThings();
}, [])

    return (
        <div>
        { 
            strangeThings.length ? strangeThings.map((singleStrangeThingsElement, idx) => {
                return (
                    <div key={idx}>
                        <h2> {singleStrangeThingsElement.title} </h2>
                    </div>
                )
            }) : <div> No Data Available </div>
      }
    </div>
    )
}

export default GetPosts