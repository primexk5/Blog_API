// const fs = require('fs');
// const path = require('path');

// const userFilePath = path.join(__dirname, '..', 'data', 'users.json');

// function readUsersFromFile() {
//   try {
//     const data = fs.readFileSync(userFilePath, 'utf-8');
//     return JSON.parse(data);
//   } catch (err) {
//     return [];
//   }
// }


// function writeUsersToFile(users) {
//   fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2));
// }

// module.exports = {
//   readUsersFromFile,
//   writeUsersToFile,
// };