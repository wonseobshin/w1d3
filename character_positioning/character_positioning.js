function countLetters(str){
  var obj = {};
  var char =''

  for(i in str){
    if(str[i] !== ' '){
      obj[str[i]] = 'at '
    }
    if(str[i] !== ' '){
      var foo = ''
      if(obj[str[i]] === 'at ')
        obj[str[i]] += i
      else
        obj[str[i]] += ', ' + i
    }
  }

  // for(i in str){
  //     // if(i !== )
  //     //   obj[str[i]] += ','
  //   }
  // }

  // // for(i in str){
  // //   obj[]
  // // }
  return obj;
}

var it = countLetters("lighthouse in the house")
console.log(it)