

function display(){
    console.log("button clicked");
    formvalidate();
    }
    




var inputs=document.getElementById('input');
var message=document.getElementById('msg');
var posted=document.getElementById('posts');
var formvalidate = () =>{
    if(inputs.value === ""){
        message.innerHTML="post can not be blanked";
        console.log("failure");
    }
    else{
        message.innerHTML="";
        console.log("success");
        acceptdata();
    }
};


var data={};
  


var acceptdata=()=>
{
data["text"]=inputs.value;
console.log(data.text);
createdata();
}


    var createdata=()=>{
        posted.innerHTML +=
       ` <div>
        <p> ${data.text}</p>


    <button type="edit" onClick="editpost(this)">Edit</button>

    <button type="delete" onClick="deletepost(this)"> Delete</button>

     </div>`;

        
        
    
    };

    var deletepost=(e)=>
    {
      e.parentElement.remove();
    };



    var editpost=(e)=>
    {
        inputs.value=e.parentElement.parentElementSibling.innerHTML;
        e.parentElement.remove();
    };