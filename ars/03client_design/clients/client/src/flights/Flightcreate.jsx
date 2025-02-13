import { useState } from "react";
import Pageheader from "../header/Pageheader.jsx/Pageheader";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Flightcreate() {
    const[flight,setflight]=useState({id:'',number:'',airline_name:'',source:'',destination:'',capacity:0,price:0})
    const OnBoxChange=(event)=>{
        const newFlight={...flight}
        newFlight[event.target.id]=event.target.value;
        setflight(newFlight);
    }
    const navigate=useNavigate();
    const OnCreate=async()=>{
        try{
            const baseUrl='http://localhost:8080'
            const response=await axios.post(`${baseUrl}/flights`,{...flight,
                capacity:parseInt(flight.capacity),
                price:parseFloat(flight.price)
            });
            alert(response.data.message)
            navigate('/flights/list')
        }catch(error){
            alert('Server error');
        }
    }
    return (
        <>
        <Pageheader PageNumber={2}/>
            <h1><a href="/flights/list" className="btn btn-light">Go back</a>New flight</h1>

            <div className="container">
                <div className="form-group mb-3">
                    <label htmlFor="number" className="form-label">Flight number</label>
                    <input type="text" className="form-control" id="number" placeholder="please enter fight number" value={flight.number} onChange={OnBoxChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="airline_name" className="form-label">Airline name</label>
                    <input type="text" className="form-control" id="airline_name" placeholder="please enter airline namwe" value={flight.airline_name} onChange={OnBoxChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="source" className="form-label">source</label>
                    <input type="text" className="form-control" id="source" placeholder="please enter source" value={flight.source} onChange={OnBoxChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="destination" className="form-label">destination</label>
                    <input type="text" className="form-control" id="destination" placeholder="please enter destination" value={flight.destination} onChange={OnBoxChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="price" className="form-label">price</label>
                    <input type="text" className="form-control" id="price" placeholder="please enter price" value={flight.price} onChange={OnBoxChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="capacity" className="form-label">capacity</label>
                    <input type="text" className="form-control" id="capacity" placeholder="please enter capacity" value={flight.capacity} onChange={OnBoxChange}/>
                </div>
                <button className="btn btn-success" onClick={OnCreate}>Create flight</button>
            </div>
        </>
    );
}

export default Flightcreate;