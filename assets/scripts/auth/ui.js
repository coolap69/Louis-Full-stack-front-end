'use strict'

const app = require('../store.js')
const ux = require('./ux.js')

const onSignUpSuccess = function () {
  console.log('You successfully created an account')
}

const onError = function (response) {
  console.error(response)
}

const onSignInSuccess = function (data) {
  ux.signIn()
  console.log('You successfully sign in')
  app.user = data.user
}

const onSignInError = function (response) {
  console.error(response)
}

const onChangePasswordSuccess = function () {
  console.log('You succesfully change your password')
}

const onChangePasswordError = function (response) {
  console.log(response)
}

const onSignOutSuccess = function () {
  console.log('You successfully sign out')
  app.user = null
}

const onSignOutError = function (response) {
  console.log(response)
}

module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
  onSignInError,
  onChangePasswordSuccess,
  onChangePasswordError,
  onSignOutSuccess,
  onSignOutError
}
