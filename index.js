let groupsAndClues=[
  {group1:["0","1","2","3"]},
  {group2:["4","5","6","7"]},
  {group3:["8","9","A","B"]},
  {group4:["C","D","E","F"]}
]

function playAudio(audio){
  new Audio('./audio/'+audio).play()
}
let selectedClueEList=[]
let correctGroups=0

let cluesListList=(()=>{
  let res=[]
  groupsAndClues.forEach(group=>{res.push(...Object.values(group))})
  //Object: A class/object that works with objects.
  //Object.values/keys(object): Object's method that returns the values/key of object
  return res
})()

function shuffle(arr){
  for(let i=0;i<arr.length;i++){
    let rand=Math.floor(Math.random()*(i+1))
    let temp=arr[rand]
    arr[rand]=arr[i]
    arr[i]=temp
  }
  return arr
}

function createHtml(parent,tag,cssClass,content){
  /*
  parent: element's parent. Must pass an existing element to append child to that element.
  tag: element's HTML tag
  cssClass: Must be separated by spaces.
  */
  let child=parent.appendChild(document.createElement(tag))
  if(cssClass) child.classList.add(...cssClass.split(" "))
  if(content) child.innerHTML=content
  return child
}

function select(brickE){
  playAudio('wallBtnClick.mp3')
  selectedClueEList.push(brickE)
  console.log(selectedClueEList)
  brickE.style.backgroundColor='#054872'
  brickE.style.color='white'
  if(selectedClueEList.length==4){setTimeout(checkCorrect,500)}
}

function deselect(brickE){
  
}

function checkCorrect(){
  cluesListList.forEach(function(cluesList){
    let selectedClueList=(()=>{
      let res=[]
      selectedClueEList.forEach(function(selectedClueE){res.push(selectedClueE.innerHTML)})
      return res
    })()
    let sortedCluesList=cluesList.sort()
    let sortedSelectedCluesList=selectedClueList.sort()
    if(sortedSelectedCluesList.every((clue,i)=>clue===sortedCluesList[i])){
      playAudio('solveClue.mp3')
    }
  })
  playAudio('incorrectGroup.mp3')
  selectedClueEList.forEach((element)=>{
    element.style.backgroundColor='#91C3E4'
    element.style.color='black'
  })
  selectedClueEList=[]
}

function move(el1,el2){
  
}

function game(){
  let elementList=document.getElementsByClassName('brick')

  //write clue contents to each brick
  shuffle(cluesListList.flat()).forEach(function(clue,index){elementList[index].innerHTML=clue})

  //assign event listener to each brick
  for(let element of elementList){element.addEventListener("click",function(){select(element)})}

}