let groups=[
  {link:"1",clues:["1","2","3","4"]},
  {link:"2",clues:["5","6","7","8"]},
  {link:"3",clues:["9","10","11","12"]},
  {link:"4",clues:["13","14","15","16"]}
]
(function($){
  groups.forEach(group => {
    group.clues.forEach(clue,$ => {
      $('wall').html(clue)
    });
  });
})(jQuery)