const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemC  = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter",function(){
    fixed.style.display="block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})
var elems = document.querySelectorAll(".elem");
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${encodeURI(image)})`;
    })});

var child2Img = document.querySelector("#child2-img");
var h1s = document.querySelectorAll("#child1 #text h1");

function setActive(clickedH1) {
    h1s.forEach(h1 => h1.classList.remove("active"));
    clickedH1.classList.add("active");
}

document.querySelector("#design").addEventListener("click", function(){
    setActive(this);
    child2Img.src = encodeURI("design.jpg");
});
document.querySelector("#project").addEventListener("click", function(){
    setActive(this);
    child2Img.src = encodeURI("project.jpg");
});
document.querySelector("#execution").addEventListener("click", function(){
    setActive(this);
    child2Img.src = encodeURI("execution.jpg");
});
