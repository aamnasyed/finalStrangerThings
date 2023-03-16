// const COHORT_NAME = '2301-FTB-MT-WEB-FT';
// const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;



const AllThingsList = (props) => {
    const { thingsProps } = props;

    const [searchBar, setSearchBar] = useState("");

    let filteredThings = thingsProps.filter((singleThingsElement) => {
        let lowerCasedName = singleThingsElement.name.toLowerCase();
        console.log(event.target.value)

        return lowerCasedName.include(searchBar.toLowerCase())
    })
    return (
        <div> 
            <h6> List Of Things </h6>
                <input
                    type="text"
                    placeholder="Search Engine"
                    onChange={(event) => {
                        setSearchBar(event.target.value)
                    }}
                />

             <section>
                {
                    filteredThings.length ? filteredThings.map((singleThingsElement, idx) => {
                        return (
                            <div> 
                                <p> Name: {singleThingsElement.name}</p>

                                <Link to={"/posts/" + idx}> Go To {singleThingsElement.name}</Link>
                            </div>
                        )
                    }) : <div> No Data Available </div>
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

// export default AllThingsList;