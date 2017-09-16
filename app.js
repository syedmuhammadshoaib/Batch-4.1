document.write("<h1>LAB ASSIGNMENT # 2 </h1>");
document.write("<h2>Orange Section </br>ROLL NO:4730</h2>");
document.write("<h3>Syed Muhammad Shoaib </h3>");
document.write("<h4>Sunday 2-4/4-7 </h4>");
document.write("</br>");

document.write("<h3>1. Write a program to display the message “Hello World” 5 times in your browser using for loop.</h3>");
for(var i=0;i<=5;i++)
document.write("Hello World </br>");
document.write("</br>");

document.write("<h3>2. Write a program to print numeric counting from 1 to 10.</h3>");
document.write("</br>");
for(var i=1;i<=10;i++)
document.write(i+"</br>");

var tableno;
var length;
document.write("</br>");
document.write("<h3>3. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.</h3>");
document.write("</br>");
tableno=+prompt("Enter number to print its multiplication",2);
length=+prompt("Enter the length of table",10);

for(var i=1;i<=length;i++)
{
    document.write(tableno+"x"+i+"="+tableno*i+"</br>");
}
document.write("</br>");
document.write("<h3>4. You have an array A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”] Write each element on new line with the help of for loop.</h3>");
document.write("</br>");
var array = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
for(var i=0;i<array.length;i++)
document.write(array[i]+"</br>");
document.write("</br>");
document.write("<h3>5. Write a program to print items of the following array using for loop:</h3>");
document.write("</br>");
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(var i=0;i<fruits.length;i++)
document.write(array[i]+"</br>");
document.write("</br>");
document.write("</br>");
for(var i=0;i<fruits.length;i++)
{
document.write("Element at Index "+i+"is "+array[i]+"</br>");
}

document.write("</br>");
document.write("<h3>6. Write a program to initialize an array of N items by using prompt. Where N is number of items as entered by the user.</h3>");
document.write("</br>");
var nItems=+prompt("Enter the number of item",4);
if(nItems !=null)
{
var newArray=[];
for(var i=0;i<nItems;i++)
{
var userInput=prompt("Enter value for "+i+ " Index ","Enter item");
newArray.push(userInput);
}
var n=newArray.length;
document.write("Numbers of items",n);
document.write("</br>");
for(var i=1;i<n;i++)
{
document.write(newArray[i]+"</br>");
}}
else{
    document.write("you have not input any fruit");
}
document.write("<h3>7. Generate the following series in your browser. See example output.</h3>");
document.write("</br>");
for(var a=1;a<=15;a++)
document.write(a+" ");
document.write("</br>");
document.write("</br>");
document.write("<b>Reverse Counting</b>");
document.write("</br>");
for(var a=10;a>=1;a--)
document.write(a+" ");
document.write("</br>");
document.write("</br>");
document.write("<b>even</b>");
document.write("</br>");
for(var a=0;a<=20;a+=2)
document.write(a+" ");
document.write("</br>");
document.write("</br>");
document.write("<b>odd</b>");
document.write("</br>");
for(var a=0;a<=20;a++)
{
    if(a%2 !=0)
document.write(a+" ");
}
document.write("</br>");
document.write("</br>");
document.write("<b>Series:</b>");
document.write("</br>");
for(var a=2;a<=20;a+=2)
document.write(a+"K ");



document.write("</br>");
document.write("<h3>8. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whe var bakrey</h3>");
document.write("</br>");
var bakrey=["cake", "apple pie","cookie", "chips","patties"];
var flag=false;
var userOrder=prompt("Welcome to Syed Bakrey What do u want to order Sir/Maam","cake/apple pie/cookie/chips/patties");
if (userOrder !=null)
{
for(var k=0;k<bakrey.length;k++)
{
if(bakrey[k]==userOrder.toLowerCase())
{
flag=true;
break;
}
else
{
 flag=false;
}
}

}else
{
    document.write("You have not order any thing");
}
if(flag===true)
{
    alert(userOrder+" is Available at index "+k+" in our bakrey");
}
else{
alert("we are sorry "+userOrder+" is not Available in our bakery");
}
document.write("</br>");

document.write("<h3>9. Write a program to identify the largest number in the given array.A = [24, 53, 78, 91, 12]</h3>");
document.write("</br>")
;
var largest= [24, 53, 78, 91, 12];
var temp;


document.write("Array item is ",largest);
document.write("</br>")
for(var k=0;k<largest.length;k++)
{
if(largest[k]>largest[k+1])
{
temp=largest[k];
}else if(largest[k]<largest[k+1])
{
temp=largest[k+1];
}
}
document.write("The largest number is "+temp);

document.write("</br>");


document.write("<h3>10. Write a program to identify the smallest number in the given array.A = [24, 53, 78, 91, 12]</h3>");
document.write("</br>")
document.write("Array item is ",largest);
document.write("</br>")
for(var k=0;k<largest.length;k++)
{
for(var c=0;c<largest.length;c++)
{
if(largest[k]<largest[c])
{
temp=largest[k];
}
}
}
document.write("The Smallest number is "+temp);
var smallest;
document.write("</br>");
document.write("Array item is ",largest);
document.write("</br>");
document.write("<h3>11. Write a program to identify the largest & the smallest number in the given array.</h3>");

document.write("</br>");
for(var k=0;k<largest.length;k++)
{
for(var c=0;c<largest.length;c++)
{
if(largest[k]<largest[c])
{
smallest=largest[k];
}
else if(largest[k]>largest[c])
{
temp=largest[k];
}
}
}

document.write("The Smallest number is "+smallest);
document.write("</br>");
document.write("The largest number is "+temp);
document.write("</br>");
document.write("<h3>12. Write a program to print multiples of 5 ranging 1 to 100</h3>");
document.write("</br>");
for(var five=5;five<=100;five+=5)
document.write(five+",");
document.write("</br>");

document.write("<h3>13. You have given the following arrays: var students = [Ali Sami Taha Inam];var scores = [58, 73, 89, 90];</h3>");
document.write("</br>");

var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];
document.write("<table border='1'><tr><td>Students</td><td>Scores</td></tr>");

for(var rec=0;rec<students.length;rec++)
document.write("<tr><td>"+students[rec]+"</td><td>"+scores[rec]+"</td></tr>");
document.write("</table>");
document.write("</br>");
var scores = [12, 45, 3, 22, 34, 50];
document.write("Array item is ",scores);
document.write("</br>");
document.write("</br>");

document.write("<h3>14. Write a program that prints number from start of the array to desired stop value. Given array: var scores = [12, 45, 3, 22, 34, 50];(Hint: take stop value from user) </h3>");

var input=+prompt("Enter Your Desired Value to stop b/w [12, 45, 3, 22, 34, 50]",45);

for(var c=0;c<=scores.indexOf(input);c++)
{
document.write(scores[c]+",");
}
document.write("</br>");

document.write("<h3>15. You have an array A = [ [1,2,3] , [4,5,6] , [7,8,9] ]Write each element on new line with the help of nested for loops.</h3>");
document.write("</br>");
var threeDarray = [ [1,2,3] , [4,5,6] , [7,8,9] ]

document.write("Array item is ",threeDarray);
document.write("</br>");
for(var a=0;a<threeDarray.length;a++)
document.write(threeDarray[a]+"</br>");


document.write("</br>");
document.write("</br>");
document.write("<h3>16. Write a program to repeatedly print the value of the variable num which is input by user. Value should be decreasing by 0.5 each time, as long as x Value remains positive.</h3>");
document.write("</br>");
var decreaseValue=+prompt("Enter a number that value will be decrease",5);

for(var e=decreaseValue;e>=0;)
{
    e=e-0.5;
   if(e!=0){
document.write(e+",");
    }
    if(e==0)
   {
       document.write(e+",");
   break;
}

}

document.write("</br>");
document.write("</br>");
document.write("<h3>17. The even/odd reporter.</h3>");
document.write("</br>");
for(var a=0;a<=20;a++)
{
    if(a%2 ==0){
document.write(a+" is even </br>");
}else if(a%2!==0)
{
document.write(a+" is odd </br>");

}}
document.write("</br>");
document.write("<h3>18. Write a program to calculate the product of the odd integers from 1 to 7.</h3>");
document.write("</br>");
var totalodd=1;
for(var a=1;a<=7;a++)
{
if(a%2!==0)
{
totalodd*=a;
}}

document.write("The product of the odd integer is "+totalodd);
document.write("</br>");

document.write("<h3>19. Write a program that will write out a wedge of stars. The user will enter the initial number of stars, and the program will write out lines of stars where each line has one few star than the previous line. Initial number of stars: 7 </h3>");
document.write("</br>");
for(var rpar=7;rpar>=0;rpar--)
{
for(var again=0;again<rpar;again++)
{
document.write("*");
}
document.write("</br>");
}
document.write("<h3>20. Write a program to create the following patterns in your browser. Take number of lines as an input.</h3>");
document.write("<b>a)</b>");
for(var rpar=1;rpar<=4;rpar++)
{
for(var again=1;again<=4;again++)
{
document.write("*");
}
document.write("</br>");
}
document.write("</br>");
document.write("<b>b)</b>");
document.write("</br>");
for(var rpar=1;rpar<=7;rpar++)
{
for(var again=0;again<rpar;again++)
{
document.write("*");
}
document.write("</br>");
}
document.write("</br>");
document.write("<b>c)</b>");
document.write("</br>");
for(var rpar=5;rpar>=0;rpar--)
{
for(var again=0;again<rpar;again++)
{
document.write("*");
}
document.write("</br>");
}