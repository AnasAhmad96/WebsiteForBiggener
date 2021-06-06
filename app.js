// alert part 1 for user alert

/*alert('welcome to WebsiteForBiggener')
var answer = prompt('Are you biggener ?')
if(answer === 'yes')
{
  alert('this course for you , Welcome')
}
else{
  alert('you are not allowed to enter the website')

}*/

// part two to enter num and if enter wrong user have just 5 chance to correct (nested condition)
/*var inputuser=prompt
("pleas rate our site from 1 to 5")
if(inputuser <1 || inputuser >5 )
 {
   alert("you enterned wrong rate ")
   
      for(var x=0 ; x<5 && (inputuser <1 || inputuser >5 ) ; x++)
     {
       var inputuser = prompt("pleas rate our site again from 1 to 5")
      
       }
}
alert ("Thank you for your time")*/

// last part for img loop and counter but i dont want chose another photo because the size will be ugly on my page so after any level i will learn more how add new features 
/*for (var a=1 ; a <= 5 ; a++)
{
var img = document.createElement("img");
img.src = "small.png";
var src = document.getElementById("x");
src.appendChild(img);
document.write( "   " + a)
}*/

// lab07 add function Welcoming part

function alertWeclome()
{
alert('welcome to WebsiteForBiggener')
var answer = prompt('Are you biggener ?')
alert('welcome to WebsiteForBiggener')

if(answer === 'yes')
{
  alert('this course for you , Welcome')
}
else{
  alert('you are not allowed to enter the website')

}
}
// lab07 add function rating us 
function ratingOurWebsite()
{
  var inputuser=prompt

// part two to enter num and if enter wrong user have just 5 chance to correct (nested condition)
var inputuser=prompt
("pleas rate our site from 1 to 5")
if(inputuser <1 || inputuser >5 )
 {
   alert("you enterned wrong rate ")
   
      for(var x=0 ; x<5 && (inputuser <1 || inputuser >5 ) ; x++)
     {
       var inputuser = prompt("pleas rate our site again from 1 to 5")
      
       }
}
alert ("Thank you for your time")
}
// lab07 add function looping (for,while)
function loobing()
{
  for (var a=1 ; a <= 5 ; a++)
// last part for img loop and counter but i dont want chose another photo because the size will be ugly on my page so after any level i will learn more how add new features 
for (var a=1 ; a <= 5 ; a++)
{
var img = document.createElement("img");
img.src = "small.png";
var src = document.getElementById("x");
src.appendChild(img);
document.write( "   " + a)
}
}
// called function
alertWeclome();
ratingOurWebsite();
loobing();
