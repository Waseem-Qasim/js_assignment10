// Assignment 10 Q 1 //
// ========================================== //


// function currentDateTime() {

//     var date = new Date();
//     document.write(date);
// }
// currentDateTime();




// Assignment 10 Q 2 //
// ========================================== //


// function fullName() {

//     var fName = prompt("Enter you first Name: ")
//     var lName = prompt("Enter you Last Name: ")
//     var fullName = fName + " " + lName
//     document.write(fullName)
// }
// fullName();





// Assignment 10 Q 3 //
// ========================================== //



// function sum() {
//     var firstNum = +prompt("Enter you first Number: ")
//     var secNum = +prompt("Enter you Last Number: ")

//     var Numbers = firstNum + secNum;
//     document.write("Sum of two numbers: " + parseInt(Numbers));
// }
// sum();





// Assignment 10 Q 4 //
// ========================================== //



// function calculator(firstNum, secNum) {
//     if (operator === "+") {

//         result = firstNum + secNum;
//         document.write("Sum of two number is : " + result)

//     }
//     else if (operator === "-") {

//         result = firstNum - secNum;
//         document.write("Subtraction of two number is : " + result)

//     }
//     else if (operator === "*") {

//         result = firstNum * secNum;
//         document.write("Multiplication of two number is : " + result)

//     }
//     else if (operator === "/") {

//         result = firstNum / secNum;
//         document.write("Divide of two number is : " + Math.round(result))

//     }
//     else if (operator === "%") {
//         result = firstNum % secNum;
//         document.write("Reminder of two number is : " + result)

//     }
//     else {
//         document.write("Invalid result")
//     }
//     var firstNum = +prompt("Enter you first Number: ")
//     var secNum = +prompt("Enter you Last Number: ");
//     var operator = prompt("Enter your operator : (+,-,*,/,%")
// calculator(firstNum,secNum,operator)
// }




// Assignment 10 Q 5 //
// ========================================== //


// function squares(squareNum) {

//     var squareNum = +prompt("Enter a number to find the sqaure of it  : ")

//     var findSquare = squareNum * squareNum;

//     document.write("Reminder of two number is : " + findSquare)
// }
// squares(2);




// Assignment 10 Q 6 //
// ========================================== //



// function factorial(){
//     var fact = 1;
//     var factorialNumber = +prompt("Enter a number to find the factorical that number : ")
//     document.write("Factorial Of " + factorialNumber + " ! <br>")
    
//     // factorial of negative number is not possible 
//     if (factorialNumber < 0) {
//         document.write("The factorial of the negative number doesnot perform")
//     }
    
//     else if (factorialNumber >= 1) {
//         for (i = 1; i <= factorialNumber; i++) {
    
//             fact *= i;
//         }
//        document.write("factorial of " + factorialNumber + " is " + fact)
    
//     }
// }
// factorial()






// Assignment 10 Q 7 //
// ========================================== //


// function calculateHypotenuse(base, prep) {
//     var Findbase = base * base;
//     var FindPrep = prep * prep;
//     var hyp = Math.sqrt(FindPrep + Findbase);
//     document.write("Hypotenous of the triangle is : " + hyp)

// }

// calculateHypotenuse(base,prep)
// var base = +prompt("Enter a base :")
// var prep = +prompt("Enter a prependicular :")




// Assignment 10 Q 8 //
// ========================================== //



// function area(width, height) {


//     A = width * height;

//     document.write("(Argument as variable) Area of the Rectangle is " + A);

//     document.write("<br>")

//     var area = 45 * 54;
//     document.write("(Argument as value) Area of the Rectangle is : " + area)

// }
// var width = +prompt("Enter a width :");
// var height = +prompt("Enter a height :");
// area(width,height)





// Assignment 10 Q 9 //
// ========================================== //



// function palindrome() {


//     var text = '';
//     var userInput = prompt("Enter a string");

//     for (var i = userInput.length - 1; i >= 0; i--) {
//         text += userInput[i];
//     }

//     if (text === userInput) {
//         alert("its palindrome");
//     }
//     else {
//         alert("its not palindrome");
//     }
// }
// palindrome()





// Assignment 10 Q 10 //
// ========================================== //



// function titledcase() {

//     var userInput = prompt("Enter a word or Letter").toLowerCase();

//     document.write("User Input : " + userInput + "<br>")

//     document.write("Title case : ")

//     var userInput = userInput.split(' ');
//     for (i = 0; i < userInput.length; i++) {
//         userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1) + " ";
//         document.write(userInput[i])
//     }
// }
// titledcase()




// Assignment 10 Q 11 //
// ========================================== //


// function letterOccurence(strings, character) {

 
//     var count = 0;
//     for (var i = 0; i < strings.length; i++) {
//         if (strings.charAt(i) == character)
//             count++;
//     }

//     document.write("Text : " + strings + "<br>")
//     document.write("There are " + count + " occurrence(s) of the word " + character);
// }

// var strings = prompt("Enter a string :").toLowerCase();
// var character = prompt("Enter a character: ")
// letterOccurence(strings,character)



// Assignment 10 Q 12 //
// ========================================== //


// function longestWord(str){

//     var splitArrayValue = str.split(' ');
    
//     var storeWord = "";
    
//     for (var i = 0; i < splitArrayValue.length; i++) {
//         if (splitArrayValue[i].length > storeWord.length) {
//             storeWord = splitArrayValue[i];
//         }
//     }
//         document.write("Actual String is : " + str + "<br>")
//         document.write("Longest word in String is : " + storeWord)
        
//     }
//     var str = prompt("Enter your string : ")
//     longestWord(str)




// Assignment 10 Q 13 //
// ========================================== //


function CircumferenceAndArea(r) {

    // Circumference of circle formual is (2 * pi * r)

    var coc = 2 * Math.PI * r;
    document.write("Circumference of circle " + coc + "<br>");

    // area of circle formula (2 * pi * r * r)

    var area = Math.PI * r * r;
    document.write("Area of the circle: " + area);
}
var r = parseFloat(prompt("Enter a radius for Circumference of Cricle : "))
CircumferenceAndArea(r);


