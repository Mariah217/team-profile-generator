function managerHTML(manager){
    return `<div class="col-sm-4 my-3">
    <div class="card" id="card1">
      <div class="card-body">
        <h5 class="card-title text-white p-3" style="background-color: rgb(113,52,113)"><i class="fa-solid fa-mug-hot"></i> Manager</h5>
        <ul class="list-group">
          <li class="list-group-item">Name: ${manager.name}</li>
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email:<a href="mailto: ${manager.email}">${manager.email}</a></li>
          <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
      </div>
    </div>
  </div>`
}

module.exports = managerHTML