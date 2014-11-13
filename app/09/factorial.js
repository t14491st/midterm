var factorial = function(a) {
  a = Math.floor(a) 

  if(Number.isInteger(a)){



  if(a <= 0){
    return null

  }
 var b = a - 1
 var result = a
  while(b >= 1){


result = result * b

  b = b - 1
  }
    return result

}
}
