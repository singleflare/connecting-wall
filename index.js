let groups=[
  {group1:["0","1","2","3"]},
  {group2:["4","5","6","7"]},
  {group3:["8","9","A","B"]},
  {group4:["C","D","E","F"]}
]

let cluesList=(()=>{
  let result=[]
  groups.forEach(group=>{
    result.push(...Object.values(group))
    //Object: A class/object that works with objects.
    //Object.values(object): Object's method that returns the values of object
    //Object.keys(boject): Return object's key
  })
  result=result.flat()
  return result
})()
let selected=[]
let clickColor='green'

function shuffle(arr){
  for(let i=0;i<arr.length;i++){
    let rand=Math.floor(Math.random()*(i+1))
    let temp=arr[rand]
    arr[rand]=arr[i]
    arr[i]=temp
  }
  return arr
}

function createHtmlElement(parent,tag,cssClass,content){
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
  selected.push(brickElement)
  console.log(selected)
  brickElement.style.backgroundColor='#FFFFAA'
  checkCorrect(selected)
}

function deselect(brickElement){
  document.getElementById('b'+i).style.backgroundColor='#91C3E4'
  console.log(selected)
}

function checkCorrect(elementsArr){
  if(selected.length==4){
    selected.forEach((element)=>{
      element.style.backgroundColor='#91C3E4'
    })
    selected=[]
  }
  
}

elementList=document.getElementsByClassName('brick')
console.log(elementList)
function game(groups){
  if(!groups){
    groups=[
      {group1:["NULL","NULL","NULL","NULL"]},
      {group2:["NULL","NULL","NULL","NULL"]},
      {group3:["NULL","NULL","NULL","NULL"]},
      {group4:["NULL","NULL","NULL","NULL"]}
    ]
  }
  shuffle(cluesList)

  cluesList.forEach(function(clue,index){
    elementList[index].innerHTML=clue
  })

  for(let element of elementList){
    element.addEventListener("click",function(){select(element)})
  }
}



function setClickColor(color){
  clickColor=color
}