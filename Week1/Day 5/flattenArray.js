//alex min

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

//geng
function flatten(arr) {
  for (var i in arr) {
    var temp;
    if (!Array.isArray(arr[i])) {
      continue;
    
    } else {
      temp = arr[i]
      arr.splice(i, 1)
      for (var j in temp.reverse()) {
        arr.splice(i, 0, temp[j])
      }
    }
  }
  console.log(arr)
}
function flatten2(arr) {
  return arr.reduce(
    function (a, b) {
      console.log(typeof(b))
    return a.concat(Array.isArray(b) ? flatten2(b) : b)
  }, [])
  console.log(arr)
}
//flatten([1, 2, [3, 4], [5, 6], 7])
flatten2([1, 2, [3, 4], [5, 6], 7])



//Robyn

function flatten(arr) {
  var ret = [];
  for (var i=0;i<arr.length;i++) {
    ret = ret.concat(arr[i]);
  }
  return ret;
}
