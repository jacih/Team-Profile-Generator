const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

let manCard = `
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3 class="emp-name">${manager.getName()}</h3>
        <h4 class="emp-role">${manager.getRole()}
          <i class="fa fa-briefcase" aria-hidden="true"></i>
        </h4>
      </div>
      <div class="card-body">
        <p class="id">ID: ${manager.getId()}</p>
        <p class="email">Email: 
          <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
        </p>
        <p class="specInfo">Office Number: ${manager.getofficeN()}</p>
      </div>
    </div>
  </div>
  `;

let engCard = `
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3 class="emp-name">${engineer.getName()}</h3>
        <h4 class="emp-role">${engineer.getRole()}
          <i class="fa fa-laptop" aria-hidden="true"></i>
        </h4>
      </div>
      <div class="card-body">
        <p class="id">ID: ${engineer.getId()}</p>
        <p class="email">Email: 
          <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
        </p>
        <p class="specInfo">Github: 
          <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a>
        </p>
      </div>
    </div>
  </div>
  `;

let intCard = `
  <div class="col-4 mt-4">
    <div class="card h-100">
      <div class="card-header">
        <h3 class="emp-name">${intern.getName()}</h3>
        <h4 class="emp-role">${intern.getID()}
        <i class="fa fa-graduation-cap" aria-hidden="true"></i>
        </h4>
      </div>
      <div class="card-body">
        <p class="id">ID: ${intern.id}</p>
          <p class="email">Email: 
            <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
          </p>
          <p class="specInfo">School: ${intern.getSchool()}</p>
      </div>
    </div>
  </div>
  `;

function generateCards(employeeTeam) {

  let cards = [];

  for (let i = 0; i < employeeTeam.length; i++) {
    const employee = employeeTeam[i];
    switch(employee.getRole()) {
      case 'Manager':
        const manager = new Manager(employee.id, employee.name, employee.email, employee.specInfo);
        cards.push(manCard);
        break;
      case 'Engineer':
        const engineer = new Engineer(employee.id, employee.name, employee.email, employee.specInfo);
        cards.push(engCard);
        break;
      case 'Intern':
        const intern = new Intern((employee.id, employee.name, employee.email, employee.specInfo);
        cards.push(intCard);
        break;
    }
  }
  let cardsHTML = cards.join(''); 
  return cardsHTML;
}

function renderBoilerplate() {
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
                  ${generateCards(employeeTeam)}
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