'use strict'

const mongoose = require('mongoose')
const validate = require('mongoose-validator');

var emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'Please provide a valid email address'
  })
]

let Schema = mongoose.Schema

let EOSchema = new Schema ({
  event_name: String,
  event_title: String,
  event_email: String,
  date_create: Date
})

module.exports = mongoose.model('EOs', EOSchema)
