//阮一峰在他的博客——《学习Javascript闭包（Closure）》中写到：在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
//
//
//
// 阮一峰写的太文艺了，我想务实点的说法应该是下面这样：
//
// 由于闭包可以缓存上级作用域，那么就使得函数外部打破了“函数作用域”的束缚，可以访问函数内部的变量。以平时使用的Ajax成功回调为例，这里其实就是个闭包，由于上述的特性，回调就拥有了整个上级作用域的访问和操作能力，提高了极大的便利。开发者不用去写钩子函数来操作上级函数作用域内部的变量了。
//闭包随处可见，一个Ajax请求的成功回调，一个事件绑定的回调方法，一个setTimeout的延时回调，或者一个函数内部返回另一个匿名函数，这些都是闭包。简而言之，无论使用何种方式对函数类型的值进行传递，当函数在别处被调用时都有闭包的身影。
