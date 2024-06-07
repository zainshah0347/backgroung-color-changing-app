// let body = document.getElementById("body") as HTMLBodyElement; 
let container = document.getElementById("container") as HTMLDivElement;

let blue:HTMLElement | null = document.getElementById("blue") as HTMLButtonElement;
let red :HTMLElement | null = document.getElementById("red") as HTMLButtonElement;
let orange :HTMLElement | null = document.getElementById("orange") as HTMLButtonElement;
let green :HTMLElement | null = document.getElementById("green") as HTMLButtonElement;
let gold :HTMLElement | null = document.getElementById("gold") as HTMLButtonElement;
let purple :HTMLElement | null = document.getElementById("purple") as HTMLButtonElement;
let brown :HTMLElement | null = document.getElementById("brown") as HTMLButtonElement;



blue.addEventListener("click",()=>{
    container.style.backgroundColor = "blue"
})
red.addEventListener("click",()=>{
    container.style.backgroundColor = "red"
})
orange.addEventListener("click",()=>{
    container.style.backgroundColor = "orange"
})
green.addEventListener("click",()=>{
    container.style.backgroundColor = "green"
})
gold.addEventListener("click",()=>{
    container.style.backgroundColor = "gold"
})
purple.addEventListener("click",()=>{
    container.style.backgroundColor = "purple"
})
brown.addEventListener("click",()=>{
    container.style.backgroundColor = "brown"
})

let randomColor = document.getElementById("randombtn") as HTMLButtonElement;
randomColor.addEventListener("click", ()=>{
    let arr : string[] = ["blue","red","orange","green","glod","purple","brown"];
    let random = Math.floor(Math.random()* arr.length + 1)
    container.style.backgroundColor = `${arr[random]}`
    
})