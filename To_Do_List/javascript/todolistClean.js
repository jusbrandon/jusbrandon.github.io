var clicks = 0; //Used to keep track of the amount of items added
var check = true; // boolean for unchecking complete
//For use on window.onload in the main html doc
//Will reload previous entries in case of page refresh

function ReloadElements()
{
    var count = parseInt(localStorage.getItem("ListCounter"));
    for(var i = 0; i <= count; i++)
    {
        //Gets lastData#, where # is the amount of add items used in previous session 
        var convertString = document.createTextNode(localStorage.getItem("lastData"+i));
        //checks if the target was remove, therefore null, and will not put it on the list.
        
        if(convertString.textContent !== "null")
        {
            
            //This part will essentialy reiterate the todoList() function x amount of time
            //console.log("convertString is : " + convertString.textContent);

            var createElementList = document.createElement("li");
            createElementList.className += 'todoText';
            createElementList.id = ("liId" + i);
            createElementList.append(convertString.textContent);
            //createElementList.appendChild(convertString);
            //Creates the Remove button with id and classes for refrence in clearItem and RemoveItem functions
            var localRemoveBtn = document.createElement("Button");
            localRemoveBtn.setAttribute("onclick", "removeItem()");
            localRemoveBtn.id = ("value" + i);
            localRemoveBtn.setAttribute("type", "button");
            localRemoveBtn.className += "ifRemove";
            var localTxtRemoveBtn = document.createTextNode("Remove Item");
            //Create the add button with id and classes for refrence in CompleteItem function
            var localAddBtn = document.createElement("Button");
            localAddBtn.setAttribute("onclick","completeItem()");
            localAddBtn.id = ("value"+i);
            localAddBtn.setAttribute("type","button");
            localAddBtn.className +="ifAdd";
            var localTxtDoneBtn = document.createTextNode("Complete");

            //adds text to buttons
            localRemoveBtn.appendChild(localTxtRemoveBtn);
            localAddBtn.appendChild(localTxtDoneBtn);
            //attach buttons to a list
            createElementList.appendChild(localRemoveBtn);
            createElementList.appendChild(localAddBtn);

            document.getElementById("checklist").appendChild(createElementList);

        }        
    }
    if(!isNaN(count))
    {
        clicks =count + clicks + 1;
    }
    //Will keep track if the task was marked completed on refresh
    for(var i =0; i <= localStorage.length; i++)
        {
            var KeyToValue = localStorage.getItem(localStorage.key(i));
            //console.log(localStorage.key(i));
                if(KeyToValue !== null)
                {
                    var valueToString = KeyToValue.toString();
                }
                if(valueToString === "complete")
                {
                    var c = localStorage.key(i).replace(/^\D+/g, '');   
                    $("#liId"+c).css('background-color', 'lightgreen');
                }
        }  
}

function completeItem(){
    if(check == true)
    {
        $(".ifAdd").on("click", function(){
            var valueId = $(this).attr("id");
            var RawNumber = valueId.replace(/^\D+/g, '');
            $(this).closest('li').css('background-color', 'lightgreen');
            localStorage.setItem("dataComplete"+RawNumber, "complete");
            check = false;
        });
    }
    else if (check == false)
    {
        $(".ifAdd").on("dblclick", function(){
            var valueId = $(this).attr("id");
            var RawNumber = valueId.replace(/^\D+/g, '');
            $(this).closest('li').css('background-color', 'whitesmoke');
            localStorage.removeItem("dataComplete" + RawNumber);
            check = true;
        });
    }

}
function removeItem(){
    $(".ifRemove").on('dblclick', function(){
        var valueId = $(this).attr("id");
        var RawNumber = valueId.replace(/^\D+/g, '');
        var NumberToString = RawNumber.toString();
        $(this).closest('li').remove();
        localStorage.removeItem("lastData"+RawNumber);
        localStorage.removeItem("dataComplete"+RawNumber);

    });
}
function clearItems(){
    
    $(".todoText").remove();
    $(".ifRemove").remove();
    clicks = 0;
    localStorage.clear();
}
// Creats functions for the Add button, while also saving files to localStorage in case of wipe
function todoList(){
    
    //Creates and stores variables to receive users input and
    var getText  = document.getElementById("TodoInput").value;
    localStorage.setItem("ListCounter", clicks);
    localStorage.setItem("lastData"+clicks, getText);
    var Text = document.createTextNode(getText);
    var createList = document.createElement('li');
    //createList.setAttribute('class', 'todoText');
    createList.className += 'todoText';
    
    
    //Creates the Remove button with id and classes for refrence in clearItem and RemoveItem functions 
    var removeBtn = document.createElement("Button");
    removeBtn.setAttribute("onclick", "removeItem()");
    removeBtn.id = ("value" + clicks);
    removeBtn.setAttribute("type", "button");
    removeBtn.className += "ifRemove";
    var TxtRemoveBtn = document.createTextNode("Remove Item");
    //Create the add button with id and classes for refrence in CompleteItem function
    var addBtn = document.createElement("Button");
    addBtn.setAttribute("onclick","completeItem()");
    addBtn.id = ("value"+clicks);
    addBtn.setAttribute("type","button");
    addBtn.className +="ifAdd";
    var TxtDoneBtn = document.createTextNode("Complete");
    
    //Puts value into the created list
    createList.appendChild(Text);
    
    //adds text to buttons
    removeBtn.appendChild(TxtRemoveBtn);
    addBtn.appendChild(TxtDoneBtn);
    //attach buttons to a list
    createList.appendChild(removeBtn);
    createList.appendChild(addBtn);

    //Create and Show elements
    document.getElementById("checklist").appendChild(createList);

    //Keeps tracks of items added
    clicks++; 

}//Made by Brandon Nguyen