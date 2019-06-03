import axios from '../../src/index'

// axios({
//   method: 'get',
//   url: '/base/get',
//   params: {
//     foo:['bar','baz']
//   }
// })

// axios({
//   method:'get',
//   url:'/base/get',
//   params:{
//     foo:{
//       bar:'baz'
//     }
//   }
// })

// const date=new Date()
// axios({
//   method:'get',
//   url:'/base/get',
//   params:{
//     foo:{
//       date
//     }
//   }
// })

// axios({
//   method:'get',
//   url:'/base/get',
//   params:{
//     foo:'@:&+'
//   }
// })

// axios({
//   method:'get',
//   url:'/base/get',
//   params:{
//     foo:'ddd',
//     baz:null
//   }
// })


// axios({
//   method:'get',
//   url:'/base/get#hash',
//   params:{
//     foo:'ddd',
//     baz:'hash'
//   }
// })


// axios({
//   method:'get',
//   url:'/base/get?foo=bar',
//   params:{
//     baz:'baz'
//   }
// })




// const arr=new Int32Array([21,31])
// axios({
//   method:'post',
//   url:'/base/buffer',
//   data:arr
// })

// axios({
//   method:'post',
//   url:'/base/post',
//   data:{
//     a:1,
//     b:2
//   }
// })

// axios({
//   method:'post',
//   url:'/base/post',
//   headers:{
//     'content-type':'application/json',
//     'Accept':'application/json, text/plain,*/*'
//   },
//   data:{
//     a:1,
//     b:2
//   }
// })

// const paramsString='q=URLUtils.seachParams&topoc=api'
// const seachParams=new URLSearchParams(paramsString)
// // application/x-www-form-urlencoded;charset=UTF-8
// axios({
//   method:'post',
//   url:'/base/post',
//   data:seachParams
// })

axios({
  method:'post',
  url:'/base/post',
  data:{
    a:1,
    b:2
  }
}).then((res)=>{
  console.log(res)
})

axios({
  method:'post',
  url:'/base/post',
  responseType:'json',
  data:{
    a:1,
    b:2
  }
}).then((res)=>{
  console.log(res)
})