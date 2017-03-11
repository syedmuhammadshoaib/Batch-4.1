
var sname=prompt("Enter Subject Name","Maths");
var input=prompt("Enter Maths Mark","Input no");

var marks,text, leng,i,perc,grade;
//text="<ul>";

//text+=marks[i];
perc=+input/100 *100;

//var input=prompt("Enter Maths Mark","Input no");
    if(+input >=90 && +input<=100)
{
    grade="A+";
       text="Pass";
} else  if(+input >=80 && +input < 90)
{
   text="Pass";
  grade="A";
} else  if(+input >=70 && +input < 80)
{
   text="Pass";
    grade="B+";
} else  if(+input >=60 && +input <70 )
{
   text="Pass";
    grade="B";
}else  if(+input >=50 && +input < 60 )
{

    grade="C";
       text="Pass";
}else if(+input >=40 && +input <50 )
{

    grade="E";
       text="Pass";
}else  if(+input >=35 && +input < 40 )
{

   grade="F";
      text="Pass";
}
else 
{

   text="Fail";
}
document.getElementById("snamse").innerHTML = sname;
document.getElementById("obtained").innerHTML = input;
document.getElementById("grade").innerHTML = grade;
document.getElementById("perc").innerHTML = perc;
document.getElementById("status").innerHTML = text;

