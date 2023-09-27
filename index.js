let groups=[
  {group1:["one","two","three","four"]},
  {group2:["five","six","se7en","8ight"]},
  {group3:["nin9","1en","eleven","twelve"]},
  {group4:["thhriteen","fourteen","fifteen","sixteen"]}
]
let brickClues=[]
let brickElement=document.getElementsByClassName('brick')
const WIDTH=4
let selected=[]
function playSound(file){
  let sound=new Audio('audio/'+file)
  sound.play()
}

function getIdByInnerHTML(innerHTML) {
  let allElements = document.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i++) {
    if (allElements[i].innerHTML === innerHTML) {
      return allElements[i].id;
    }
  }
  return null;
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

function checkCorrect(selectedArray) {
  for (let group of groups) {
    for (let key in group) {
      let allElementsInGroup = selectedArray.every(element => group[key].includes(element))
      if (allElementsInGroup) {
        return true
      }
    }
  }
  return false
}

function swap2GridInnerHTMLs(innerHTML1,innerHTML2){
    // Get the elements
  id1 = getIdByInnerHTML(innerHTML1);
  id2 = getIdByInnerHTML(innerHTML2);

  // Create markers for the original positions
  let marker1 = document.createElement('div');
  let marker2 = document.createElement('div');

  // Insert the markers
  id1.parentNode.insertBefore(marker1, id1);
  id2.parentNode.insertBefore(marker2, id2);

  // Swap the elements
  marker1.parentNode.insertBefore(id2, marker1);
  marker2.parentNode.insertBefore(id1, marker2);

  // Remove the markers
  marker1.parentNode.removeChild(marker1);
  marker2.parentNode.removeChild(marker2);
}

for(let i=1;i<=16;i++){
  document.getElementById('b'+i).innerHTML=brickClues[i-1]
  brickElement[i-1].onclick=function(){
    playSound('wallBtnClick.mp3')
    if(this.style.backgroundColor!='blue'){
      this.style.backgroundColor='blue'
      this.style.color='white'
      selected.push(document.getElementById('b'+i).innerHTML)
      console.log(selected)
      if(selected.length==4){
        if(checkCorrect(selected)==true){
          setTimeout(function(){
            playSound("solveClue.mp3")
            swap2GridElements('b1','b2')
          },500)
        }
        else{
          setTimeout(deselectAll,500)
        }
      }
      
    }
    else{
      this.style.backgroundColor='#91C3E4'
      this.style.color='#1D3C4C'
      selected=selected.filter(item=>item!==document.getElementById('b'+i).innerHTML)
      console.log(selected)
    }
  }
}