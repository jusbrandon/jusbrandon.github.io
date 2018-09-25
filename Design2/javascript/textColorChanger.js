function changeColor(element, curNumber)

{
    curNumber++;

    if(curNumber > 4){
        curNumber = 1;
    }
    element.addClass('color' + curNumber, 500);
   	element.attr('class', 'color' + curNumber);
    
    setTimeout(function(){changeColor(element, curNumber)}, 1000);  
}

