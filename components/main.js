const tl = gsap.timeline();

tl.from('.logo', {
    duration: 1,
    opacity: 0,
    scale: 0.3,
    ease: 'back'
});

const position_param = '+=2';
tl.from('.Circle', {
        duration: 1,
        opacity: 0,
        y: 150,
        stagger: 0.25
    },
    position_param
);

///////////////////////////////////
tl.addLabel('circlesOutro', '+=1');
tl.to('.Circle', {
        duration: 0.5,
        opacity: 0,
        x: 300,
        ease: 'power3.out'
    },
    'circlesOutro'
)
///////////////////////////////////