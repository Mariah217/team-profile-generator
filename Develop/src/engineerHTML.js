function engineerHTML(engineer){
    return `<div class="col-sm-4 my-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <ul class="list-group">
          <li class="list-group-item">Name: ${engineerName} </li>
          <li class="list-group-item">ID: ${engineerID} </li>
          <li class="list-group-item">Email: ${engineerEmail}</li>
          <li class="list-group-item">GitHub: ${engineerGithub} </li>
        </ul>
      </div>
    </div>`
}

module.export = engineerHTML()