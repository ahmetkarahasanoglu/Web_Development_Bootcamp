import { useState } from "react";

export default function Deneme(props) {
    const [name, setName] = useState("");
    const [birthyear, setBirthyear] = useState("");

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updateBirthyear = (e) => {
        setBirthyear(e.target.value);
    }

    return (
        <>
            <h3>Name is: {name}</h3>
            <label htmlFor="name" name="the_name">Name: </label>
            <input type="text" id="name" placeholder="Please type your name" value={name} onChange={updateName} />
            <br /><br />
            <h3>Birthyear is: {birthyear}</h3>
            <label htmlFor="birthYear" name="the_birthYear">Birthyear: </label>
            <input type="number" id="name" placeholder="Please type your birthyear" value={birthyear} onChange={updateBirthyear} />                        
        </>
    )
}