'use strict'

const app = require('../app.js')

const signUp = function (data) {
  console.log('passing thought api js')
  // console.log(app.host)
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: {
      credentials: {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation
      }
    }
  })
}

const signIn = function (data) {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: data.email,
        password: data.password
      }
    }
  })
}

const changePassword = function (data) {
  console.log('passing through the api.js')
  return $.ajax({
    url: app.host + '/change-password' / +app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const signOut = function () {
  console.log('passing through the api.js')
  return $.ajax({
    url: app.host + '/sign-out' / +app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
