import PageHeader from "../header/PageHeader"

function EmpCreate() {
  return (
    <>
    <PageHeader PageNumber={2}/>
    <h3><a href="/emps/list"><button class="btn btn-warning">Go back</button></a>add employee</h3>
    <div class="container">
    <div class="mb-3">
        <label for="ID" class="form-label">ID</label>
        <input type="text" class="form-control" id="ID" placeholder="ID"/>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="enter your name"/>
      </div>
      <div class="mb-3">
        <label for="designation" class="form-label">designation</label>
        <input type="text" class="form-control" id="designation" placeholder="enter your designation"/>
      </div>
      <div class="mb-3">
        <label for="technology" class="form-label">technology</label>
        <input type="text" class="form-control" id="technology" placeholder="enter your technology"/>
      </div>
      <div class="mb-3">
        <label for="salary" class="form-label">salary</label>
        <input type="text" class="form-control" id="salary" placeholder="enter your salary"/>
      </div>
      <div class="mb-3">
        <label for="commision" class="form-label">commision</label>
        <input type="text" class="form-control" id="commision" placeholder="enter your commision"/>
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">phone</label>
        <input type="text" class="form-control" id="phone" placeholder="enter your phone number"/>
      </div>
      </div>

    </>
  )
}
export default EmpCreate;