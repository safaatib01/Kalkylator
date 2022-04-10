
/* function for themes*/

const theme1=document.getElementById("one")
const theme2=document.getElementById("two")
const theme3=document.getElementById("three")
const containerTheme=document.querySelector(".container")

theme2.addEventListener("click",function(){
containerTheme.classList.add("light-teme")
containerTheme.classList.remove("contrast-teme")
})
theme3.addEventListener("click",function(){
    containerTheme.classList.add("contrast-teme")
    containerTheme.classList.remove("light-teme")
    })
    theme1.addEventListener("click",function(){
        containerTheme.classList.remove("light-teme")
        containerTheme.classList.remove("contrast-teme")
        
        })


        