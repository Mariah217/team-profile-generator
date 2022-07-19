function internHTML(intern){
    return `<div class="col-sm-4 my-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <ul class="list-group">
          <li class="list-group-item">Name: ${internName} </li>
          <li class="list-group-item">ID: ${internID} </li>
          <li class="list-group-item">Email: ${internEmail}</li>
          <li class="list-group-item">School: ${internSchool} </li>
        </ul>
      </div>
    </div>`
}

module.export = internHTML()