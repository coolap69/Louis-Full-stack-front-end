'use strict'

const onCreatePostSuccess = function () {
  console.log('You successfully post an item')
  // app.user = data.user
}

const onCreatePostError = function (response) {
  console.error(response)
}

const onGetPostsSuccess = function (data) {
  console.log('You successfully got post')
}

const onGetPostsError = function (response) {
  console.error(response)
}

const onShowPostSuccess = function () {
  console.log('You succesfully showing your posting')
}

const onShowPostError = function (response) {
  console.log(response)
}

const onDeletePostsSuccess = function () {
  console.log('You successfully deleted your post')
}

const onDeletePostsError = function (response) {
  console.log(response)
}

const onUpdatePostSuccess = function () {
  console.log('You successfully updated a post')
}

const onUpdatePostError = function (response) {
  console.error(response)
}

module.exports = {
  onCreatePostSuccess,
  onCreatePostError,
  onGetPostsSuccess,
  onGetPostsError,
  onShowPostSuccess,
  onShowPostError,
  onDeletePostsSuccess,
  onDeletePostsError,
  onUpdatePostSuccess,
  onUpdatePostError
}
