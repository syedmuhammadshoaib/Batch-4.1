
document.write("<h2>Assignment 1 Lab Task.</h1>  <br/>");



document.write("<h2>3. Declare and initialize a strings array.</h2>  <br/>");
var arr=["Shoaib","Ali","Sajjid"];

document.write("<b>Array Elements</b> : ",arr);

document.write("<h2>4. Declare and initialize a numbers array.</h2>  <br/>");

var arr=[1,2,3,4,5];

document.write("<b>Array Elements</b> : ",arr);


document.write("<h2>5. Declare and initialize a boolean array.</h2>  <br/>");

var arr=["False","True"];

document.write("<b>Array Elements</b> : ",arr);





document.write("<h2>6. Declare and initialize a mixed array.</h2>  <br/>");

var arr=["False","Shoaib",1,2];

document.write("<b>Array Elements</b> : ",arr);


document.write("<h2>7. Declare and Initialize an array and store available mobile networks in Pakistan.</h2>  <br/>");

var arr=["Zong","Jazz","Ufone","Telenor","Warid"];

document.write("<b>Array Elements</b> : ",arr);




document.write("<h2>8. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).</h2>  <br/>");

var arr=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil", "PhD"];
document.write("<b>Elements List</b>");
for(var a=0;a<arr.length;a++)
{
document.write("<br/>",a+") ",arr[a]);
}
document.write("</br>");
document.write("</br>");

document.write("<h2>9.Declare and initialize an empty array to store top movies of 2015. Add movies one by one in an array.</h2>");

var movies=["Avengers : Age of Ultron","Spectre","Jurassic World","Inside Out"];

document.write("<h2>Top movies of 2015 <h2/> </h2>");
var count=1;
for(var a=0;a< movies.length;a++)
{
document.write(count+") ",movies[a],"<br/>");
count=count+1;
}
document.write("<br/> <b>Length of the array:"+movies.length+"</b>");
document.write("</br>");
document.write("</br>");

document.write("<h2>10.  Declare and Initialize an array with your favorite cars.<br/> Show <br/> a. First index of the array <br/> b. Car at first index of the array <br/> c. Last index of the array <br/> d.Car at last index of the array</h2>");

var cars =["Audi","Volvo","Ford","lamborghini"]

var index=cars.indexOf("Audi");
document.write("<b>First index of the array : </b>"+index);
document.write("<br/>");
document.write("<b>Cart at the  First index of the array is: </b>"+cars[index]);
var length=cars.length-1;
document.write("<br/>");
document.write("<b> Last index of the array : </b>"+length);
document.write("<br/>");
document.write("<b>Car at the  Last index of the array is: </b>"+cars[length]);


document.write("</br>");
document.write("</br>");
document.write("<h2>11.Write a program to store 3 student names in an array. Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:</h2>");

var arraynames=["Michael","John","Tony"];
var score=[320,230,480];
var marks=500;
var perc;
 for(var j=0; j < arraynames.length; j++)
    {

    
 document.write("<b>Score of </b>"+arraynames[j]+" <b> is </b> "+score[j]+" <b> Percentage : "+score[j]/marks+"</br>");
    }

document.write("</br>");
document.write("</br>");
var color=["Red","Blue","Green","Black"];
document.write("<h2>12 a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. </h2>");

var input=prompt("Enter the Color Do you want to Add on the Beginning","Enter Color");
document.write("</br>");
document.write("<b>Before Array Color List : </b> ",color);

color.unshift(input);
document.write("</br>");
document.write("<b>After Array Color List : </b> ",color);
document.write("</br>");
document.write("</br>");
document.write("<h2>12 b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. </h2>");

input=prompt(" what color do you want to add at to the end of the array","Enter Color");

document.write("</br>");
document.write("<b>Before Array Color List : </b> ",color);
color.push(input);
document.write("</br>");
document.write("<b>After Array Color List : </b> ",color);
document.write("</br>");
document.write("</br>");
document.write("</br>");
document.write("<h2>12 b.Add two more color to the beginning of the array. Display the updated array in your browser.</h2>");
 document.write("</br>");
 input=prompt(" what color do you want to add at to the Begining of the array","Enter 1st Color");
var input2 =prompt(" what color do you want to add at to the Begining of the array","Enter 2nd Color");

document.write("<b>Before Array Color List : </b> ",color);
color.unshift(input,input2);
document.write("</br>");
document.write("<b>After Array Color List : </b> ",color);
document.write("</br>");
//Continue Assignment 4/9/2017
var newcolor=["Red","Blue","Green","Black","Red-Black","Yellow-Black"];
document.write("<h2>12 c. Delete the first color in the array. Display the updated array in your browser.</h2>");
 document.write("</br>");

document.write("<b>Before Array Color List :</b> ",newcolor);
newcolor.shift();
document.write("</br>");
document.write("<b>Updated Array Color List : </b> ",newcolor);
document.write("</br>");

document.write("<h2> 12 e.Delete the last color in the array. Display the updated array in your browser.</h2>");
 document.write("</br>");
newcolor.pop();
document.write("<b>Before Array Color List : </b> ",newcolor);
color.shift();
document.write("</br>");
document.write("<b>Updated Array Color List : </b> ",newcolor);
document.write("</br>");

document.write("<h2> 12 f.Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. Display the updated array in your browser.</h2>");
document.write("</br>");

var userInput=+prompt("At Which Index of the Array Index from [0,4] Do you want to Add the Color.",0);
if ( userInput < newcolor.length )
{
var userInputColor=prompt("Which of the color Do you want to Add at the "+userInput+" Index",1);
newcolor.splice(userInput,0,userInputColor);
document.write("</br>");
document.write("<b>Updated Array Color List : </b> ",newcolor);
}
else
{
  document.write("</br>");
  document.write("You have Entered Wrong Index. Enter Again..!!");  
}
document.write("</br>");
document.write("<h2> 12 g.Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.</h2>");
document.write("</br>");

//newcolor.splice(0,userInputColor);
var startindex=+prompt("Input the Starting of the index Do you want to delete the Color.[0-4]");
var endIndex=+prompt("Input the Endining of the index Do you want to delete.");

newcolor.splice(startindex,endIndex);
document.write("<b>Before Array Color List : </b> ",newcolor);
var colorRequest=+prompt("How Many Colors Do you Want to add.",2);
var addColor;
for(var count=0;count<colorRequest;count++)
{
addColor=prompt("Input the Colors "+count+"","2");
newcolor.splice(startindex,0,addColor);
}
document.write("</br>");
document.write("<b>Updated Array Color List : </b> ",newcolor);


document.write("</br>");

document.write("<h2>13 Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.</h2>");
document.write("</br>");
var studentScores=[320,230,480,120];
document.write("Before Sorting  : ",studentScores);
document.write("</br>");
document.write("After Sorting  : ",studentScores.sort());
document.write("<h2> 14Write a program to sort the below mentioned array.</h2>");
document.write("</br>");


var fruitss = ["strawberry", "apple", "orange", "banana"];
document.write("Before Sorting  : ",fruitss);
document.write("</br>");

document.write("After Sorting  : ",fruitss.sort());
document.write("</br>");
document.write("<h2>15 Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.</h2>");
document.write("</br>");
var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("Before Selected List of Cities : ",cities);
cities=cities.slice(2,5);
document.write("</br>");
document.write("After Selected List of Cities  : ",cities);

document.write("</br>");
document.write("<h2>16 Write a program to create a single string from the below mentioned array.</h2>");
document.write("</br>");


var str = ["This ", " is ", " my ", " cat"];

document.write("Before Selected List of Cities : ",str);
for(var i =0; i<str.length;i++)
{
    var concat=str.join();
}
document.write("</br>");
document.write("After Selected List of Cities  : ",concat);


document.write("</br>");

document.write("<h2>17 Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out).</h2>");
document.write("</br>");

var devices=["Keyboard","mouse","printer","moniter"];
document.write("Before Applying Fifo : ",devices);
document.write("</br>");
var num=devices.length+1;
for(var i=1;i<num;i++)
{
    document.write("Out :<br/>");
  
document.write(devices.shift(),"<br/>");
}

document.write("</br>");

document.write("<h2>18 Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out).</h2>");
document.write("</br>");

var devic=["Keyboard","mouse","printer","mouse","moniter"];
document.write("Before Applying (Last In-First Out) : ",devic);
document.write("</br>");
var len=devic.length+1;
for(var i=1;i<len;i++)
{
    document.write("Out :<br/>");
   
document.write(devic.pop()+"</br>");
}

document.write("</br>");

document.write("<h2>19 Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method.</h2>");
document.write("</br>");
var mobile=["Nokia","Iphone","Blackberry","Motroloa"];
document.write("<select width='150px'>");
for(var drop=0;drop<mobile.length;drop++)
{

document.write("<option>"+mobile[drop]+"</option>");

}
document.write("</select>");


document.write("</br>");

document.write("<h2>20 Declare and initialize an empty multidimensional array. (Array of arrays).</h2>");
document.write("</br>");

var multiDimensional=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
document.write(multiDimensional);
document.write("</br>");
document.write("<h2>21. Declare and initialize a multidimensional array representing the following matrix.</h2>");
// document.write("</br>");
// for(var i=0;i<4;i++)
// {
// for(var j=1;j<4;j++)
// {
//     for(var k=0;k<4;k++)
// document.write(multiDimensional[i][j][k]);
// }
// }
for(var i=0;i<multiDimensional.length;i++)
document.write(multiDimensional[i]+"</br>");
//}
// document.write("<b>Pushing Elements in Array</b>");
// arr.push("Saqib","Sohail");
// document.write("</br>");
// document.write("</br>");
// document.write("<b>Updated Array Elements</b> : ",arr);



// document.write("</br>");
// document.write("</br>");
// document.write("<b>Pop Elements in Array</b>");
// arr.pop();
// document.write("</br>");
// document.write("</br>");
// document.write("<b>Updated Array Elements</b> : ",arr);

// document.write("</br>");
// document.write("</br>");
// document.write("<b>Shift Elements in Array</b>");
// arr.shift();
// document.write("</br>");
// document.write("</br>");
// document.write("<b>Updated Array Elements</b> : ",arr);

// document.write("</br>");
// document.write("</br>");
// document.write("<b>UnShift Elements in Array</b>");
// arr.unshift("Shoaib","shah");
// document.write("</br>");
// document.write("</br>");
// document.write("<b>Updated Array Elements</b> : ",arr);


// document.write("</br>");
// document.write("</br>");
// document.write("<b>Splice Elements in Array</b>");
// document.write("</br>");
// document.write("<b> Array Elements</b> : ",arr);
// arr.splice(3,1,"shahruk","shami");
// document.write("</br>");
// document.write("</br>");
// document.write("<b>Updated Array Elements</b> : ",arr);
// document.write("</br>");


// document.write("</br>");
// document.write("<b>Slice Elements in Array</b>");
// document.write("</br>");
// document.write("</br>");
// document.write("<b> Array Elements</b> : ",arr);
// document.write("</br>");
// document.write("<b> Array Length</b> : ",arr.length);
// document.write("</br>");
// var arr2=arr.slice(2,5)
// document.write("</br>");
// document.write("<b>New Array Elements</b> : ",arr2);
// document.write("</br>");
// arr2.splice(1,0,"Karim");
// document.write("<b>New Array Elements</b> : ",arr2);
// document.write("</br>");
// document.write("<b>New Array Elements</b> : ",arr2.indexOf("Karim"));