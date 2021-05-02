const generateLists = teamData => {
 
    const manager = teamData.manager.map(function(title) {
        let managerHtml = `
        <div class="card" style="width: 18rem;">
            <div class= "card-header">
                <h2>${title.name}</h2>
                <h3>Manager</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${title.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${title.email}">${title.email}</a></li>
                <li class="list-group-item">Office Number: ${title.officeNumber}</li>
            </ul>
        </div>
        `
        return managerHtml
    });

    const engineer = teamData.engineer.map(function(title) {
        let engineerHtml = `
        <div class="card" style="width: 18rem;">
            <div class= "card-header">
                <h2>${title.name}</h2>
                <h3>Engineer</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${title.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${title.email}">${title.email}</a></li>
                <li class="list-group-item"> Github: <a href="https://github.com/${title.github}" target="_blank">${title.github}</a></li>
            </ul>
        </div>
        `
        return engineerHtml
    })

    const intern = teamData.intern.map(function(title) {
        let interHtml = `
        <div class="card" style="width: 18rem;">
            <div class= "card-header">
                <h2>${title.name}</h2>
                <h3>Intern</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${title.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${title.email}">${title.email}</a></li>
                <li class="list-group-item"> School: ${title.school}</li>
            </ul>
        </div>
        `
        return interHtml
    })
    return [manager,engineer,intern]
}

module.exports = templateData => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <title>Team Profile</title>
        </head>
        <body>
            <header>
            <h1 class="text-center">My Team</h1>
            </header>
            ${generateLists(templateData)}
        </body>
        </html>    
        `
}



