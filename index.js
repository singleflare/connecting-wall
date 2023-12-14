let groups=[
  {group1:["0","1","2","3"]},
  {group2:["4","5","6","7"]},
  {group3:["8","9","A","B"]},
  {group4:["C","D","E","F"]}
]

elementList=document.getElementsByClassName('brick')
let selected=[]

let cluesList=(()=>{ //flatten groups array into cluesList array
  let result=[]
  groups.forEach(group=>{result.push(...Object.values(group))})
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
  brickElement.selected=true
  selected.push(brickElement)
  console.log(selected)
  brickElement.style.backgroundColor='#054872'
  brickElement.style.color='white'
  if(selected.length==4){setTimeout(checkCorrect,500)}
}

function deselect(brickElement){
  document.getElementById('b'+i).style.backgroundColor='#91C3E4'
  console.log(selected)
}

function checkCorrect(){
  groups.forEach(function(group){
    if(selected==Object.values(group)){console.log('correct')}
    else{
      selected.forEach((element)=>{
        element.style.backgroundColor='#91C3E4'
        element.style.color='black'
      })
      selected=[]
    }
  })
}

function game(){
  shuffle(cluesList)

  //write clue contents to each brick
  cluesList.forEach(function(clue,index){elementList[index].innerHTML=clue})

  //assign event listener to each brick
  for(let element of elementList){element.addEventListener("click",function(){select(element)})}
}