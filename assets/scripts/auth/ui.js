'use strict'

const app = require('../store.js')
const hide = require('./hide.js')

const onSignUpSuccess = function () {
  hide.signUp()
  console.log('You successfully created an account')
  // app.user = data.user
}

const onError = function (response) {
  console.error(response)
}

const onSignInSuccess = function (data) {
  hide.signIn()
  console.log('You successfully sign in')
  app.user = data.user
  console.log(app.user)
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

const onCreatePostSuccess = function () {
  console.log('You successfully created a post')
}

const onCreatePostError = function (response) {
  console.error(response)
}

const onGetServiceSuccess = function () {
  console.log('You successfully created posted')
}

const onGetServiceError = function (response) {
  console.error(response)
}
module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
  onSignInError,
  onChangePasswordSuccess,
  onChangePasswordError,
  onSignOutSuccess,
  onSignOutError,
  onCreatePostSuccess,
  onCreatePostError,
  onGetServiceSuccess,
  onGetServiceError
}
