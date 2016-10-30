'use strict'
const EO = require('../models/EO')

let addData = (req, res, next) => {
  res.render('index', {title: 'Event\'s Organizer'})
}

let processAddData = (req, res, next) => {
  EO.create({
    event_name  : req.body.event_name,
    event_title : req.body.event_title,
    event_email : req.body.event_email,
    date_create : req.body.date_create
  }, (err, data) => {
    if(err) console.log(err)

    res.redirect('/list')
  })
}

let viewAllData = (req, res, next) => {
  EO.find({}, (err, data) => {
    if(err) console.log(err)

    res.render('list', {title: 'Event\'s Organizer', data: data})
  })
}


module.exports = {
  addData: addData,
  processAddData: processAddData,
  viewAllData: viewAllData
}
