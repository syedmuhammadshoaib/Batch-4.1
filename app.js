
$(function(){$('#error').hide();})

function todoFunctionForInput()
{
 
var check=$('#todo').val();
    if( check!="")
    {      
     $('#error').hide();

var createTag=document.createElement('li');
var textTag=document.createTextNode(check);

var image=document.createElement('img');
image.src="Images/single.png";

image.style.cssFloat="";
image.onclick=function(){
var li=this.parentNode;
var ol=li.parentNode;
ol.removeChild(li);
  
}
createTag.appendChild(textTag);
createTag.appendChild(image);
document.getElementById('addlist').appendChild(createTag);
document.getElementById('todo').value=''; 
}  else {
$('#error').show();
        // document.getElementById("error").innerHTML='Please add your work to do!';
    
    }

  }

    

  


function removeall()
{
alert("Do you really want to delete.");
document.getElementById('addlist').innerHTML="";
}

