/**
 * 所以 for...of 循环可以使用的范围包括：
    数组
    Set
    Map
    类数组对象，如 arguments 对象、DOM NodeList 对象
    Generator 对象
    字符串
 * @param obj
 * @param cb
 */
function forOf(obj, cb) {
  let iterable, result;

  if (typeof obj[Symbol.iterator] !== "function")
    throw new TypeError(result + " is not iterable");
  if (typeof cb !== "function") throw new TypeError("cb must be callable");

  iterable = obj[Symbol.iterator]();

  result = iterable.next();
  while (!result.done) {
    cb(result.value);
    result = iterable.next();
  }
}
