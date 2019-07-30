'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PatientSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the patient'
  },
  Created_Date: {
    type: Date,
    default: Date.now
  },
  age: {
    type: Number,
    required: "Kindlt enter the age of the patient"
  }
});

module.exports = mongoose.model('Patients', PatientSchema);
