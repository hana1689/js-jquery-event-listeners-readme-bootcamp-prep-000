//define functions here

function getIt()
{
  $('p').on('click', function(key)
  {
    alert("Hey!")
  })
}
function frameIt()
{
  $('img').on('load', function()
  {
    $('img').addClass('tasty')
  })
}
function submitIt()
{
  $('form').on('submit', function()
  {
    
  })
}

$(document).ready(function(){

getIt()
frameIt()

});
