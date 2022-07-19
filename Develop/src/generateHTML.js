const generateHTML=(
    {
        managerName, managerID, managerEmail, managerOfficeNumber, engineerName, engineerID, engineerEmail, engineerGithub, internName, internID, internEmail, internSchool, 
    }
) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="./style.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
      <title>Team</title>
    </head>
    
    <body>
        <header>My Team</header>
        <div class="container">
            <div class="row">
              <div class="col-sm-4 col-md-4 col-lg-4">
                <div class="card text-black bg-light mb-3" style="max-width: 18rem;">
                    <div class="card-header text-white" style="background-color: rgb(113,52,113)
                    ">${managerName}
                    <div id="manager"><i class="fa-solid fa-mug-hot"></i> Manager</div>
                </div>
                    
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${managerID}</li>
                            <li class="list-group-item">E-mail: ${managerEmail}</li>
                            <li class="list-group-item">Office Number: ${managerOfficeNumber}</li>
                          </ul>
                    </div>
                  </div>
              </div>
              <div class="col-sm-4 col-md-4 col-lg-4">
                <div class="card text-black bg-light mb-3" style="max-width: 18rem;">
                    <div class="card-header text-white" style="background-color: rgb(113,52,113)
                    ">${engineerName}
                    <div id="engineer"><i class="fa-solid fa-glasses"></i> Engineer</div>
                </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${engineerID}  </li>
                            <li class="list-group-item">E-mail: ${engineerEmail}</li>
                            <li class="list-group-item">GitHub: ${engineerGithub} </li>
                          </ul>
                    </div>
                  </div>
              </div>
              <div class="col-sm-4 col-md-4 col-lg-4">
                <div class="card text-black bg-light mb-3" style="max-width: 18rem;">
                    <div class="card-header text-white" style="background-color: rgb(113,52,113)
                    ">${engineerName}
                 <div id="engineer"><i class="fa-solid fa-glasses"></i> Engineer</div>    
                </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${engineerID} </li>
                            <li class="list-group-item">E-mail: ${engineerEmail}</li>
                            <li class="list-group-item">GitHub: ${engineerGithub}</li>
                          </ul>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row2" id="row2">
            <div class="col-sm-3 col-md-3 col-lg-3">
                <div class="card text-black bg-light mb-3" style="max-width: 18rem;">
                    <div class="card-header text-white" style="background-color: rgb(113,52,113)
                    ">${engineerName}
                    <div id="engineer"><i class="fa-solid fa-glasses"></i> Engineer</div> 
                </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${engineerID} </li>
                            <li class="list-group-item">E-mail: ${engineerEmail}</li>
                            <li class="list-group-item">GitHub: ${engineerGithub} </li>
                          </ul>
                    </div>
                  </div>
              </div>
              <div class="col-sm-3 col-md-3 col-lg-3">
                <div class="card text-black bg-light mb-3" style="max-width: 18rem;">
                    <div class="card-header text-white" style="background-color: rgb(113,52,113)
                    ">${internName}
                <div id="intern"><i class="fa-solid fa-user-graduate"></i> Intern</div>    
                </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${internID}</li>
                            <li class="list-group-item">E-mail: ${internEmail}</li>
                            <li class="list-group-item">School: ${internSchool} </li>
                          </ul>
                    </div>
                  </div>
              </div>
        </div>
    </body>
    `

