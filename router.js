const Profile = require("./profile.js");

//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
  //if url == "/" && GET
    //show search
    if (request.url === '/') {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.write('Header\n');
      response.write('Search\n');
      response.end('Footer\n');
    }

  //if url == "/" && POST
    //redirect to /:username
}


//Handle HTTP route GET /:username i.e. /chalkers
function user(request, response) {
  let username = request.url.replace("/", "");
  if (username.length > 0) {
    response.setHeader('Content-Type', 'text/plain');
    response.write('Header\n');

    // get JSON
    let studentProfile = new Profile(username);

    // show profile on "end"
    studentProfile.on("end", profileJSON => {

      // Store values we need
      const values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      };

      response.write(`${values.username} has ${values.badges} badges.\n`);
      response.end('Footer\n');
    });

    // on "error"
    studentProfile.on("error", error => {
      response.write(`${error.message}\n`);
      response.end('Footer\n');
    });


  }

  //if url == "/...."
    //get json from Treehouse
      //on "end"
        //show profile
      //on "error"
        //show error
}

module.exports.home = home;
module.exports.user = user;
