function countLetters(str){
  var obj = {};
  var char =''

  for(i in str){
    if(str[i] !== ' '){
      obj[str[i]] = 0
    }
  }

  for(i in str){
    if(str[i] !== ' '){
      obj[str[i]]++
    }
  }
  return obj;
}

var it = countLetters("lighthouse in the house")
console.log(it)