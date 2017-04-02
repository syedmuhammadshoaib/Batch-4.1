/* Assignment 1*/

var table;
var start=0;
var end;


table =+prompt("Enter Table no","2");

start =+prompt("Enter starting value","1");

end =+prompt("Enter ending Value","5");
document.write("<h2>Assignment 1 </h2><br/>");
for(i=start;i<=end; i++)
{
    document.write(table+"*"+i+"=",table*i+"<br/> ");
   
}

 document.write("<br/>"); document.write("<br/>");
/* Assignment 2*/

document.write("<h2>Assignment 2 </h2><br/>");
for(var i=1;i<=8; i++)
{
       
for(var j=0;j<i; j++)
{

    document.write("*");
  
}  
 document.write("<br/>");
}
 document.write("<br/>"); document.write("<br/>");

/* Assignment 3*/

document.write("<h2>Assignment 3</h2><br/>");
var end=6;
for(var i=1;i<=end; i++)
{
//document.write(" ");   

for(var j=i;j < end; j++)
{
  document.write("#");
}
for(var k=1;k <=(2*i-1) ; k++)
{
  document.write("*");
}
document.write("</br>");

//end--;  
}

for(var i=end;i >=1; i--)
{
//document.write(" ");   

for(var j=i;j < end; j++)
{
  document.write("#");
}
for(var k=1;k <=(2*i-1) ; k++)
{
  document.write("*");
}
document.write("</br>");

//end--;  
}


