'use strict'

const app = require('../app.js')

const createService = function (data) {
  return $.ajax({
    url: app.host + '/services/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const getServices = function (data) {
  return $.ajax({
    url: app.host + '/services/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const showService = function (data) {
  return $.ajax({
    url: app.host + '/services/' + app.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const deleteServices = function (data) {
  return $.ajax({
    url: app.host + '/services/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateService = function (data) {
  return $.ajax({
    url: app.host + '/services/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

module.exports = {
  createService,
  getServices,
  showService,
  deleteServices,
  updateService
}
