//IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS

//task 1

var input = prompt("Enter any character or number")
var asci = input.charCodeAt(0);


if(asci >=65 && asci <=90){


    console.log("uppercase letter")
}

else if(asci >=97 && asci <=122 ){

    console.log("lowercase letter")


}

else if(asci >=48 && asci <=57 ){

    console.log("number")


}


else{

console.log("special character")

}









//task2

var num1 = parseInt(prompt("Enter first number"))
var num2 = parseInt(prompt("Enter second number"))


if(num1>num2){

console.log(num1+" is greater than  "+num2)

}


else if(num2>num1){

    console.log(num2+" is greater than  "+num1)
    
    }


 else{

console.log("both integers are equal")

 }   

//task3

var num = parseInt(prompt("Enter number"))

if(num>0){

console.log("positive")

}

else if(num<0){

    console.log("negative")


}

else{

    console.log("zero")


}



//task4


var char = (prompt("Enter any letter"))


if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U' ){


console.log("vowels")


}


else{

    console.log("constraints")


}

//task5

var user = (prompt("Enter your password"))

var password = "Aqibali124@";


if(user == ""){

alert("Please enter your password")

}

else if(user === password){

    alert("“Correct! The password you entered matches the original password")


}

else{

    alert("Incorrect password")
}


//task6


var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
console.log(greeting)
}

else{
greeting = "Good evening";
console.log(greeting)

}


//task7

var time = +(prompt("Enter Time in 24 hr format"))


if(time >= 0 && time <12 ){

document.write("Good Morning")

}

else if(time>=12 && time<17){

    document.write("Good Afternoon")

    
}

else if(time>=17 && time<21){

    document.write("Good Evening")

    
}


else if(time>=21 && time<=23.59){

    document.write("Good Night")

    
}