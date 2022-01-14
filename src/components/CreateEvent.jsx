import { useState } from "react";


function CreateEvent({facade, logout, setErrorMessage}){
const init = {location: "", dish: "", price: "", time: ""};
const [eventCredentials, setEventCredentials] = useState(init);

const performCreateEvent = (evt) =>
{
    evt.preventDefault();
    facade.createEvent(eventCredentials.location, eventCredentials.dish, eventCredentials.time, eventCredentials.price, setErrorMessage)
}

const onChange = (evt) =>
{
    setEventCredentials({...eventCredentials, [evt.target.id]: evt.target.value})
}

    return(
        <>
        <div>
            <p><button onClick={logout}>Logout</button></p>
            <h2>Welcome {facade.getUserName()}</h2>
        </div>
        <div>
            <form onChange={onChange}>
                <input placeholder="location" id="location"/>
                <input placeholder="dish" id="dish"/>
                <input placeholder="yyyy-mm-dd hh:mm" id="time"/>
                <input placeholder="price as integer" id="price"/>
                <button onClick={performCreateEvent}>Create Event</button>
            </form>
        </div>
        </>
    )
}

export default CreateEvent;