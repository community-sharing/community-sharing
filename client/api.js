const request = require('superagent')
const url = require('url')
const config = require('../config')

var urlPath = url.format(config)

const getListings = (callback) => {
  request
    .get(urlPath + "/items/")
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

const getUsers = (callback, email) => {
  request
    .get(urlPath + "/user/"+email)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body[0])
      }
    })
}

// const listNewItem = (callback)

module.exports = { getListings, getUsers }
