import { useParams } from "react-router-dom";

const SingleThings = (props) => {
    const {id} = useParams();
    const { thingProps } = props;

    const mySelectedThing = thingsProps[id]

    return (
        <div> 
            <p> Here you can find more details about your selected thing</p>

            <p> Name: {mySelectedThing.name} </p>

            <p> API Url for specific data: {mySelectedThing.url} </p>
        </div>
    )

}