'use strict'

const postsApi = require('./api.js')
const postsUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreatePost = function (event) {
  event.preventDefault()
  console.log(event)
  const data = getFormFields(event.target)
  console.log('passing through event js')
  console.log()
  postsApi.createPost(data)
    .then(postsUi.onCreatePostSuccess)
    .then(onGetPosts(event))
    .catch(postsUi.onCreatePostError)
}

const onGetPosts = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  postsApi.getPosts(data)
    .then(postsUi.onGetPostsSuccess)
    .catch(postsUi.onGetPostsError)
}

const onShowPost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  postsApi.showPost(data)
    .then(postsUi.onShowPostSuccess)
    .catch(postsUi.onShowPostError)
}

const onDeletePosts = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  postsApi.deletePosts(data)
    .then(postsUi.onDeletePostsSuccess)
    .catch(postsUi.onDeletePostsError)
}

const onUpdatePost = function (event) {
  console.log('passing through products event js')
  // console.log(data)
  event.preventDefault()
  const data = getFormFields(event.target)
  // may need to update name of create after html is created
  postsApi.updatedPost(data)
    .then(postsUi.onUpdatePostSuccess)
    .then(onGetPosts(event))
    .catch(postsUi.onUpdatePostError)
}

module.exports = {
  onCreatePost,
  onGetPosts,
  onShowPost,
  onDeletePosts,
  onUpdatePost
}
