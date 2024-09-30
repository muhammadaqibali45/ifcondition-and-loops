//task 1

var studentName = [];

//task 2

let studentNames = new Array();


//task 3

var str = ["aqib"];


//task 4

var num = [1];

//task 5

var booleanArray = [true, false]

//task 6

var mixedArray = [true, 1, 'aqib']

//task 7

var arr =['SSC','HSC',' BCS','BS','BCOM','MS', 'M. Phil','PhD']


document.write("Qualifications:")
document.write("<br/>");
document.write("<br/>");


for(var i=0; i<arr.length;i++){

document.write((i+1)+")\n"+arr[i]);
document.write("<br/>");


}


//task 8

var name1 = prompt("Enter first student name");
var name2 = prompt("Enter second student name");
var name3 = prompt("Enter third student name");

var marks1 = prompt("Enter first student marks out of 500");
var marks2 = prompt("Enter second student marks out of 500");
var marks3 = prompt("Enter third student marks out of 500");

var marksArray = [];
var nameArray = [];

if (name1 && marks1 && name2 && marks2 && name3 && marks3) {
    nameArray.push(name1, name2, name3);
    marksArray.push(marks1, marks2, marks3);

    for (var i = 0; i < 3; i++) {
        var percentage = (marksArray[i] / 500) * 100; 
        document.write("Score of " + nameArray[i] + " is " + marksArray[i] + " (" + percentage.toFixed(2) + "%)");
        document.write("<br/>");
    }
} else {
    alert("Please enter correct values");
}

//task 9


var color =['red','blue','pink','green']




for(var i=0; i<color.length;i++){


document.write("color name : ",color[i])
<document.write("<br/>")


}






//task 10



var marks =[350,450,489,200,105,361]


for(var i =0; i<marks.length;i++){
document.write(marks[i])
<document.write("<br/>")



}

document.write("Sorted marks are :" ,marks.sort())



//task 11

var ciy =['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
var selectedCities =[];

for(var i=0; i<3;i++){

selectedCities.push(ciy[i]);


}

document.write("Selected Cities:", selectedCities);


//task 12

var arr = ['This','is', 'my', 'cat'];

var str = arr.join(" ");


document.write(str);

//task 13

var comp = ['keyboard', 'mouse', 'printer', 'monitor']

document.write("Devices :")
document.write("<br/>")


for (var i = 0; i < comp.length; i++) {

    document.write(comp[i])
    document.write("<br/>")


}


for (var i = 0; i < comp.length; i++) {

    document.write("<br/>")
    document.write("OUT:")
    document.write("<br/>")
    document.write(comp[i])
    document.write("<br/>")


}


//task 14

var comp2 = ['keyboard', 'mouse', 'printer', 'monitor']

document.write("Devices :")
document.write("<br/>")


for (var i = 0; i < comp2.length; i++) {

    document.write(comp2[i])
    document.write("<br/>")


}

for (var i = comp2.length-1; i >= 0; i--) {

    document.write("<br/>")
    document.write("OUT:")
    document.write("<br/>")
    document.write(comp2[i])
    document.write("<br/>")


}



//task 15



var mobile = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

var selectElement = document.getElementById("select1");

for (var i = 0; i < mobile.length; i++) {

    var option = document.createElement("option");
    
    option.value = mobile[i].toLowerCase(); 
    option.textContent = mobile[i];
    
    selectElement.appendChild(option);
}


for (var i = 0; i < mobile.length; i++) {


document.getElementById("option").value=mobile[i];

}



//task 9


var color = ['red','blue','green','pink','orange']



document.write("Available colors are : ",color)


var color1 = prompt("Which color you want to add at the beginning")

color.unshift(color1);

document.write("<br/>")

document.write(" Updated Available colors are : ",color)


var color2 = prompt("Which color you want to add at the end")

color.push(color2);

document.write("<br/>")

document.write(" Updated Available colors are : ",color)




var color3 = prompt("Which two color you want to add at the beginning")
var color4 = prompt("Which two color you want to add at the beginning")

color.unshift(color3);
color.unshift(color4);



document.write("<br/>")

document.write(" Updated Available colors are : ",color)



color.shift();

document.write("<br/>")


document.write(" Updated colors are after deleting of first color : ",color)

document.write("<br/>")


color.pop();

document.write(" Updated colors are after deleting of last color : ",color)

document.write("<br/>")


var inputColor = +prompt("Which index you want to color");
var color5 = prompt("Which  color you want to add")


color[inputColor] = color5;

document.write(" Updated colors are after asking user the index number : ",color)
document.write("<br/>")


var deleteinputColor = +prompt("From Which index you want to start removing color");
var deletetillinputColor = +prompt("Till which index you want to removedcolor");


color.splice(deleteinputColor,deletetillinputColor);


document.write(" Updated colors are after asking user the index number : ",color)





