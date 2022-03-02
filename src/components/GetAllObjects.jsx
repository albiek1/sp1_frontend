import { useEffect } from "react";
import { useState } from "react"

function GetAllObjects({facade, setErrorMessage}){
    const [conference, setConf] = useState({name: '', location: '', capacity: '', date: '', time: ''});

    console.log(facade);

    const updateConfs = (data) => {
        console.log('data', data);
        setConf({name: data.name, location: data.location, capacity: data.capacity, date: data.date, time: data.time});
    };

    useEffect(() => {
        facade.fetchData('conference/all', updateConfs, setErrorMessage);
    }, [facade, setErrorMessage]);

    return(
        <>
        <div>
            <h2>Get all conferences</h2>
            "{conference.name}"
        </div>
        </>
    );
}

export default GetAllObjects;