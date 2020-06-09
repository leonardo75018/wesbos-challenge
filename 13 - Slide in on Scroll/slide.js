



const target = document.querySelectorAll(".slide-in"); 
// console.log(target)

// const key = document.getElementsByClassName('[data-key]');
// console.log(key);

function animationScroll (){
    const windowTop = window.pageYOffset +200; 
    // console.log(windowTop)

    target.forEach(function(Element){
        if ((windowTop) > Element.offsetTop ){
            Element.classList.add("active");
        }



        else{
            Element.classList.remove("active")
        }
        // console.log(Element.offsetTop) 
    })
}

window.addEventListener("scroll", function(){
    animationScroll();

});