//Task №1
const stringLength = (str , maxLength) =>
  str.length <= maxLength ? true : false ;

////Task №2
const polifil = function (string) {
  let modifiedString = string.replaceAll(' ','').toLowerCase();
  let polifilString = '';
  for(let i=modifiedString.length;i>=0;i--) {
    polifilString +=modifiedString.at(i);
  }
  polifilString === modifiedString ? true : false ;
}

//Task №3
function getNumberFromString (str) {
  let processedString= '';
  for (let i=0;i<str.length;i++){
      if(!isNaN(str[i])) {
        processedString+=str[i]
      }
      if (processedString.length > 0) {
        return processedString.replaceAll(' ','')
      } else {
        return NaN
      }
    }
}
