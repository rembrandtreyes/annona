const db = require('../database/index');

module.exports = {
  getProviders: (req, callback) => {
    db.query(`SELECT * FROM Providers;`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  postProviders: (req, callback) => {
    db.query(
      `INSERT INTO Providers (name) VALUES ('${req.body.name}')`,
      (err, results) => {
        if (err) {
          callback(err);
        } else {
          console.log(`SUCCESS: Provider posted!`);
          callback(null, results);
        }
      }
    );
  },
};
