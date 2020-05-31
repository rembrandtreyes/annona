const dbhelper = require('../database/dbhelpers');

module.exports = {
  getProviders: (req, res) => {
    console.log(`you're in controller.getProviders`);
    dbhelper.getProviders(req, (err, results) => {
      if (err) {
        console.log(err);
        res.status(404).send(results);
      } else {
        console.log(`successful controller.getProviders`);
        res.status(200).send(results);
      }
    });
  },

  postProviders: (req, res) => {
    console.log(`you're in controller.postProvider`);
    dbhelper.postProvider(req, (err, results) => {
      if (err) {
        console.log(err);
        res.status(404).send(results);
      } else {
        console.log('Success: Posted new povider! controller.postProvider');
        res.status(200).send(results);
      }
    });
  },
};
