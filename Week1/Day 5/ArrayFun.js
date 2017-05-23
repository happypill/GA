function charactersOccurencesCount(s) {
  var ret = {};
  s.split("").forEach(function(el) {
    if (el in ret) {
      ret[el] += 1;
    }
    else {
      ret[el] = 1;
    }
  });
  return ret;


  fun.apply(this.value)