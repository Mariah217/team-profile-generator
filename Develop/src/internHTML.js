function internHTML(intern){
    return `<div class="col-sm-4 my-3">
    <div class="card" id="card3">
      <div class="card-body">
          <h5 class="card-title text-white p-3" style="background-color: rgb(113,52,113)"><i class="fa-solid fa-user-graduate"></i> Intern</h5>
        <ul class="list-group">
          <li class="list-group-item">Name: ${internName}</li>
          <li class="list-group-item">ID: ${internID} </li>
          <li class="list-group-item">Email: ${internEmail}</li>
          <li class="list-group-item">School: ${internSchool}</li>
        </ul>
      </div>
    </div>
  </div>`
}

module.export = internHTML()