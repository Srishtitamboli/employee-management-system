var entry = document.getElementById("entry");
entry.addEventListener("onclick",insertion);

var row =1;
function insertion(){
    var name = document.getElementById("name").value;

    if(!name || typeof name!="string"){
        alert("Plzz enter a valid name");
        return;
    }
    
    var display = document.getElementById("list");
    var newrow = display.insertRow(row);
    var cell1 = newrow.insertCell(0);
    cell1.innerHTML = name;

    row++;
}

var removing = document.getElementById("removing");
removing.addEventListener("onclick",deletion);

function deletion(){
    var name1 =document.getElementById("name1").value;

    if(!name1){
        alert("Plzz enter a valid name");
        return; 
    }
    var col = document.getElementsByTagName("td");
   for(var i=0;i<col.length;i++){
       if(col[i].innerText == name1)
           document.getElementById("list").deleteRow(i+1);
       
   }
}