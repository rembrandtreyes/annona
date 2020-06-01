const db = require('../database/index');

module.exports = {
  getProviders: (req, callback) => {
    console.log('from dbhelpers.getProviders: ', req.query);
    db.query(
      `SELECT * FROM Providers WHERE zipcode = ${req.query.zipcode};`,
      (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      }
    );
  },

  postProviders: (req, callback) => {
    console.log('from postProviders: ', req.body);
    db.query(
      `INSERT INTO Providers (name, kind, email, zipcode) VALUES ('${req.body.name}', '${req.body.kind}', '${req.body.email}', '${req.body.zipcode}');`,
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

  updateProviders: (req, callback) => {
    console.log(`you're in dbhelpers.updateProviders`);
    db.query(
      `UPDATE Providers SET kind = ${req.body.kind} WHERE name = ${req.body.name};`,
      (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      }
    );
  },

  deleteProviders: (req, callback) => {
    console.log(`you're in dbhelpers.deleteProviders`);
    db.query(
      `DELETE FROM Providers WHERE name = ${req.body.name};`,
      (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      }
    );
  },

  getDistributors: (req, callback) => {
    console.log(`you're in dbhelpers.getDistributors`);
    console.log(`getDistributors: `, req.query);
    db.query(
      `SELECT * FROM Distributors WHERE zipcode = ${req.query.zipcode};`,
      (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      }
    );
  },

  postDistributors: (req, callback) => {
    console.log(`you're in dbhelpers.postDistributors`);
    db.query(
      `INSERT INTO Distributors (name, zipcode, kind) VALUES ('${req.body.name}', '${req.body.zipcode}', '${req.body.kind}');`,
      (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      }
    );
  },

  updateDistributors: (req, callback) => {
    console.log(`you're in dbhelpers.updateDistributors`);
    db.query(
      `UPDATE Distributors SET kind = ${req.body.kind} WHERE name = ${req.body.name};`,
      (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      }
    );
  },

  deleteDistributors: (req, callback) => {
    console.log(`you're in dbhelpers.deleteDistributors`);
    db.query(
      `DELETE FROM Distributors WHERE name = ${req.body.name};`,
      (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      }
    );
  },
};
