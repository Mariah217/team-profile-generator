function engineerHTML(engineer){
    return `<div class="col-sm-4 my-3">
    <div class="card" id="card2">
      <div class="card-body">
          <h5 class="card-title text-white p-3" style="background-color: rgb(113,52,113)"><i class="fa-solid fa-glasses"></i> Engineer</h5>
        <ul class="list-group">
          <li class="list-group-item">Name: ${engineer.name}</li>
          <li class="list-group-item">ID: ${engineer.id}</li>
          <li class="list-group-item">Email: ${engineer.email}</li>
          <li class="list-group-item">GitHub: ${engineer.github} </li>
        </ul>
      </div>
    </div>
  </div>`
}

module.exports = engineerHTML