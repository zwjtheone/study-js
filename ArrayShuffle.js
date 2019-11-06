/**
 * 数组乱序
 */
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// Fisher–Yates
function shuffle2(arr) {
  let m = arr.length;
  while (m > 1){
    let index = Math.floor(Math.random() * m--);
    [arr[m] , arr[index]] = [arr[index] , arr[m]]
  }
  return arr;
}

