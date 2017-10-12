'use strict'

const app = require('../app.js')
const store = require('../store.js')

const createPost = function (data) {
console.log(store.user)
debugger
  return $.ajax({
    url: app.host + '/posts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  //   post: {
  //     user_id: data.user_id,
  //     description: data.description,
  //     title: data.title,
  //     date_time: data.date_time,
  //     service_id: data.service_id
  //   }
  })
}

const getPosts = function (data) {
  return $.ajax({
    url: app.host + '/posts/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showPost = function (data) {
  return $.ajax({
    url: app.host + '/posts/' + store.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePosts = function (data) {
  return $.ajax({
    url: app.host + '/posts/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updatePost = function (data) {
  return $.ajax({
    url: app.host + '/posts/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createPost,
  getPosts,
  showPost,
  deletePosts,
  updatePost
}
