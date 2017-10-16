'use strict'

const signIn = function () {
  $(() => {
    console.log('in the beginning')
    $('.container').children().hide()
    console.log('Log in')
  })
}

const signUp = function () {
  $(() => {
    console.log('in the beginning')
    $('.container').children().hide()
    console.log('Sucess')
  })
}

const countDownTimer = function () {
  $(() => {
    console.log('in the beginning')
    $('.button2').children().show()
    console.log('Sucess')
  })
}

module.exports = {
  signIn,
  signUp,
  countDownTimer
}
