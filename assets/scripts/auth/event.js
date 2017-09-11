'use strict'

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');

const onSignUp = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data)
  api.signUp(data)
  .done(ui.success)
  .fail(ui.fail);
};

const onSignIn = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.fail);
};

const onSignOut = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signOut(data)
  .done(ui.signOutSuccess)
  .fail(ui.fail);
};

const onChangePassword = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.fail);
};

const onCreatePost = function(event){
  event.preventDefault();
  let title = $('#title').val()
  let description = $('#description').val()

  api.createPost(title, description)
  .done(ui.createPostSuccess)
  .fail(ui.createPostFail);
};

// const onGetService = function(event){
//   event.preventDefault();
//   let title = $('#category').val()
//
//   api.getService(category)
//   .done(ui.getServiceSuccess)
//   .fail(ui.getServiceFail);
// };

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
};

module.exports = {
  addHandlers,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreatePost,
  // onGetService,
};
