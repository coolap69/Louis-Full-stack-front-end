'use strict'

const servicesApi = require('./api.js')
const servicesUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateService = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('passing through event js')
  console.log(data)
  servicesApi.createService(data)
    .then(servicesUi.onCreateServiceSuccess)
    .catch(servicesUi.onCreateServiceError)
}

const onGetServices = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  servicesApi.getServices(data)
    .then(servicesUi.onGetServicesSuccess)
    .catch(servicesUi.onGetServicesError)
}

const onShowService = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  servicesApi.showService(data)
    .then(servicesUi.onShowServiceSuccess)
    .catch(servicesUi.onShowServiceError)
}

const onDeleteServices = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  servicesApi.deleteServices(data)
    .then(servicesUi.onDeleteServicesSuccess)
    .catch(servicesUi.onDeleteServicesError)
}

const onUpdateService = function (event) {
  console.log('passing through products event js')
  // console.log(data)
  event.preventDefault()
  const data = getFormFields(event.target)
  // may need to update name of create after html is created
  servicesApi.updateService(data)
    .then(servicesUi.onUpdateServiceSuccess)
    .catch(servicesUi.onUpdateServiceError)
}

module.exports = {
  onCreateService,
  onGetServices,
  onShowService,
  onDeleteServices,
  onUpdateService
}
