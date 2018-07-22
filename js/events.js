//define functions here

function getIt()
{
  $("p").on("keydown", function(key)
  {
    if(key.which === 83)
    {
      alert("Hey!")
    }
  })
}

$(document).ready(function(){

getIt()

});
