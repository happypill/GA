function flatten(arr) {
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      temp = temp.concat(arr[i]);
    } else {
      temp.push(arr[i]);
    }
  }
  return temp;
}

function flatten(arr) {
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      temp = temp.concat(arr[i]);
    } else {
      temp.push(arr[i]);
    }
  }
  return temp;
}