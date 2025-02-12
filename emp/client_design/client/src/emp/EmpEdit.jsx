import PageHeader from "../header/PageHeader";

function EmpEdit() {
    return (
        <>
            <PageHeader PageNumber={1} />
            <h3>Edit employee</h3>
            <div class="container">
                <div class="mb-3">
                    <label for="ID" class="form-label">ID</label>
                    <div class="form-control" id="ID">???</div>
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <div class="form-control" id="name" >???</div>
                </div>
                <div class="mb-3">
                    <label for="designation" class="form-label">designation</label>
                    <div class="form-control" id="designation">???</div>
                </div>
                <div class="mb-3">
                    <label for="technology" class="form-label">technology</label>
                    <div class="form-control" id="technology">???</div>
                </div>
                <div class="mb-3">
                    <label for="salary" class="form-label">salary</label>
                    <input type="text" class="form-control" id="salary" placeholder="enter your salary"/>
                </div>
                <div class="mb-3">
                    <label for="commision" class="form-label">commision</label>
                    <div class="form-control" id="commision">???</div>
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label">phone</label>
                    <div class="form-control" id="phone">???</div>
                </div>
                <a href="/emps/list"><button class="btn btn-success">Done</button></a>
            </div>
        </>
    )
}
export default EmpEdit;