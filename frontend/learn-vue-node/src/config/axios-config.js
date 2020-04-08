import ajax from 'axios'

const globalConfig = {

}

const ajaxInstance = ajax.create(globalConfig)

ajaxInstance.interceptors.request.use(config => {
  config.baseURL = '/api'
  return config
}, error => {
  return Promise.reject(error);
})

export default ajaxInstance