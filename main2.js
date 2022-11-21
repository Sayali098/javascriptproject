var selectedRow=null;

function onformsubmit()
{
    var formdata=readformdata();
     if(selectedRow === null)
     {
        insertNewRecord(formdata);
     }
     else{

     }
}



function readformdata()
{
    var formdata={};
var prdname=document.getElementById('pname').value;
var prdcode=document.getElementById('pcode').value;
var quantities=document.getElementById('qty').value;
var  prices=document.getElementById('prc').value;
return formdata;
}

function insertNewRecord(data){

    var table =document.getElementById('table-list').getElementByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    var cell1=newRow.insertCell(0);
      cell1.inneHTML=data.prdname;
      var cell2=newRow.insertCell(1);
      cell1.inneHTML=data.prdcode;
      var cell3=newRow.insertCell(2);
      cell1.inneHTML=data.quantities;
      var cell4=newRow.insertCell(3);
      cell1.inneHTML=data.prices;
      var cell5=newRow.insertCell(4);
      cell1.inneHTML=`<button>Edit</button><button>Delete</button>`;
      
}
