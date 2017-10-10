'use strict'

const app = require('../app.js')

const createAd = function (data) {
  return $.ajax({
    url: app.host + '/ads/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'ad': {
        'user_id': data.user_id,
        'product_name': data.product_name,
        'quantity': data.quantity
      }
    }
  })
}

const getAds = function (data) {
  return $.ajax({
    url: app.host + '/ads/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const showAd = function (data) {
  return $.ajax({
    url: app.host + '/ads/' + app.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const deleteAds = function (data) {
  return $.ajax({
    url: app.host + '/ads/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateAd = function (data) {
  return $.ajax({
    url: app.host + '/ads/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'ad': {
        'user_id': data.user_id,
        'product_name': data.product_name,
        'quantity': data.quantity
      }
    }
  })
}

module.exports = {
  createAd,
  getAds,
  showAd,
  deleteAds,
  updateAd
}
