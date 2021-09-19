
function myFunction(x) {
    x.classList.toggle("change");

    let links = document.getElementsByClassName("nav__item--link");
    let nav = document.getElementsByClassName("nav__container");
        
        for (let i=0; i < links.length; i++) {
            
            // links[i].style.display = "block"
            if (links[i].style.display == "none") {
                links[i].style.display == "block";
                // links[i].classList.add = "mobile";
                nav[0].style.height = "31rem";
            } else {
                links[i].style.display === "none"
                // nav[0].style.height = "30rem";
                // img[0].style.margin = "25rem 0 0 0";
            }
        }
    
}