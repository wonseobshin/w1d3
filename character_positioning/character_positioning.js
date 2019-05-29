// function countLetters(str){
//   var obj = {};
//   var char =''
//   var arr = []
//   for(i in str){
//     if(str[i] !== ' '){
//       obj[str[i]] = 'at '

//     }
//   }

//   for(i in str){
//     if(str[i] !== ' '){
//       var foo = ''
//       if(obj[str[i]] === 'at ')
//         obj[str[i]] += i
//       else
//         obj[str[i]] += ', ' + i
//       // if(i !== )
//       //   obj[str[i]] += ','
//     }
//   }

//   // for(i in str){
//   //   obj[]
//   // }
//   return obj;
// }

function countLetters(str){
  var charArr = str.split(' ').join("").split('');
  var obj = {};

  for(var i in charArr){
    if(obj[charArr[i]]){
      obj[charArr[i]].push(i);
    } else {
      obj[charArr[i]] = [i];
    }
  }

  return obj;

}

var it = countLetters("lighthouse in the house")
console.log(it)

