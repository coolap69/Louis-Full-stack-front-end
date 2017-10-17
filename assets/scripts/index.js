'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const event = require('./auth/event.js')
const postevent = require('./posts/event.js')
// events.addHandlers()

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('#signUp').on('submit', event.onSignUp)
  $('#signIn').on('submit', event.onSignIn)
  $('#change-password').on('submit', event.onChangePassword)
  $('#signOut').on('submit', event.onSignOut)
  $('#GetPost').on('submit', postevent.onCreatePost)
  $('#showPost').on('click', postevent.onGetPosts)
  $('#countDownTimer').on('click', postevent.onGetPosts)
  $('#DeletePost').on('click', postevent.onDeletePosts)

  // $('#postButton').on('click', event.onGetService)
  // $('#deleteButton').on('submit', accountEvents.onDeletePost)//
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

/// time clock ///
let timeleft = 0
const downloadTimer = setInterval(function () {
  // timeleft--
  document.getElementById('countDownTimer').textContent = timeleft
  if (timeleft > 6) {
    // clearInterval(downloadTimer)
    timeleft = 1
  } else {
    timeleft++
  }
}, 1000)

// let counter = 0
// let Timer = createP
//
// function setup() {
//   Timer = ('Timer')
//   setInterval(timeIt, 500)
// }
//
// function timeIt() {
//   Timer.html(counter)
//   counter++
// }
