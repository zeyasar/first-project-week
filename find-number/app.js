let prediction = document.querySelector("#guess");
let caution = document.querySelector(".war_area");
let feedback = document.querySelector(".feed_area");
let check_button = document.querySelector(".check");
let congImg = document.querySelector(".congrats")

let num = Math.trunc(Math.random()*99+1);
console.log(num);

let lowTip = 0;
let highTip = 100;


check_button.addEventListener("click", () => {
    
    if (prediction.value == num) {
        caution.innerHTML = `YOU ARE WINNER...`;
        congImg.style.display = "block";  
        
    }else if (prediction.value < num) {
        if (prediction.value <= 0 ) {
            caution.innerHTML = `Please enter a number 1 or greater number`;
            prediction.value = "";
            return;
        }
    lowTip = prediction.value;
    caution.innerHTML = `Enter a number between ${lowTip} and ${highTip}`;
    }else if (prediction.value > 0){
        if (prediction.value > 100) {
            caution.innerHTML = `Please enter a number below 100 `;
            prediction.value = "";
            return;
        }
    highTip = prediction.value;
    caution.innerHTML = `Enter a number between ${lowTip} and ${highTip}`;
    }else if (prediction.value == "") {
        caution.innerHTML = `Please enter a number between 1 and 100`;
    }
})
let count = 7;
check_button.addEventListener("click", () => {
    
    count--
    feedback.innerHTML = `${count}`
    
    if (count == 0) {
        if (prediction.value == num) {
            caution.innerHTML = `YOU ARE WINNER...`;
            congImg.style.display = "block"; 
        
        }else{caution.innerHTML = `SORRY TRY AGAIN!!!!`}
        
    }
    

})