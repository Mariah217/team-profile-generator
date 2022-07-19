function generateHTML(cards) {
    return `<!DOCTYPE html>
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
        <header>My Team Profile</header>
        <div class="container">
            <div class="row d-flex justify-content-center">
                ${cards}
            </div>
        </div>
    </body>
    </html>`
}

module.exports = generateHTML