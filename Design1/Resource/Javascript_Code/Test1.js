
function changer()
{
    var i = "Hello ";
    var e = "World ";
    var phrase = document.getElementById('top').querySelectorAll("p");
    phrase.innerHTML = (i+e);
}
function beforePlacement()
{
    var newText = document.createElement('li');
    newText.setAttribute('id', 'bottomless');
    newText.textContent = "Programming is Cooler6";
    
    var locator = document.getElementById('top');
    locator.insertBefore(newText, locator.firstElementChild);
    //locator.removeChild(newText);
}
/* Okey what this part of the code does it that it checks to see if the text with the Id tag bottomless has the same string as it was created when you hit "Click Me" the text is now "Programming is Cooler" and if it is, it will change the text to "it already exist", if it is not it will change it to Programming is Cooler" */
function afterPlacement()
{
var b = "Apple Bottom Jeans With The Fur";
var a = document.getElementById('bottomless').innerHTML;
    //console.log(iop);
    //console.log(a);

if(a == b)
{
    document.getElementById("bottomless").innerHTML = "Already Exist";
    console.log(a);
    console.log("the Value is def.1");
}
else
{
    document.getElementById("bottomless").innerHTML = b;
    console.log("The value is not 1 and a is Changed");
}
    //document.getElementById("block1").innerHTML = "How are you?";
}
