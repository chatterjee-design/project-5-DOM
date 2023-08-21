let input = document.getElementById("input");
let reset = document.querySelector(".reset");
let decrement = document.querySelector(".decrement");
let increment = document.querySelector(".increment");
let count = 0;

increment.addEventListener("click", function(){
    count++;
    input.value = count;
})

decrement.addEventListener("click", function(){
    count--;
    input.value = count;
})

reset.addEventListener("click", function(){
    input.value = 0;
})
