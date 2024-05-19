// first Example combile name and say welcome
var firstname = "naveed";
var secondname = "rashid";
var sum = firstname + " " + secondname;
console.log(sum);
 
// 2nd Example   alert
// var firstname= window.prompt("please enter your First Name");
// var secondname= window.prompt("please enter your second Name");
// var sum=" most Welcome ! "+ firstname + " " + secondname;
// document.getElementById("h1").innerHTML=sum;

// 3rd Example simple var
var age = 10;
if (age >= 18) {
    console.log("you are Eligable")
} else {
    console.log("you are not Eligable !!!")
}

//  4th Example using function switch statm...

function convertNumberToWord(num) {
    var result;
    switch (num) {
        case 1:
            result = "one";
            break;
        case 2:
            result = "two";
            break;
        case 3:
            result = "three";
            break;
        case 4:
            result = "four";
            break;
        case 5:
            result = "five";
            break;
        default:
            result = "you enter wrong integer! please choose 1-5"
    }
    return result;
}
console.log(convertNumberToWord(55))
 
// 5th Exapmle if else
var num1 = -3; 
if (num1 >= 1) {
    console.log("the number is positive");
}
else if (num1 === 0) {
    console.log("the number is zero");
}
else {
    console.log("the number is negitive");
}

// 6th Example array
var compony = ["toyota", "honda civic", "bikes", "prado", "GLI", "4x4"];
console.log(compony[1])

// 7th Example object
var school = {
    name: "nisar shaheed school and collage",
    class: 4,
    teachers: 18,
    rooms: 12,
}
console.log(school.name);

// 8th Example array
function Getproduct(Printproduct) {
    var product = ["toyota", "honda civic", "bikes", "prado", "GLI", "4x4"];
    Printproduct(product);
}
Getproduct(function (arr) {
    console.log(arr);
});

// 9th Example call-back and arry
function GetProduct(printProduct) {
    product = ["toyota", "honda civic", "bikes", "prado", "GLI", "4x4"];
    printProduct(product);
}
GetProduct(function printProduct(arr) {
    for (var i = 0; i < arr.length; i++) {
        document.write(arr[i]);
        document.write(`<br>`);
    }
})

// 10th Example eventlistner + see more and see less
var p = document.getElementById('p-tag');
var btn = document.getElementById('Explore-btn');
var invisible=false;
function Explore() {
    if(invisible){
        p.style.display='none'
    }else{
    p.innerHTML ="Director ORIC, Resarch and Development (R&D), AI, ML. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, mollitia quas? Corporis pariatur nisi nesciunt debitis praesentium nemo eos ea veritatis architecto, laudantium porro id molestiae, corrupti natus temporibus. Numquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, mollitia quas? Corporis pariatur nisi nesciunt debitis praesentium nemo eos ea veritatis architecto, laudantium porro id molestiae, corrupti natus temporibus. Numquam!  laudantium porro id molestiae, corrupti natus temporibus. Numquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, mollitia quas? Corporis pariatur nisi nesciunt debitis praesentium nemo eos ea veritatis architecto, laudantium porro id molestiae, corrupti natus temporibus. Numquam! corrupti natus temporibus. Numquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, mollitia quas? Corporis pariatur nisi nesciunt debitis corrupti natus temporibus. Numquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, mollitia quas? Corporis pariatur nisi nesciunt debitis praesentium nemo eos ea veritatis architecto, laudantium porro id."
    // btn.removeEventListener('click',Explore)
    p.style.display='block'
    }
    invisible=!invisible
}
btn.addEventListener('click',Explore)

//  11th Example random number
var Generate =document.getElementById('Generate-num');
var output =document.getElementById('output-field');

function GenerateRandomNumber(){
   var rand = (parseInt(Math.random()*1000))
   output.innerHTML="Your Random Number is: " +rand;
}
Generate.addEventListener('click',GenerateRandomNumber)
GenerateRandomNumber();

//  12th Example see more and see less 
var seeMore=document.getElementById('see-more');
var pTag=document.getElementById('pTagAboutUET');
var seeless=false;
seeMore.addEventListener('click', function(){
    if(seeless){
        pTag.style.display='none';
    }else{
        pTag.innerHTML="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit maxime accusamus tempore laudantium aperiam, temporibus exercitationem sunt aliquam in nesciunt omnis? Earum vero soluta vel, ut asperiores optio, nihil dignissimos sint blanditiis magnam distinctio! Fugiat a neque accusamus commodi nihil vel debitis fugit minus, ullam unde corporis similique cumque officiis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit maxime accusamus tempore laudantium aperiam, temporibus exercitationem sunt aliquam in nesciunt omnis? Earum vero soluta vel, ut asperiores optio, nihil dignissimos sint blanditiis magnam distinctio! Fugiat a neque accusamus commodi nihil vel debitis fugit minus, ullam unde corporis similique cumque officiis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit maxime accusamus tempore laudantium aperiam, temporibus exercitationem sunt aliquam in nesciunt omnis? Earum vero soluta vel, ut asperiores optio, nihil dignissimos sint blanditiis magnam distinctio! Fugiat a neque accusamus commodi nihil vel debitis fugit minus, ullam unde corporis similique cumque officiis."
        pTag.style.display='block';
    }
    seeless=!seeless;
})

// 13th Example  see time in seconds
// var timeBtn = document.getElementById('See-time');
// var timeOutField = document.getElementById('TimeOutField');

// timeBtn.addEventListener('click', function() {
//     setInterval(function() {
//         var date = new Date();
//         timeOutField.innerHTML = date.toISOString();
//     }, 1000);
// });

 // i use chat-GTP to get only required data
var timeBtn = document.getElementById('See-time');
var timeOutField = document.getElementById('TimeOutField');

timeBtn.addEventListener('click', function() {
    setInterval(function() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var day = date.getDate();
        var month = date.getMonth() + 1; // Months are zero-based
        var year = date.getFullYear();
        
        // Format the time as HH:MM:SS
        var timeString = 
            (hours < 10 ? '0' : '') + hours + ':' +
            (minutes < 10 ? '0' : '') + minutes + ':' +
            (seconds < 10 ? '0' : '') + seconds;

        // Format the date as DD-MM-YYYY
        var dateString = 
            (day < 10 ? '0' : '') + day + '-' +
            (month < 10 ? '0' : '') + month + '-' +
            year;

        // Combine date and time
        var dateTimeString = dateString + ' ' + timeString;

        timeOutField.innerHTML = dateTimeString;
    }, 1000);
});
