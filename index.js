let groups=[
  {group1:["one","two","three","four"]},
  {group2:["five","six","se7en","8ight"]},
  {group3:["nin9","1en","eleven","twelve"]},
  {group4:["thirteen thhriteen","fourteen","fifteen","sixteen"]}
]
let brickClues=[]
let brickElement=document.getElementsByClassName('brick')
const WIDTH=4
let selected=[]
function playSound(file){
  let sound=new Audio('audio/'+file)
  sound.play()
}

for(let i=0;i<4;i++){
  let group=Object.values(groups[i])[0]
  for(let j=0;j<4;j++){
    brickClues.push(group[j])
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
shuffleArray(brickClues)

function deselectAll(){
  if(selected.length==WIDTH){
    playSound('incorrectGroup.mp3')
    for(let i=1;i<=16;i++){
      document.getElementById('b'+i).style.backgroundColor='#91C3E4'
      document.getElementById('b'+i).style.color='#1D3C4C'
      selected.pop()
    }
  }
}

for(let i=1;i<=16;i++){
  document.getElementById('b'+i).innerHTML=brickClues[i-1]
  brickElement[i-1].onclick=function(){
    playSound('wallBtnClick.mp3')
    if(this.style.backgroundColor!='black'){
      this.style.backgroundColor='black'
      this.style.color='white'
      selected.push(document.getElementById('b'+i).innerHTML)
      console.log(selected)
      setTimeout(deselectAll,1500)
    }
    else{
      this.style.backgroundColor='#91C3E4'
      this.style.color='#1D3C4C'
      selected=selected.filter(item=>item!==document.getElementById('b'+i).innerHTML)
      console.log(selected)
    }
  }
}