/* to jest moduł node.js, zwykły js, na końcu polecenia exports dające innym aplikacją node korzystającym z tego modułu
dostęp do tych metod*/

var censoredWords = ["smutny","niedobry","szalony"];
var customCensoredWords = [];
function censor(inStr){
  for(idx in censoredWords){
    inStr = inStr.replace(censoredWords[idx],"*****");
  }
  for(idx in customCensoredWords){
    inStr = inStr.replace(customCensoredWords[idx],"*******");
  }
  return inStr;
}
function addCensoredWord(word){
  customCensoredWords.push(word);
}
function getCensoredWords(){
  return censoredWords.concat(customCensoredWords);
}
exports.censor=censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords=getCensoredWords;
