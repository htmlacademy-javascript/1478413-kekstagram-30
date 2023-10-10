//Task №1
const stringLength = (str , maxLength) =>
  str.length <= maxLength;

stringLength('проверяемая строка', 20);
stringLength('проверяемая строка', 18);
stringLength('проверяемая строка', 10);

////Task №2
const polifil = function (string) {
  const modifiedString = string.replaceAll(' ','').toLowerCase();
  let polifilString = '';
  for (let i = modifiedString.length ; i >= 0 ; i--) {
    polifilString += modifiedString.at(i);
  }
  return (polifilString === modifiedString);
};

polifil('топот');
polifil('ДовОд');
polifil('Кекс');

//Task №3
function getNumberFromString (str) {
  let processedString = '';
  for (let i = 0 ; i < str.length ; i++){
    if (!isNaN(str[i])) {
      processedString += str[i];
    }
  }
  return (processedString.length > 0) ? processedString.replaceAll(' ','') : NaN;
}

getNumberFromString('2023 год');
getNumberFromString('ECMAScript 2022');
getNumberFromString('1 кефир, 0.5 батона');
getNumberFromString('агент 007');
getNumberFromString('а я томат');
