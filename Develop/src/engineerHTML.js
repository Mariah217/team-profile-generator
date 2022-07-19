function engineerHTML(engineer){
    return `<div class="col-sm-4 my-3">
    <div class="card">
      <div class="card-body">
          <h5 class="card-title text-white p-3" style="background-color: rgb(113,52,113)"><i class="fa-solid fa-glasses"></i> Engineer</h5>
        <ul class="list-group">
          <li class="list-group-item">Name: ${engineerName}</li>
          <li class="list-group-item">ID: ${engineerID}</li>
          <li class="list-group-item">Email: ${engineerEmail}</li>
          <li class="list-group-item">GitHub: ${engineerGithub} </li>
        </ul>
      </div>
    </div>
  </div>`
}

module.export = engineerHTML()