'use strict'

var mongoose = require('mongoose'),
  Patient = mongoose.model('patient');


exports.get_patient_list = function(req, res) {
  Patient.find({}, function(err, patient) {
    if(err)
      res.send(err);
    res.json(patient)
  });
};

exports.create_patient = function(req, res) {
  var new_patient = new Patient(req.body);
  new_patient.save(function(err, patient) {
    if(err)
      res.send(err);
    res.json(patient);
  });
};
