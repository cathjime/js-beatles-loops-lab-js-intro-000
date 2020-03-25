// add solution here
function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for(let i = 0; i < musicians.length; i++){
    arr.push(musicians[i] + " plays " + instruments[i])
  }
  return arr;
}

function johnLennonFacts(facts){
  var newArr = [];
  var num = 0;

  while(num < facts.length){
    var newFact = facts[num]+ "!!!" 
    newArr.push(newFact);
    num += 1;
  }

  return newArr;
}