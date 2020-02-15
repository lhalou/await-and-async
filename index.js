//得到1~6之间的随机数
function fn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let n = parseInt(Math.random() * 6 + 1, 10);
      resolve(n);
    });
  });
}
//await函数必须放在带有async关键字的函数里面

async function test() {
  //await fn()先执行，三秒后let n才执行，所以test()是一个特殊的函数
  let n = await fn(); //此处一定是fn()
  console.log(n);
}
test();
