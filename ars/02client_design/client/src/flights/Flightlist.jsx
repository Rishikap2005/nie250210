import { useState } from "react";
import Pageheader from "../header/Pageheader.jsx/Pageheader";


function Flightlist() {
    const [flights,setFlights]=useState([
        {id:'1010',num:'AI 765',airline_name:'Air India',source:'Mysore',destination:'Trichy',capacity:100,price:5000.0},
        {id:'1011',num:'AI 765',airline_name:'Air India',source:'Mysore',destination:'Trichy',capacity:100,price:5000.0},
        {id:'1018',num:'AI 765',airline_name:'Air India',source:'Mysore',destination:'Trichy',capacity:100,price:5000.0},
    ]);
    return (
        <>
        <Pageheader PageNumber={1}/>
            <h3>List of flights</h3>
            <div className="container">
                <table className="table table-success table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">flight_number</th>
                            <th scope="col">Airline name</th>
                            <th scope="col">Source</th>
                            <th scope="col">Destination</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {flights.map((flight)=>{
                            return(
                            <tr>
                            <th scope="row">(flight.num)</th>
                            <td className="text-primary">(flight.airline_name)</td>
                            <td>(flight.source)</td>
                            <td>(flight.destination)</td>
                            <td><a href="/flights/edit/$(flight.id)" className="btn btn-warning">edit</a>
                                <button className="btn btn-danger">delete</button></td>
                        </tr>
                        );
                        })
                        }
                    
                        

                    </tbody>
                </table>
            </div>

        </>
    );
}

export default Flightlist;