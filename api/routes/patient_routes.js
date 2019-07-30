'use strict'
module.exports = function(app) {
  var patient_controller = require('../controllers/patient_controller.js');

  app.route('/patients')
    .get(patient_controller.get_patient_list)
    .post(patient_controller.create_patient);
}
