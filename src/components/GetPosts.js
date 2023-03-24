import { useState, useEffect } from "react"
import { AllThingsList } from "./index.js"

const COHORT_NAME = '2301-FTB-MT-WEB-FT'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const GetPosts = () => {
    const [strangeThings, setStrangeThings] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${BASE_URL}/posts`)
                const result = await response.json()
                const actualStrangeThingsData = result.data.posts
                setStrangeThings(actualStrangeThingsData)
            } catch (error) {
                console.log(error)
            }
        } 
        fetchPosts()
    }, [])
   

    return (
        <div>
            <AllThingsList thingsProps={strangeThings}/>
        </div>
    )
}

export default GetPosts