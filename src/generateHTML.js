function generateCard(data) {
  const cards = data.map(card => {
    return     `<div class='col-4 mt-4'>
                  <div class='card h-100'>
                    <div class='card-header'>
                      <h3 class='emp-name'>${card.getName()}</h3>
                      <h4 class='emp-role'>${card.getRole()}
                        ${card.getRole() === 'Manager' ? `<i class='fa fa-briefcase' aria-hidden='true'></i>` : ''}
                        ${card.getRole() === 'Engineer' ? `<i class="fa fa-laptop" aria-hidden="true"></i>` : ''}
                        ${card.getRole() === 'Intern' ? `<i class="fa fa-graduation-cap" aria-hidden="true"></i>` : ''}
                      </h4>
                    </div>
                    <div class='card-body'>
                      <p class='id'>ID: ${card.getId()}</p>
                      <p class='email'>Email:<a href='mailto:${card.getEmail()}'>${card.getEmail()}</a></p>
                      ${card.getRole() === 'Manager' ? `<p class ='specInfo'>Office Number: ${card.getOfficeN()}</p>` : ''}
                      ${card.getRole() === 'Engineer' ? `<p class ='specInfo'>Github: <a href='http://www.github.com/${card.getGithub()}' target='_blank'>${card.getGithub()}</a></p>` : ''}
                      ${card.getRole() === 'Intern' ? `<p class ='specInfo'>School: ${card.getSchool()}</p>`: ''} 
                      </ul>
                    </div>
                  </div>
                </div>`;
  });
  return cards.join('');
}

function generateHTML(data) {
  return `
    <!DOCTYPE html>
    <html lang='en'>
    
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'>
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' 
        integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk' crossorigin='anonymous'>
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'>
        <link rel='stylesheet' href='./dist/style.css'>
        <title>Team Profile Generator</title>
      </head>
     
      <body>

        <header>
          <nav class='navbar-light'>
            <span class='navbar-brand mb-50 h1 w-100 text-center'>My Team Profile</span>
          </nav>
        </header>

        <main>
          <section id='infoContainer' class='row-col-2'>
            <div class='header text-center bg-info' id='teamMemberContainer'>
              <h2>Employees</h2>
                <div class='row ms-1' id='card-container'>
                  ${generateCard(data)}
              </div>
            </div>
          </section>
        </main>

      <script src='https://code.jquery.com/jquery-3.5.1.slim.min.js' integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj' crossorigin='anonymous'></script>
      <script src='https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js' integrity='sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo' crossorigin='anonymous'></script>
      <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js' integrity='sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI' crossorigin='anonymous'></script>
      <script 
      </body>
    </html>
`;
}

module.exports = generateHTML;