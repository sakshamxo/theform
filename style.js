gsap.set("#banner",{
    top: "160%"
});
gsap.to("#banner",{
    scrollTrigger:{
        trigger: "#banner",
        start: "top 80%",
        end: "60% 90%",
        scrub: 2,
        
        
    },
    rotation: "179deg",
    ease: Power1.easeInOut,
    duration: 1,
    top: "-100%"
})
gsap.to("#p1",{
    scrollTrigger:{
        trigger: "#p1",
        start: "top 60%",
        end: "80% 90%",
        scrub: 4
        
        
    },
    rotation: "520deg",
    ease: Circ.easeInOut,
    duration: 8
},"a")
gsap.to("#p2",{
    scrollTrigger:{
        trigger: "#p2",
        start: "top 60%",
        end: "80% 90%",
        scrub: 4,
        
    },
    rotation: "-720deg",
    ease: Circ.easeInOut,
    duration: 7
},"a")
gsap.to("#p3",{
    scrollTrigger:{
        trigger: "#p3",
        start: "top 60%",
        end: "80% 90%",
        scrub: 4,
        
    },
    rotation: "1080deg",
    ease: Circ.easeInOut,
    duration: 7
},"a")
gsap.to("#incir",{
    scrollTrigger:{
        trigger: "#incir",
        start: "top 70%",
        end: "80% 90%",
        scrub: 5,
       
        
    },
    rotation: "270deg",
    ease: Circ.easeInOut,
    duration: 7,
    scale: 2,
    opacity:1
},"a")
gsap.to("#incir h5",{
    scrollTrigger:{
        trigger: "#incir",
        start: "top 70%",
        end: "80% 90%",
        scrub: 5,
        
    },
    ease: Circ.easeInOut,
    opacity:1
},"a")
var tl = gsap.timeline({
    scrollTrigger:{
        trigger: "#con",
        start: "center center",
        end: "100% top",
        scrub: 4,
        pin: true,
    }
})
tl.to("#phic",{
    rotation: "720deg",
    ease: Circ.easeInOut,
    duration: 4,
    top: "50%"
})
.to("#pics",{
    ease: Circ.easeInOut,
    duration: 4,
    left: "83%"
})
.to(".pho",{
    ease:Power1.easeInOut,
    duration:2,
    left:"-290%"
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#conta",
        start:"center center",
        end: "100% top",
        scrub:5,
        pin:true
    }
})
tl2
.to(".img",{
    opacity:1,
    stagger:.3,
    delay:0,
    ease: Power3,
    y: 80
},"a")
.to(".img",{
    opacity:0,
    stagger:.3,
    delay:0,
    ease: Power3
},"a")
.to("#conta h1 span",{
    y:-80,
    stagger:.3,
    ease: Power3,
    color: "rgb(255, 136, 0)"
},"a")
.to("#conta h1 span",{
    y:0,
    stagger:.3,
    ease: Power3,
    color: "white"
},"a")
document.querySelectorAll("#menu h5").forEach(function(elem){
    elem.addEventListener("mouseover",function(dets){
        gsap.to(".pio",{
            x:  dets.target.dataset.index * -100 + "%",            
        })
    
    })
});

ScrollTrigger.create({
    onUpdate: function(pro){
        gsap.to("#progress",{
            width: Math.floor(pro.progress*100) + "%" 
            
        })
       
    }
})
document.querySelectorAll("#mmenu a").forEach(function(elem){
    elem.addEventListener("mouseover",function(dets){
        gsap.to(".picbo",{
            x:  dets.target.dataset.index * -100 + "%",            
        })
    
    })
});
document.querySelector("#nav i").addEventListener("click",function(){
    gsap.to("#mmenu",{
        y:"100%"
        
    })
})
document.querySelector("#close i").addEventListener("click",function(){
    gsap.to("#mmenu",{
        y:"-100%"
        
    })
})
