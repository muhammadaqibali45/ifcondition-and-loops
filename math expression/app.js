// task 1


var a =10;

document.getElementById("head2").innerHTML="The value of a is :"+ a;
++a;

document.getElementById("head3").innerHTML="The value of ++a is :"+ a;
document.getElementById("head4").innerHTML="Now The value of a is :"+ a;
document.getElementById("head5").innerHTML="The value of a++ is :"+ a;
a++;
document.getElementById("head6").innerHTML="Now The value of a is :"+ a;


--a;
document.getElementById("head7").innerHTML="The value of --a is :"+ a;
document.getElementById("head8").innerHTML="Now The value of a is :"+ a;
document.getElementById("head9").innerHTML="The value of a-- is :"+ a;
a--

document.getElementById("head10").innerHTML="The value of a is :"+ a;

// task 2

var a=2;
var b =1;


--a; //1

--a - --b; //1

--a - --b + ++b //2


document.write("a is : "+a+"<br/>");
document.write("b is : "+b+"<br/>");

var result =--a - --b + ++b + b-- ;


document.write("result is "+result)



// task 3


var user = prompt("Enter your name");

alert("Welcome to our page "+user);


// task4

var input = parseInt(prompt("please enter any number for printing of table"));


if(input === "" || isNaN(input)){

    for(var i =1; i<11; i++){

         var num =5
        document.write(num + " * " + i +" = "+num*i)
        document.write("<br/>")
    
        }

}

else if(input>=1){


    for(var i =1; i<11; i++){


        document.write(input + " * " + i +" = "+input*i)
        document.write("<br/>")
        
        }
    
}

// task5


var sub1 =prompt("Enter subject name")
var sub2 =prompt("Enter subject name")
var sub3 =prompt("Enter subject name")

var totalMarks =100;


var obtainedMarks1 =parseInt(prompt("Enter obtained marks"))
var obtainedMarks2 =parseInt(prompt("Enter obtained marks"))
var obtainedMarks3 =parseInt(prompt("Enter obtained marks"))


document.getElementById(("sub1")).innerHTML=sub1;
document.getElementById(("sub2")).innerHTML=sub2;
document.getElementById(("sub3")).innerHTML=sub3;



document.getElementById(("tmarks1")).innerHTML=totalMarks;
document.getElementById(("tmarks2")).innerHTML=totalMarks;
document.getElementById(("tmarks3")).innerHTML=totalMarks;




document.getElementById(("omarks1")).innerHTML=obtainedMarks1;
document.getElementById(("omarks2")).innerHTML=obtainedMarks2;
document.getElementById(("omarks3")).innerHTML=obtainedMarks3;


document.getElementById(("per1")).innerHTML=(obtainedMarks1/totalMarks)*100+"%";
document.getElementById(("per2")).innerHTML=(obtainedMarks2/totalMarks)*100+"%";
document.getElementById(("per3")).innerHTML=(obtainedMarks3/totalMarks)*100+"%";


var total=obtainedMarks1+obtainedMarks2+obtainedMarks3;
var sumMarks =totalMarks*3;

document.getElementById(("grandMarks")).innerHTML=sumMarks;
document.getElementById(("oMarks")).innerHTML=total;
document.getElementById(("totalPercentage")).innerHTML=(total/sumMarks)*100+"%";


