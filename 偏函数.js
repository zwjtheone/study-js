var isType = function (type) {
  return function (obj) {
    return toString.call(obj) == '[object ' + type + ']'
  }
}

var isString = isType('String');
console.log(isString(123))


var after = function (times, func) {
  if (times <= 0) {
    return func()
  }
  ;
  return function () {
    if (--times < 1) {
      return func.apply(this, arguments)
    }
  }
}
