const links = document.querySelectorAll(".text__tips .topdrop h1");
links.forEach((link) =>{
    link.addEventListener("click", ()=>{
        link.nextElementSibling.classList.toggle("open");
        link.querySelector("i").classList.toggle("open");
    })
});