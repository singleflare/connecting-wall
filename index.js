let groupsAndClues=[
  {group1:["0","1","2","3"]},
  {group2:["4","5","6","7"]},
  {group3:["8","9","A","B"]},
  {group4:["C","D","E","F"]}
]

function playAudio(audio){
  new Audio('./audio/'+audio).play()
}
/**Array of selected bricks.*/let selected=[]
/**Index of the correct group's row. Max 3.*/let row=0
let wall=document.getElementById('wall')

/**Array of same-connection clue arrays.*/let connections=(()=>{
  let res=[]
  groupsAndClues.forEach(group=>{res.push(...Object.values(group))})
  //Object: A class/object that works with objects.
  //Object.values/keys(object): Object's method that returns the values/key of object
  return res
})()

/**Array of all clues.*/let clues=connections.flat()

/**Array of all bricks.*/let bricks=document.getElementsByClassName('brick')
console.log(bricks,clues)

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

/**Selects brick, adds them to the selected array, and highlights it.*/
function select(e){
  playAudio('wallBtnClick.mp3')
  selected.push(e)
  // console.log(selected)
  e.style.backgroundColor='#054872'
  e.style.color='white'
  if(selected.length==4){setTimeout(checkCorrect,500)}
}

function checkCorrect(){
  connections.forEach(function(connection){
    let selectedClues=(()=>{
      let res=[]
      selected.forEach(function(element){res.push(element.innerHTML)})
      return res
    })()
    if(selectedClues.sort().every((clue,i)=>clue===connection.sort()[i])){
      console.log(selectedClues.sort(),connection.sort())
      playAudio('solveClue.mp3')

      // calculate new position in the grid
      selected.forEach(function(e){
        e.row=row
      })
			let rowIndex = row * 4;
			let unsolvedIndex = rowIndex + 4;
      bricks.forEach(function (brick, index) {
        if (brick.row < row) {
          brick.newIndex = index;
        } else if (brick.row == row) {
          brick.newIndex = rowIndex++;
        } else {
          brick.newIndex = unsolvedIndex++;
        }
        brick.newTop = bricks[brick.newIndex].cell.offsetTop;
        brick.newLeft = bricks[brick.newIndex].cell.offsetLeft;
      });

    }
  })
  playAudio('incorrectGroup.mp3')
  selected.forEach((element)=>{
    element.style.backgroundColor='#91C3E4'
    element.style.color='black'
  })
  selected=[]
}

function move(){
  
}

function game(){

  

  //write clue contents to each brick
  shuffle(clues).forEach(function(clue,index){bricks[index].innerHTML=clue})

  //assign event listener to each brick
  for(let element of bricks){element.addEventListener("click",function(){select(element)})}

}