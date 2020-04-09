import ajax from 'axios'
import { Message } from 'element-ui'

const HTTP_STATUS_SUCCESS = 200

const globalConfig = {

}

const ajaxInstance = ajax.create(globalConfig)

ajaxInstance.interceptors.request.use(config => {
  config.baseURL = '/api'
  return config
}, error => {
  return Promise.reject(error);
})

ajaxInstance.interceptors.response.use(rsp => {
  if (rsp.status === HTTP_STATUS_SUCCESS) {
    if (rsp.data.hasOwnProperty('msg')) {
      Message.success({
        message: rsp.data.msg
      })
    }
  }

  return rsp;
}, error => {
  Message.error({
    message: '系统异常'
  })
  
  return Promise.reject(error);
})

export default ajaxInstance