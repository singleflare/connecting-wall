let groups=[
  {group1:["one","two","three","four"]},
  {group2:["five","six","se7en","8ight"]},
  {group3:["nin9","1en","eleven","twelve"]},
  {group4:["thhriteen","fourteen","fifteen","sixteen"]}
]
let brickClues=[]
let selected=[]
let clickColor='green'

function playSound(file){
  let sound=new Audio('audio/'+file)
  sound.play()
}

for(let i=1;i<=16;i++){
  document.getElementById('b'+i).addEventListener('click',function(){
    select()

    if(selected.length==4){ //each element clicked triggers the 'check array'
      setInterval(uncheck,1000)
    }
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