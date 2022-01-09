import React from "react";

export const UncontrolledForm = () => {
    const nameInputRef = React.createRef();
    const ageInputRef = React.createRef();
    const hairColorInputref = React.createRef();

    const handleSubmit = (e) => {
        console.log(nameInputRef.current.value);
        console.log(ageInputRef.current.value);
        console.log(hairColorInputref.current.value);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" ref={nameInputRef}/>
            <input name="age" type="number" placeholder="Age" ref={ageInputRef}/>
            <input name="hairColor" type="text" placeholder="Hair Color" ref={hairColorInputref}/>
            <input type="submit"/>
        </form>
    )
}