function managerHTML(manager){
    return `<div class="col-sm-4 my-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Manager</h5>
        <ul class="list-group">
          <li class="list-group-item">Name: ${managerName} </li>
          <li class="list-group-item">ID: ${managerID} </li>
          <li class="list-group-item">Email: ${managerEmail}</li>
          <li class="list-group-item">Office Number: ${managerOfficeNumber} </li>
        </ul>
      </div>
    </div>`
}

module.export = managerHTML