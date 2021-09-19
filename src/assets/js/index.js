
function myFunction(x) {
    x.classList.toggle("change");

    let links = document.getElementsByClassName("nav__item--link");
    let nav = document.getElementsByClassName("nav");
    // let img = document.getElementsByClassName("heroImg");
        
        for (let i=0; i < links.length; i++) {
            
            if (links[i].style.display === "block") {
                links[i].style.display = "none";
                nav[0].style.height = "8rem";
                // img[0].style.margin = "4rem 0";
            } else {
                links[i].style.display = "block";
                nav[0].style.height = "30rem";
                // img[0].style.margin = "25rem 0 0 0";
            }
        }
    
}