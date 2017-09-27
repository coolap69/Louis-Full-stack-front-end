'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const event = require('./auth/event.js')
// events.addHandlers()

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('#signUp').on('submit', event.onSignUp)
  $('#signIn').on('submit', event.onSignIn)
  $('#change-password').on('submit', event.onChangePassword)
  $('#signOut').on('submit', event.onSignOut)
   // $('#postButton').on('click', event.onCreatePost)
  // $('#postButton').on('click', event.onGetService)
  // $('#deleteButton').on('submit', accountEvents.onDeletePost)//
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

/////////time clock//////
let timeleft = 7
let downloadTimer = setInterval(function() {
  timeleft--;
  document.getElementById("countdowntimer").textContent = timeleft;
  if (timeleft <= 0)
    clearInterval(downloadTimer);
}, 1000);



// let player = 'X';
//
// // do this when a Box is clicked
// $(".services").click(function() {
//   // detect if Box already has an X or O in it, if so, end this function
//   if ($(this).text() == 'X' || $(this).text() == 'O') {
//     alert("choose another box")
//     return
//   }
