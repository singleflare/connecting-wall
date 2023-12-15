let groupsAndClues=[
  {group1:["0","1","2","3"]},
  {group2:["4","5","6","7"]},
  {group3:["8","9","A","B"]},
  {group4:["C","D","E","F"]}
]

elementList=document.getElementsByClassName('brick')
let selectedElements=[]
let correctGroups=0

let cluesStrList=(()=>{ //flatten groups array into cluesStrList array
  let result=[]
  groupsAndClues.forEach(group=>{result.push(...Object.values(group))})
  //Object: A class/object that works with objects.
  //Object.values/keys(object): Object's method that returns the values/key of object
  result=result.flat()
  return result
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

function select(brickElement){
  selectedElements.push(brickElement)
  console.log(selectedElements)
  brickElement.style.backgroundColor='#054872'
  brickElement.style.color='white'
  if(selectedElements.length==4){setTimeout(checkCorrect,500)}
}

function deselect(brickElement){
  
}

let listOfCluesList=(()=>{
  let result=[]
  groupsAndClues.forEach(group=>{result.push(...Object.values(group))})
  return result
})

function checkCorrect(){
  
  groupsAndClues.forEach(function(group){
    let isEqual=selectedElements.every((element,i)=>{element[i].innerHTML})
    if(selectedElements.every((clue,i)=>clue===group[i])){
      console.log('correct')
    }
    else{
      selectedElements.forEach((element)=>{
        element.style.backgroundColor='#91C3E4'
        element.style.color='black'
      })
      selectedElements=[]
    }
  })
}

function game(){
  shuffle(cluesStrList)

  //write clue contents to each brick
  cluesStrList.forEach(function(clue,index){elementList[index].innerHTML=clue})

  //assign event listener to each brick
  for(let element of elementList){element.addEventListener("click",function(){select(element)})}


}