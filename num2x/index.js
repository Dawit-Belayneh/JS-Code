let currentNumber=0;

const result=document.getElementById("result");
const incrementOne=document.getElementById("one-x");
const incrementTwo=document.getElementById("two-x");
const incrementFive=document.getElementById("five-x");
const inc=document.getElementById("increment");
const dec=document.getElementById("decrement");

incrementOne.addEventListener("click", () => {
    if(currentNumber < 10){
        currentNumber++;
        result.innerText=currentNumber;
        if(currentNumber === 10){
            incrementOne.innerText = "Limit Reached";
            incrementOne.disabled = true;
        }
    }
  });

  incrementTwo.addEventListener("click", () =>{
    if(currentNumber < 10){
        currentNumber=currentNumber + 2;
        result.innerText=currentNumber;
        if(currentNumber === 10){
            incrementTwo.innerText = "Limit Reached";
            incrementTwo.disabled = true;
        }
    }
  });

  incrementFive.addEventListener("click", () =>{
    if(currentNumber < 10){
        currentNumber=currentNumber + 5;
        result.innerText=currentNumber;
        if(currentNumber === 10){
            incrementFive.innerText = "Limit Reached";
            incrementFive.disabled = true;
        }
    }
  });



