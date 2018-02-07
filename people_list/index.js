var ul = $("ul")[0];
var storageKey = "personName";
var oldItems = JSON.parse(getStorage('personName')) || [];

function appChild(){
	for(i=0; i < oldItems.length;i++){
		var	 li = document.createElement("li");
		$(li).css('background-color', getRandomColor());
		li.innerText = oldItems[i];
		ul.appendChild(li);	
	} 	  
}

appChild();

function addNewElement(){														//add new element to main content
	var text = prompt("Input name");
    if (text != '' && text != null) {
	    oldItems.push(text);
	    setStorage(storageKey,JSON.stringify(oldItems));
	    ul.innerText = '';
	    appChild();
  
    }else{
    	alert("Input something");
    }  
}

$(function(){																	//make bars sortable
	$("ul").sortable();
	$("ul").disableSelection();
});

function getRandomColor() {														//generate random colors
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);
    var color = "rgb(" + x + "," + y + "," + z + ")";
 	return color;
}

function getStorage(cname) {
	return	window.localStorage.getItem(cname);
}

function setStorage(cname, cvalue) {
	window.localStorage.setItem(cname,cvalue);
}

function deleteList(){														//remove all data list from local storage
	var answer = confirm("Are you sure?")
	if(answer) {
		window.localStorage.clear();
		window.location = window.location;
	}
	else{
		return;
	}
}
