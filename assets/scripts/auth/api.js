'use strict';

const app = require('./app');
// const getFormFields = require('../../../lib/get-form-fields.js');

//authApi.signUp(authUi.success, authUi.failure, data);

const signUp = function(data){
  console.log(data);
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data: {
      credentials: {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation
      }
    }
  });
};

const signIn = function(data){
  console.log(data);
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data: {
      credentials: {
        email: data.email,
        password: data.password,
      }
    }
  });
};

const signOut = function(){
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,

   }
  });
};

const changePassword = function(data){
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      credentials: {
        email: data.password,
        password: data.password,
      }
    }
    });

    const createPost = function(data){
      console.log(data);
      return $.ajax({
        url: app.host + '/posts/',
        method: 'POST',
        data: {
          credentials: {
            title: data.title,
            description: data.description,
            service_id: data.service_id,
          }
        }
      });

      const post = function(data){
        console.log(data);
        return $.ajax({
          url: app.host + '/category/',
          method: 'POST',
          data: {
            credentials: {
              category: data.category,

            }
          }
        });
    };
    };


module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  post,
  category,
};
};
