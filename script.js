//select input and paragraph tag
var guessnumber=document.getElementById("guessnumber")
var solu=document.getElementById("result")
var randomnum=Math.floor(Math.random()*10)+1

function guess(){
   var enternum = guessnumber.value
   if(randomnum==enternum)
   {
      console.log(" Right")
      result.textContent="Good ,you are right"
      alert("you won")
   }
   else
   {
      console.log("Wrong")
      result.textContent="Try again,You are wrong "
}
}