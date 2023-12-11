let groups=[
  {group1:["one","two","three","four"]},
  {group2:["five","six","se7en","8ight"]},
  {group3:["nin9","1en","eleven","twelve"]},
  {group4:["thhriteen","fourteen","fifteen","sixteen"]}
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

elementList=document.getElementsByClassName('brick')

function game(groups){
  if(!groups){
    groups=[
      ["0","1","2","3"],
      ["4","5","6","7"],
      ["8","9","A","B"],
      ["C","D","E","F"]
    ]
  }
  shuffle(cluesList)

  cluesList.forEach(function(clue,index){
    elementList[index].innerHTML=clue
    console.log(cluesList.length,elementList.length)
  })

  
}
function select(brick){
  document.getElementById('b'+i).style.backgroundColor=clickColor
  selected.push(i)
  console.log(selected)
}

function deselect(brick){
  document.getElementById('b'+i).style.backgroundColor='#91C3E4'
  console.log(selected)
}

function checkCorrect(){
  selected.forEach(()=>{
    document.getElementById('b'+selected[i]).style.backgroundColor='#91C3E4'
  })
  selected=[]
}

function shuffleBricks(){

}



function setClickColor(color){
  clickColor=color
}