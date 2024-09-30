//USER INPUT & CONDITIONAL STATEMENT


// var user = prompt("Enter your city name in");


// if(user === 'karachi' || user === 'Karachi'){


// document.write("Welcome to city of lights")

// }


// else if(user === 'lahore' || user === 'Lahore'){

//     document.write("Welcome to city of Gardens")
        
//     }

//     else{

// document.write("Welcome to "+user)

//     }
    


//task2


// var user = prompt("Enter your Gender");

// var upper = user.toUpperCase();


// if(upper === 'MALE'){

// alert("Good Morning Sir")


// }

// else if(upper === 'FEMALE'){

//     alert("Good Morning Ma’am")

// }

// else{

// alert("please enter correct gender")

// }


//task 3


// var light = prompt("Enter Traffic Light Colour");

// var upper = light.toUpperCase();


// if(upper === 'RED'){

// alert("Must Stop")


// }

// else if(upper === 'YELLOW'){

//     alert("Ready to move")

// }

// else if(upper === 'GREEN'){

//     alert("Move now")

// }

// else{


//     alert("enter correct colour")
// }

//task 4


// var fuel = parseFloat(prompt("Enter your car fuel in litres"));




// if(fuel <0.25 ){


//     alert("Please refill the fuel in your car")
// }

// else{


//     alert("Your fuel is enough for travelling ")
// }



//task 6



// var sub1 =parseInt(prompt("Enter first subject marks between 1-100"))
// var sub2 =parseInt(prompt("Enter second subject marks between 1-100"))
// var sub3 =parseInt(prompt("Enter third subject marks between 1-100"))

// var grade;
// var remarks;

// var obtainedMarks = sub1+sub2+sub3;
// var totalMarks =300;


// var per = (obtainedMarks/totalMarks)*100;


// if(per>=80){

//  grade = 'A-one';
//  remarks = 'Excellent';

// }

// else if (per>=70){


//     grade = 'A';
//     remarks = 'Good';

// }

// else if (per>=60){


//     grade = 'B';
//     remarks = 'You need to improve';

// }


// else{


//     grade = 'Fail';
//     remarks = 'Sorry';


// }



// document.write("Marks Sheet")
// document.write("<br/><br/>")
// document.write("Total Marks : "+ totalMarks);
// document.write("<br/><br/>")
// document.write("Marks obtained : "+ obtainedMarks);
// document.write("<br/><br/>")
// document.write("Percentage : "+ per+"%");
// document.write("<br/><br/>")
// document.write("Grade : "+ grade);





//task 7


// var a = 6;

// var num = parseInt(prompt("guess the secret number between 1-10"))

// if(num === a){

// document.write("Bingo! Correct Answer")
// }

// else if(num +1 === a){

// document.write("Close enough to the correct answer")


// }

// else{

//     document.write("wrong answer")

// }


//task 8


// var num1 = parseInt(prompt("Enter the number to check its divisible by 3 or not"))


// if(num1 % 3 == 0){

// document.write("divisible by 3")

// }

// else{

//     document.write("not divisible by 3")


// }

//task 9

// var num3 = parseInt(prompt("Enter the number to check even or odd"))


// if(num3 % 2 ==0){

//    document.write("Even number")

// }


// else {

//    document.write("Odd number")

// }


//task 10

// var temp = prompt("Enter temperature")


// if(temp>40){


//     document.write("It is too hot outside")
// }

// else if(temp>30){


//     document.write("The Weather today is Normal")

// }

// else if(temp>20){


//     document.write("“Today’s Weather is cool.”")

// }

// else if(temp>10){


//     document.write("“OMG! Today’s weather is so Cool.”")

// }

// else{

//     document.write("wrong temperature")


// }


////task 11


// var num1 = parseInt(prompt("Enter the first number"))
// var oper = prompt("Enter the operator +,-,*,/,%")
// var num2 = parseInt(prompt("Enter the second number"))



// if(oper === '+'){

// document.write(num1 +" + "+ num2 +" = "+(num1+num2))

// }

// else if(oper === '-'){

//     document.write(num1 +" - "+ num2 +" = "+(num1-num2))
    
//     }
    

//     else if(oper === '*'){

//         document.write(num1 +" * "+ num2 +" = "+(num1*num2))
        
//         }
        
//        else if(oper === '/'){

//             document.write(num1 +" / "+ num2 +" = "+(num1/num2))
            
//             }
            
//            else if(oper === '%'){

//                 document.write(num1 +" % "+ num2 +" = "+(num1%num2))
                
//                 }
                
//                       else{

//                         document.write("wrong operator")
//                       }              

//task 5

//  var a = 4;
// if (++a === 5){

// alert("given condition for variable a is true"); //true

// }

// var b = 82;
// if (b++ === 83){

// alert("given condition for variable b is true"); //false

// }

// var c = 12;

// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true"); //this is printing because c value is 13
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true"); //this is printing because c value is 14
// }


// var materialCost = 20000;
// var laborCost = 2000;

// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){

// alert("The cost equals"); //true

// }


// if (true){
//     alert("True"); //true
//     }
//     if (false){
//     alert("False");
//     }


// if("car" < "cat"){

//     alert("car is smaller than cat"); //tue because its compare character one by one 

// }