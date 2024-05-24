// Check even odd
const ieven = document.getElementById("inputEven");
const btnEven = document.getElementById("btnEven");
const showInput = document.getElementById("showinput");

btnEven.addEventListener("click", function () {
    const inputValue = parseInt(ieven.value); // Retrieve the input value and parse it as an integer
    if (!isNaN(inputValue)) { // Check if the input is a valid number
        if (inputValue % 2 === 0) {
            showInput.innerHTML = "Even";
        } else {
            showInput.innerHTML = "Odd";
        }
    } else {
        console.log("Please enter a valid number.");
    }
});

// Convert hours and minutes to seconds
const inputhour = document.getElementById("inputhours");
const inputMint = document.getElementById("inputMints");
const btnCheek = document.getElementById("btnCheek");
const showResult = document.getElementById("showResult");

btnCheek.addEventListener("click", function () {
    const inputhoures = parseInt(inputhour.value); // Retrieve the input value and parse it as an integer
    const inputminitss = parseInt(inputMint.value);
    if (!isNaN(inputhoures) && !isNaN(inputminitss)) {
        var second = (inputhoures * 3600) + (inputminitss * 60);
        showResult.innerHTML = second;
        inputhour.value = '';
        inputMint.value = '';
    } else {
        showResult.innerHTML = "Please enter only integer numbers.";
        inputhour.value = '';
        inputMint.value = '';
    }
});

// Generate multiplication table
const inputTable = document.getElementById("inputTable");
const btnTable = document.getElementById("btnTable");
const showTable = document.getElementById("showTable");


btnTable.addEventListener("click", function () {
    const inputTableResult = parseInt(inputTable.value); // Retrieve the input value and parse it as an integer
    if (!isNaN(inputTableResult)) {
        let tableHTML = "";
        for (let i = 1; i <= 10; i++) {
            const table = inputTableResult * i;
            tableHTML += `${inputTableResult} * ${i} = ${table}<br>`;
            inputTable.value="";
            
        }
        
        showTable.innerHTML = tableHTML;
        
    } else {
        inputTable.value="";
        showTable.innerHTML = "Please enter only integer number.";
    }
});
 
// Addition
const inpuFirst = document.getElementById("inpuFirst");
const inputsecond = document.getElementById("inputsecond");
const btnAdding = document.getElementById("btnAdding");
const showAddition = document.getElementById("showAddition");

btnAdding.addEventListener("click", function () {
    const inpuFirstss = parseInt(inpuFirst.value); // Retrieve the input value and parse it as an integer
    const inputsecondss = parseInt(inputsecond.value);
    if (!isNaN(inpuFirstss) && !isNaN(inputsecondss)) {
        var Addition =inpuFirstss+inputsecondss ;
        showAddition.innerHTML = Addition;
        inpuFirst.value = '';
        inputsecond.value = '';
    } else {
        showAddition.innerHTML = "Please enter only integer numbers.";
        inpuFirst.value = '';
        inputsecond.value = '';
    }
});

// subtrication
const inpuFirstSUB = document.getElementById("inpuFirstSUB");
const inputsecondSUB = document.getElementById("inputsecondSUB");
const btnSUB = document.getElementById("btnSUB");
const showSUB = document.getElementById("showSUB");

btnSUB.addEventListener("click", function () {
    const inpuFirstSUBt = parseInt(inpuFirstSUB.value); // Retrieve the input value and parse it as an integer
    const inputsecondSUBt = parseInt(inputsecondSUB.value);
    if (!isNaN(inpuFirstSUBt) && !isNaN(inputsecondSUBt)) {
        var Subtricatiom =inpuFirstSUBt-inputsecondSUBt ;
        showSUB.innerHTML = Subtricatiom;
        inpuFirstSUB.value = '';
        inputsecondSUB.value = '';
    } else {
        showSUB.innerHTML = "Please enter only integer numbers.";
        inpuFirstSUB.value = '';
        inputsecondSUB.value = '';
    }
});
// division
const inpuFirstdiv = document.getElementById("inpuFirstdiv");
const inputseconddiv = document.getElementById("inputseconddiv");
const btndivid = document.getElementById("btndivid");
const showdivide = document.getElementById("showdivide");

btndivid.addEventListener("click", function () {
    const inpuFirstdivd = parseInt(inpuFirstdiv.value); // Retrieve the input value and parse it as an integer
    const inputseconddivd = parseInt(inputseconddiv.value);
    if (!isNaN(inpuFirstdivd) && !isNaN(inputseconddivd)) {
        var division =inpuFirstdivd/inputseconddivd ;
        showdivide.innerHTML = division;
        inpuFirstdiv.value = '';
        inputseconddiv.value = '';
    } else {
        showdivide.innerHTML = "Please enter only integer numbers.";
        inpuFirstdiv.value = '';
        inputseconddiv.value = '';
    }
});
