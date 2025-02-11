import Pageheader from "../header/Pageheader.jsx/Pageheader";

function Flightcreate() {
    return (
        <>
        <Pageheader PageNumber={2}/>
            <h1><a href="/flights/list" className="btn btn-light">Go back</a>New flight</h1>

            <div className="container">
                <div className="form-group mb-3">
                    <label htmlFor="number" className="form-label">Flight number</label>
                    <input type="text" className="form-control" id="number" placeholder="please enter fight number"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="airline_name" className="form-label">Airline name</label>
                    <input type="text" className="form-control" id="airline_name" placeholder="please enter airline namwe"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="source" className="form-label">source</label>
                    <input type="text" className="form-control" id="source" placeholder="please enter source"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="destination" className="form-label">destination</label>
                    <input type="text" className="form-control" id="destination" placeholder="please enter destination"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="price" className="form-label">price</label>
                    <input type="text" className="form-control" id="price" placeholder="please enter price"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="capacity" className="form-label">capacity</label>
                    <input type="text" className="form-control" id="capacity" placeholder="please enter capacity"/>
                </div>
                <button className="btn btn-success">Create flight</button>
            </div>
        </>
    );
}

export default Flightcreate;