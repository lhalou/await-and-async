## async

`async`可以和`Promise`结合使用，并且它的语法和结构使异步函数更像同步函数

## await获取错误的结果

是和`try----catch`结合
```
async function test(){
  try{
    let n = await fn()
    console.log('好嗨哦' + n)
  }catch(error){
    console.log('报错了')
  }
  
}
```


## 注明面试题：为什么需要使用await

因为await会让异步看起来更像同步函数. `try---catch`部分，使代码看起来是同步的，不像`promise`一样使用`.then()`。而且`await`的存在使代码更容易理解，因为`.then`的连接嵌套，成功函数与失败函数的调用，非常费脑。

## await的局限

`await`只能接一个`Promise`,不能接多个。只能借助`Promise`的API的配合，才能完成更复杂的功能。
`Promise.all`可以实现,他可以等接受的两个`promise`都执行成功后在调用`then`的成功或失败函数
```
Promsie.all([fn('大),fn('大')])
  .then(
    () => {},
    () => {}
  )
```

但`await`可以接`Promise.all`，因为他也是一个`Promise`
  ```
  async function test(){
  try{
    let n = await Promsie.all([fn('大),fn('大')])
    console.log('好嗨哦' + n)
  }catch(error){
    console.log('报错了')
  }
  
}
  ```
当需要多个`Promise`的时候，`await`用起来又不太爽，需要回到`Promsie.all`

也可以使用`Promise.race`，二者区别：
`Promise.race()`两个只要有一个成功，就算成功，
`Promise.all()`两个都成功才算成功。
