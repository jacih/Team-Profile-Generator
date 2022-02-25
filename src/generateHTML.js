const manager = require('../lib/manager');
const engineer = require('../lib/engineer');
const intern = require('../lib/intern');

function generateHTML(employeeTeam) {

  let cards = [];
  
  for (let i = 0; i < employeeTeam.length; i++) {
    const employee = employeeTeam[i];
    const role = employee.getRole();

    if (role === 'Manager') {
      let manCard = `
      <div class="col-4 mt-4">
        <div class="card h-100">
          <div class="card-header">
            <h3>${manager.name}</h3>
            <h4>Manager</h4><i class="material-icons">content_paste</i>
          </div>
          <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeN}</p>
          </div>
        </div>
      </div>
      `;
      cards.push(manCard);
    } else if (role === 'Engineer') {
      let engCard = `
      <div class="col-4 mt-4">
        <div class="card h-100">
          <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
          </div>
          <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
          </div>
        </div>
      </div>
      `;
      cards.push(engCard);
    } else if (role === 'Intern') {
      let intCard = `
      <div class="col-4 mt-4">
        <div class="card h-100">
          <div class="card-header">
            <h3>${intern.name}</h3>
            <h4>Intern</h4><i class="material-icons">assignment_ind</i>
          </div>
          <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
              <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
              <p class="school">School: ${intern.school}</p>
          </div>
        </div>
      </div>
      `;
      cards.push(intCard);
    }
  }
  let cardsHTML = cards.join(''); 
  let htmlContent = renderBoilerplate(cardsHTML);
  return htmlContent;
}

function renderBoilerplate(cardsHTML) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="./dist/style.css">
        <title>Team Profile Generator</title>
      </head>
      <body>
        <header>
          <nav class="navbar-light">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1 text-center">Team Profile</span>
            </div>
          </nav>
        </header>
        <main>
          <section id="infoContainer" class="row-col-2">
            <div class="header text-center bg-info" id="teamMemberContainer">
              <h2>Team Members:</h2>
                <div class="row ms-1" id="card-container">
                  ${cardsHTML}
                </div>
            </div>
          </section>
        </main>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
      </body>
    </html>
`;
}

module.exports = generateHTML;