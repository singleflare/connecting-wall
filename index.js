let groups=[
  {group1:["1","2","3","4"]},
  {group2:["5","6","7","8"]},
  {group3:["9","10","11","12"]},
  {group4:["13","14","15","16"]}
]
let brickClues=[]
for(let i=0;i<3;i++){
  for(let j=0;j<3;j++){
    brickClues.push(groups.at(i).group1[j])
    brickClues.push(groups.at(i).group2[j])
    brickClues.push(groups.at(i).group3[j])
    brickClues.push(groups.at(i).group4[j])
  }
}
console.log(brickClues)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const WIDTH=4
let selected=[]
function selectBrick(brickNum){
  selected.push(brickNum)
}