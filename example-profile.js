const Profile = require("./profile.js");

const studentProfile = new Profile("chalkers");

studentProfile.on("end", console.dir);

studentProfile.on("error", console.error);
