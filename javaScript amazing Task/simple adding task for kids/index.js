 function setRandomValues() {
    const random1 = Math.floor(Math.random() * 100);
    const random2 = Math.floor(Math.random() * 100);
    
    const randomShowONE = Math.floor(Math.random() * 200);
    const randomShowTWO = Math.floor(Math.random() * 200);
    const randomShowFOUR = Math.floor(Math.random() * 200);

    const randomone = document.getElementById("random-1");
    const randomtwo = document.getElementById("random-2");

    const showone = document.getElementById("show-1");
    const showtwo = document.getElementById("show-2");
    const showthree = document.getElementById("show-3");
    const showfour = document.getElementById("show-4");

    randomone.innerHTML = random1;
    randomtwo.innerHTML = random2;
    const total = random1 + random2;

    showone.innerHTML = randomShowONE;
    showtwo.innerHTML = randomShowTWO;
    showthree.innerHTML = total;
    showfour.innerHTML = randomShowFOUR;

    showthree.addEventListener("click", function () {
        ShowResult.innerHTML = "WOW ! you enter correct answer: " + total;
    });
    showtwo.addEventListener("click", function () {
        ShowResult.innerHTML = "incorrect ! correct answer is: " + total;
    });
    showone.addEventListener("click", function () {
        ShowResult.innerHTML = "incorrect ! correct answer is: " + total;
    });
    showfour.addEventListener("click", function () {
        ShowResult.innerHTML = "incorrect ! correct answer is: " + total;
    });
    ShowResult.innerHTML="display loading...";
}

// refresh and display button
const btnrefresh = document.getElementById("btnRefresh");
const ShowResult = document.getElementById("showresult");

btnrefresh.addEventListener("click", setRandomValues);

// Initialize with random values on page load
setRandomValues();
