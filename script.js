const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl=gsap.timeline();

tl.to("#page1",{
    y:"100vh",
    scale:0.5,
    duration:0,
})


tl.to("#page1",{
    y:"0vh",
    duration:1,
    delay:1,
})
tl.to("#page1",{
    rotate:360,
    scale:1,
    duration:0.7,
})

var h2hover = document.querySelector("#h2Hover");
var circal = document.querySelector("#circal");

h2hover.addEventListener("mouseenter",function(){
    h2hover.style.cursor = "pointer";
    circal.style.display = "block";
})
h2hover.addEventListener("mouseleave",function(){
    circal.style.display = "none";
})