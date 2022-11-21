var selectedRow=null;

function formsubmit(e)
{

    event.preventDefault();
    var formdata=readformdata();
     if(selectedRow === null)
     {
        insertNewRecord(formdata);
     }
     else{
       updateRecord(formdata);
     }
     reset();
}





function readformdata()
{
    var formdata={};
formdata["pname"]=document.getElementById('pname').value;
formdata["pcode"]=document.getElementById('pcode').value;
formdata["qty"]=document.getElementById('qty').value;
formdata ["price"]=document.getElementById('prc').value;
return formdata;
}

function insertNewRecord(data){

    var table = document.getElementById('table-list').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
      cell1.innerHTML = data.pname;
     
      var cell2 = newRow.insertCell(1);
      cell2.innerHTML = data.pcode;
      
      var cell3 = newRow.insertCell(2);
      cell3.innerHTML = data.qty;
      
      var cell4 = newRow.insertCell(3);
      cell4.innerHTML = data.price;
      
      var cell5 = newRow.insertCell(4);
      cell5.innerHTML = `<button onclick="onedit(this)">Edit</button><button onclick="ondelete(this)">Delete</button>`
      
}

function onedit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById('pname').value=selectedRow.cells[0].innerHTML;
    document.getElementById('pcode').value=selectedRow.cells[1].innerHTML;
    document.getElementById('qty').value=selectedRow.cells[2].innerHTML;
    document.getElementById('prc').value=selectedRow.cells[3].innerHTML;
}


function updateRecord(formdata){
selectedRow.cells[0].innerHTML=formdata.pname;
selectedRow.cells[1].innerHTML=formdata.pcode;
selectedRow.cells[2].innerHTML=formdata.qty;
selectedRow.cells[3].innerHTML=formdata.price;
}

function ondelete(td){
    if(confirm('do you want delete this record'))
    {
        row=td.parentElement.parentElement;
        document.getElementById('table-list').deleteRow(row.rowIndex);
    }
    reset();
}




function reset()
{
    document.getElementById('pname').value = "";
    document.getElementById('pcode').value = "";
    document.getElementById('qty').value = "";
    document.getElementById('prc').value = "";
}