import axios from '../../src/index'

axios({
  method: 'get',
  url: '/error/get1',
  params: {
    a: 1,
    b: 2
  }
}).then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e)
})

axios({
  method: 'get',
  url: '/error/get',
  params: {
    a: 1,
    b: 2
  }
}).then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e)
})




setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/timeout',
    params: {
      a: 1,
      b: 2
    }
  }).then((res) => {
    console.log(res)
  }).catch((e) => {
    console.log(e)
  })
}, 5000)


axios({
  method: 'get',
  url: '/error/get',
  params: {
    a: 1,
    b: 2
  },
  timeout: 2000
}).then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e.messege)
})