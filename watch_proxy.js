//使用 defineProperty 只能重定义属性的读取（get）和设置（set）行为，到了 ES6，提供了 Proxy，可以重定义更多的行为，比如 in、delete、函数调用等更多行为。

var target = function () { return 'I am the target'; };
var handler = {
  apply: function () {
    return 'I am the proxy';
  }
};

var p = new Proxy(target, handler);

p();

(function() {
  var root = this;

  function watch(target, func) {

    var proxy = new Proxy(target, {
      get: function(target, prop) {
        return target[prop];
      },
      set: function(target, prop, value) {
        target[prop] = value;
        func(prop, value);
      }
    });

    return proxy;
  }

  this.watch = watch;
})()

var obj = {
  value: 1
}

var newObj = watch(obj, function(key, newvalue) {
  if (key == 'value') document.getElementById('container').innerHTML = newvalue;
})

document.getElementById('button').addEventListener("click", function() {
  newObj.value += 1
});

// -------------------
const service = createWebService('http://example.com/data');

service.employees().then(json => {
  const employees = JSON.parse(json);
  // ···
});

//上面代码新建了一个 Web 服务的接口，这个接口返回各种数据。Proxy 可以拦截这个对象的任意属性，所以不用为每一种数据写一个适配方法，只要写一个 Proxy 拦截就可以了。

function createWebService(baseUrl) {
  return new Proxy({}, {
    get(target, propKey, receiver) {
      return () => httpGet(baseUrl + '/' + propKey);
    }
  });
}
