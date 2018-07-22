//define functions here

function getIt()
{
  $("p").on("keypress", function(key)
  {
    if(key.which === 13)
    {
      alert("Hey!")
    }
  })
}

$(document).ready(function(){

getIt()

});
