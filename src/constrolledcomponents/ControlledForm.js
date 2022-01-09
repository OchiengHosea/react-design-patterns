import React, {useEffect, useState} from "react"

export const ControlledForm = () => {
    const [name, setName] = useState('');

    // advantage of controlled form
    // validate while form is edited

    useEffect(() => {
        if (name.length < 2){
            console.log("Name must be less than 2 characters");
        }
    }, [name])
    return(
        <form>
            <input name="name" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="submit"/>
        </form>
    );
}