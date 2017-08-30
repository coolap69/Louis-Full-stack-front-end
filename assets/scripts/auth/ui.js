'use strict';

const app = require('../app.js');

const signInSuccess = (data) => {
  app.user = data.user
  console.log(app);
  console.log('sign in');
  $('#signIn').html('Sign in successful.');
  $('#signIn').hide(2500);
  $('#gameBoard').removeClass('hide');
}

const signOutSuccess = () => {
  app.user = null
  console.log(app);
  console.log('sign out');
  $('#signOut').html('You signed out.');
  $('#signOut').hide(2500);
  $('#gameBoard').addClass('hide');
}

const changePasswordSuccess = (data) => {
  console.log('Password Successfully Changed.');
  $('#changePassword').html('Password Successfully Changed');
  $('#changePassword').hide(2500);
}

const success = (data) => {
  console.log(data);
  console.log('success!');
};

const failure = (error) => {
  console.error(error);
  console.log('failure!');
}

const createGameSuccess = (data) => {
  app.game = data.game
  app.game.id = data.game.id
  console.log(data);
  console.log('Success');
}

const createGameFailure = (error) => {
  console.log(error);
  console.log('Fail');
}

const getHistorySuccess = (data) => {
  $('oldGame').html('You have played before user' + app.user.id);
  console.log(data.id);
  console.log('watch me!');
  console.log('alright');
}

const getHistoryFailure = (error) => {
  console.log(error);
  console.log('Fail');
}

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  createGameSuccess,
  createGameFailure,
  getHistorySuccess,
  getHistoryFailure
};