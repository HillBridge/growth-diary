# 1. msw 是拦截的服务端的返回, 也是这个时候将 mock 数据通过 http 返回到客户端的

# 2. msw 不适合客户端做 mock 数据(除从 0-1 的项目), 主要是模拟数据时, 你的 http 的 baseUrl 要更改, 客户端的数据 mock 更适合在 http 请求发送之前做

# 3. msw 更适合在单元测试中使用

# 4. msw 在浏览器中使用的时候, 一定要等 woker.start()彻底执行完毕后再去操作, worker.start()返回的是一个 promise, 如果是 vue 或 react 项目, 要等 worker.start()执行完再挂载根 dom, 否则会出现第一次可以调通第二次刷新后就 404 的情况
