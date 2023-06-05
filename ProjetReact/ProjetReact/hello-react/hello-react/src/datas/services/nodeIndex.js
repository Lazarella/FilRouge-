const mysql= require('mysql');
const http = require('http'); 

const handleRequest  = (request, response) => {
   
        const { method, url } = request;
      
        if (method === 'GET' && url === '/users') {
          // Effectuer une requête à la base de données pour récupérer les utilisateurs
          connection.query('SELECT * FROM users', (err, result) => {
            if (err) {
              // Gérer les erreurs
              console.error(err);
              response.statusCode = 500;
              response.end('Une erreur est survenue lors de la récupération des utilisateurs');
            } else {
              // Renvoyer les utilisateurs en tant que réponse
              response.statusCode = 200;
              response.setHeader('Content-Type', 'application/json');
              response.end(JSON.stringify(result));
            }
          });
        } else {
          // Gérer les autres routes non prises en charge
          response.statusCode = 404;
          response.end('Route non trouvée');
        }
      };
      

const server = http.createServer(handleRequest);

const port = 3306;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


const connection = mysql.createConnection (
    {
        host:"localhost", 
        user: "root", 
        password : "root"
    }
    ); 


  
        connection.connect(function(err) {
               if (err) throw err;
                console.log("Connecté à la base de données MySQL!");
                   connection.query("SELECT users.id as 'user_id', users.firstName as 'user_firstName', users.alias as 'user_alias', 'users.avatar' as 'user_avatar', projects.title as 'project_title' FROM users JOIN projects on users.projects_id = project.id", 
                   function (err, result) 
                   {       
                    if (err) throw err;       
                    console.log(result);     
                }); 
            });