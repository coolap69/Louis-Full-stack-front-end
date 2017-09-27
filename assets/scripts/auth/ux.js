'use strict'

const signIn = function () {
  $(() => {
    console.log('in the beginning')
    $('.container').children().hide()
    console.log('Log in')
  })
}

module.exports = {
  signIn
}
