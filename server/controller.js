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
    console.log(`you're in controller.postProviders`);
    dbhelper.postProviders(req, (err, results) => {
      if (err) {
        console.log(err);
        res.status(404).send(results);
      } else {
        console.log('Success: Posted new povider! controller.postProviders');
        res.status(200).send(results);
      }
    });
  },

  updateProviders: (req, res) => {
    console.log(`you're in controller.updateProviders`);
    dbhelper.updateProviders(req, (err, results) => {
      if (err) {
        console.log(err);
        res.status(404).send(results);
      } else {
        console.log(
          `Success: Updated the provider! controller.updateProviders`
        );
        res.status(200).send(results);
      }
    });
  },

  deleteProviders: (req, res) => {
    console.log(`you're in controller.deleteProviders`);
    dbhelper.deleteProviders(req, (err, results) => {
      if (err) {
        console.log(err);
        res.status(404).send(results);
      } else {
        console.log(
          `Success: Deleted the provider! controller.deleteProviders`
        );
        res.status(200).send(results);
      }
    });
  },

  getDistributors: (req, res) => {
    console.log(`you're in controller.getDistributors`);
    dbhelper.getDistributors(req, (err, results) => {
      if (err) {
        console.log(err);
        res.status(404).send(results);
      } else {
        console.log('Success: Get new distributor! controller.getDistributors');
        res.status(200).send(results);
      }
    });
  },

  postDistributors: (req, res) => {
    console.log(`you're in controller.postDistributors`);
    dbhelper.postDistributors(req, (err, results) => {
      if (err) {
        console.log(err);
        res.status(404).send(results);
      } else {
        console.log(
          `Success: Posted new distributor! controller.postDistributors`
        );
        res.status(200).send(results);
      }
    });
  },

  updateDistributors: (req, res) => {
    console.log(`you're in controller.updateDistributors`);
    dbhelper.updateDistributors(req, (err, results) => {
      if (err) {
        console.log(err);
        res.status(404).send(results);
      } else {
        console.log(
          `Success: Updated the distributor! controller.updateDistributors`
        );
        res.status(200).send(results);
      }
    });
  },

  deleteDistributors: (req, res) => {
    console.log(`you're in controller.deleteDistributors`);
    dbhelper.deleteDistributors(req, (err, results) => {
      if (err) {
        console.log(err);
        res.status(404).send(results);
      } else {
        console.log(
          `Success: Deleted the distributor! controller.deleteDistributors`
        );
        res.status(200).send(results);
      }
    });
  },
};
