'use strict'

const userApi = require('./api.js')
const userUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('passing through event js')
  console.log(data)
  userApi.signUp(data)
    .then(userUi.onSignUpSuccess)
    .catch(userUi.onError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.signIn(data)
    .then(userUi.onSignInSuccess)
    .catch(userUi.onSignInError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.changePassword(data)
    .then(userUi.onChangePasswordSuccess)
    .catch(userUi.onChangePasswordError)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  userApi.signOut()
    .then(userUi.onSignOutSuccess)
    .catch(userUi.onSignOutError)
}

const onCreatePost = function (event) {
  console.log('passing through products event js')
  console.log(data)
  event.preventDefault()
  const data = getFormFields(event.target)
  // may need to update name of create after html is created
  userApi.createPost(data)
    .then(userUi.onCreatePostSuccess)
    .catch(userUi.onCreatePostError)
}

const onGetService = function(event) {
  event.preventDefault();
  const data = getFormFields(event.target)
  userApi.getService(data)
    .then(userUi.onGetServiceSuccess)
    .catch(userUi.onGetServiceError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreatePost,
  onGetService
}
