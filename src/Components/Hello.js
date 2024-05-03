import { useState } from "react";

export default function Hello(){
    const [name, setName] = useState("이정");
    function changeName(){
        setName(name === "이정" ? "정이" : "이정")
    }
    return(
        <div>
            <h1>State</h1>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>Change</button>
        </div>
    );
}