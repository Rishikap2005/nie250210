import { useState } from "react";

function FullName(){
    const[person,setPerson]=useState({first_name:'rahul',last_name:'dravid'});
    const onChangeFirstName=(event)=>{
        const newPerson={...person};
        newPerson.first_name=event.target.value;
        setPerson(newPerson)
    }
    const onChangeBox=(event)=>{
        const newPerson={...person};
        newPerson[event.target.id]=event.target.value;
        setPerson(newPerson)
    }
    return(
        <>
        <div className="container">
           <div className="form-group">
            <label for="first_name">First Name</label>
            <input type="text" id="first_name" value={person.first_name} onChange={onChangeBox}/>
        </div>
        <div className="form_group">
        <label for="last_name">First Name</label>
        <input type="text" id="last_name" value={person.last_name} onChange={onChangeBox}/>
        </div>
        <div>Full Name:{person.first_name} {person.last_name}</div>
        </div>
        </>
    );
}

export default FullName;