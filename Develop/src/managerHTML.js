function managerHTML(manager){
    return `<div class="col-sm-4 my-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-white p-3" style="background-color: rgb(113,52,113)"><i class="fa-solid fa-mug-hot"></i> Manager</h5>
        <ul class="list-group">
          <li class="list-group-item">Name: ${managerName}</li>
          <li class="list-group-item">ID: ${managerID}</li>
          <li class="list-group-item">Email: ${managerEmail}</li>
          <li class="list-group-item">Office Number: ${managerOfficeNumber}</li>
        </ul>
      </div>
    </div>
  </div>`
}

module.export = managerHTML()