var anim = gsap.timeline();

anim.from(".lft-nav, .cntr-nav, .rght-nav, i", {
    y: -300,
    opacity: 0,
    duration: 1,
    delay: 3.5,
})
.from(".lft h1", {
    y: 100,
    opacity: 0,
    duration: 0.5,
},'a')

.from(".lft p", {
    y: 100,
    opacity: 0,
    duration: 0.5,
})

.from(".btn", {
    y: 100,
    opacity: 0,
    duration: 0.5,
})

.from("video", {
    y: 100,
    opacity: 0,
    duration: 0.5,
},'a')