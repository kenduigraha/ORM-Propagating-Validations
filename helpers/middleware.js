'use strict'

let checkData = (req, res, next) => {
  if(req.body.event_name === ''){
    let err = {
      event_name : {
        message : "Event\'s name is required"
      }
    }
    res.render('index', {title: 'Event\'s Organizer', err: err, input: req.body})
  }else if(req.body.event_title === ''){
    let err = {
      event_title : {
        message : "Event\'s title is required"
      }
    }
    res.render('index', {title: 'Event\'s Organizer', err: err, input: req.body})
  }else if(req.body.date_create === ''){
    let err = {
      date_create : {
        message : "Event\'s data create is required"
      }
    }
    res.render('index', {title: 'Event\'s Organizer', err: err, input: req.body})
  }else{
    return next()
  }
}

module.exports = {
  checkData: checkData
}
