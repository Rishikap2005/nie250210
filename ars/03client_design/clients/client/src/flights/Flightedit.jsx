import { useParams } from "react-router-dom";
import Pageheader from "../header/Pageheader.jsx/Pageheader";

function Flightedit() {
     const[flight,setflight]=useState({id:'',number:'',airline_name:'',source:'',destination:'',capacity:0,price:0})
     const OnBoxChange=(event)=>{
        const newFlight={...flight}
        newFlight[event.target.id]=event.target.value;
        setflight(newFlight);
    }
    const params=useParams()
    const OnCreate=async()=>{
        try{
            const baseUrl='http://localhost:8080'
            const response=await axios.put(`${baseUrl}/flights/${params(`id`)}`);
            setFlights(response.data);
        }catch(error){
            alert('Server error');
        }
    }
    return (
        <>
        <Pageheader PageNumber={1}/>
            <h3><a href="/flights/list" className="btn btn-light">go back</a>edit ticket price</h3>
            <div className="container">
                <div className="form-group mb-3">
                    <label htmlFor="number" className="form-label">Flight number</label>
                    <div type="text" className="form-control" id="number">{flight.number}</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="air_name" className="form-label">Airline name</label>
                    <div type="text" className="form-control" id="air_name" >{flight.airline_name}</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="source" className="form-label">Source</label>
                    <div type="text" className="form-control" id="source">{flight.source}</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="destination" className="form-label">Destination</label>
                    <div type="text" className="form-control" id="destination">{flight.destination}</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="price" className="form-label">Ticket Price</label>
                    <input type="text" className="form-control" id="price" placeholder="please enter ticket price" value={flight.price} onChange={OnBoxChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="capacity" className="form-label">Capacity</label>
                    <div type="text" className="form-control" id="capacity">{flight.capacity}</div>
                </div>
                <button className="btn btn-warning">update price</button>
            </div>
        </>
    );
}
export default Flightedit;