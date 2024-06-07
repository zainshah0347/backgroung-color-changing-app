"use strict";
// let body = document.getElementById("body") as HTMLBodyElement; 
let container = document.getElementById("container");
let blue = document.getElementById("blue");
let red = document.getElementById("red");
let orange = document.getElementById("orange");
let green = document.getElementById("green");
let gold = document.getElementById("gold");
let purple = document.getElementById("purple");
let brown = document.getElementById("brown");
blue.addEventListener("click", () => {
    container.style.backgroundColor = "blue";
});
red.addEventListener("click", () => {
    container.style.backgroundColor = "red";
});
orange.addEventListener("click", () => {
    container.style.backgroundColor = "orange";
});
green.addEventListener("click", () => {
    container.style.backgroundColor = "green";
});
gold.addEventListener("click", () => {
    container.style.backgroundColor = "gold";
});
purple.addEventListener("click", () => {
    container.style.backgroundColor = "purple";
});
brown.addEventListener("click", () => {
    container.style.backgroundColor = "brown";
});
let randomColor = document.getElementById("randombtn");
randomColor.addEventListener("click", () => {
    let arr = ["blue", "red", "orange", "green", "glod", "purple", "brown"];
    let random = Math.floor(Math.random() * arr.length + 1);
    container.style.backgroundColor = `${arr[random]}`;
});
