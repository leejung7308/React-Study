import { useState } from "react";
import UserName from "./UserName";

export default function Hello({age}){
    const [name, setName] = useState("이정");
    const msg = age > 19 ? "성인" : "미성년자";
    return(
        <div className="User">
            <h2 id="name">
                {name}({age}) : {msg}
            </h2>
            <UserName name={name}/>
            <button onClick={()=>{
                setName(name === "이정" ? "정이" : "이정");
            }}
            >
                Change
            </button>
        </div>
    );
}