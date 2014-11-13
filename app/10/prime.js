var prime = function(a){
  if(Number.isInteger(a)){

  if(a == 1){
    return false
  }

var b
 b = 2 ;

while(a > b){
    if(a % b == 0){

        return false
      }b = b + 1
    }
    return true
}
if (a  %  1 !== 0 && a < 1){
  return false
  }
return false
}
