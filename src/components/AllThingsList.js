const COHORT_NAME = '2301-FTB-MT-WEB-FT';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

import { Link } from "react-router-dom"
import { useState } from "react"



const AllThingsList = (props) => {
    const { thingsProps, things, setThings } = props;

    const [searchBar, setSearchBar] = useState("");

    let filteredThings = thingsProps.filter((singleThingsElement) => {
        console.log("this is the singleThings element")
        console.log(singleThingsElement);
        let lowercasedTitle = singleThingsElement.title.toLowerCase()
        console.log(lowercasedTitle)

        return lowercasedTitle.includes(searchBar.toLowerCase())
    })

    async function deletePost (event) { 
        console.log(deletePost)

        try {
            const response = await fetch (`${BASE_URL}/posts/${event.target.id}`, { //is it supposed to be _id of postId
                method: "DELETE", 
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
            const translatedResponse = await response.json();
            console.log(translatedResponse)

            if (translatedResponse.success) {
                let filteredThings = things.filter(( singleThingsElement ) => {
                    if (singleThingsElement._id != event.target.id) {
                        return singleThingsElement
                    }
                })
                setThings(filteredThings)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div> 
            <h1> Strange Things </h1>
                <input
                    type="text"
                    placeholder="Search Engine"
                    onChange={(event) => {
                    setSearchBar(event.target.value)
                    }}
                />

             <section>
                {
                    filteredThings.length ? filteredThings.map((singleThingsElement, title) => { //title or idx
                        return (
                            // key={idx} 
                            <div style={{
                                border: "1px solid black"
                            }} key={singleThingsElement._id}>

                                <Link to={"/posts" + title}> {singleThingsElement.title}</Link>

                              
                                <button className="deleteButton" id={singleThingsElement._id} //event has access to the event id
                                onClick={deletePost}
                                >
                                    Delete {singleThingsElement.name}
                                </button>
                                 
                            
                            </div>
                        )
                    }) : <div> No Data Available  </div>
                }
            </section>
        </div>
       
    )
}


export default AllThingsList;

// import { Link } from "react-router-dom";

// import {useState} from "react"; 

// const AllThingsList = (props) => {
//     const { thingsProps } = props;

//     const [searchBar, setSearchBar] = useState("");

//     let filteredThings = thingsProps.filter((singleThingsElement) => {
//         let lowerCasedName = singleThingsElement.name.toLowerCase();
//         console.log(event.target.value)

//         return lowerCasedName.include(searchBar.toLowerCase())
//     })
//     return (
//         <div> 
//             <h6> List Of Things </h6>
//                 <input
//                     type="text"
//                     placeholder="Search Engine"
//                     onChange={(event) => {
//                         setSearchBar(event.target.value)
//                     }}
//                 />

//              <section>
//                 {
//                     filteredThings.length ? filteredPokemon.map((singleThingsElement, idx) => {
//                         return (
//                             <div> 
//                                 <p> Name: {singleThingsElement.name}</p>

//                                 <Link to={"/posts/" + idx}> Go To {singleThingsElement.name}</Link>
//                             </div>
//                         )
//                     }) : <div> No Data Available </div>
//                 }
//             </section>
//         </div>
       
//     )
// }

// export default AllThingsList