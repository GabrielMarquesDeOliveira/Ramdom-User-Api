const fs = require("fs");
const path = require("path");

const dbFilePath = path.join(__dirname, "database.json");

function saveUser(userData) {
  let users = [];

  if (fs.existsSync(dbFilePath)) {
    users = JSON.parse(fs.readFileSync(dbFilePath, "utf-8"));
  }

  users.push(userData);

  fs.writeFileSync(dbFilePath, JSON.stringify(users, null, 2));
}

module.exports = { saveUser };
