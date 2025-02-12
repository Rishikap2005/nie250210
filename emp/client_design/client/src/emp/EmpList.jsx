import PageHeader from "../header/PageHeader";


function EmpList() {
    return (
        
        <>
            <PageHeader PageNumber={1}/>
            <h1>List of employees</h1>
    <div class="container">
    <table class="table table-primary table-striped">
        
            <thead class="table-dark">
                <tr>
                    <th scope="col">number</th>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">designation</th>
                    <th scope="col">technology</th>
                    <th scope="col">salary</th>
                    <th scope="col">commision</th>
                    <th scope="col">phone</th>
                    <th scope="col"></th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>34</td>
                    <td>abi</td>
                    <td>pro</td>
                    <td>It</td>
                    <td>50000</td>
                    <td>60</td>
                    <td>1234567891</td>
                    <td><a href="/emps/edit/67"><button class="btn btn-warning">Edit</button><button class="btn btn-danger">Delete</button></a></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>68</td>
                    <td>pooja</td>
                    <td>pro</td>
                    <td>It</td>
                    <td>100000</td>
                    <td>60</td>
                    <td>8319463786</td>
                    <td><a href="/emps/edit/82"><button class="btn btn-warning">Edit</button><button class="btn btn-danger">Delete</button></a></td>
                </tr>

            </tbody>
    </table>
    </div>
        </>
    )
}
export default EmpList;