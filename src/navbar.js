const navbar = document.querySelector("#navbar")
const btn = document.querySelector("#btn-navbar")
function openNavbar(){
    navbar.classList.toggle("open")
}
window.addEventListener("scroll", function(){
    const header = document.querySelector("#header")
    header.classList.toggle("rolagem", window.scrollY > 1)
   
        
    
   
})

btn.addEventListener("click", openNavbar)