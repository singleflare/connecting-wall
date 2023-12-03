let groups=[
  {group1:["one","two","three","four"]},
  {group2:["five","six","se7en","8ight"]},
  {group3:["nin9","1en","eleven","twelve"]},
  {group4:["thhriteen","fourteen","fifteen","sixteen"]}
]
let selected=[]
let clickColor='green'

function playSound(file){
  let sound=new Audio('audio/'+file)
  sound.play()
}

for(let i=1;i<=16;i++){
  document.getElementById('b'+i).addEventListener('click',function(){
    document.getElementById('b'+i).style.backgroundColor=clickColor
    playSound('wallBtnClick.mp3')
    selected.push(i)
    console.log(selected)

    if(selected.length==4){ //each element clicked triggers the 'check array'
      setInterval(function(){
        for(let i=0;i<=3;i++){
          document.getElementById('b'+selected[i]).style.backgroundColor='#91C3E4'
        }
        playSound('incorrectGroup.mp3')
        selected=[]
      },1000)
      
    }
  })
}

function setClickColor(color){
  clickColor=color
}