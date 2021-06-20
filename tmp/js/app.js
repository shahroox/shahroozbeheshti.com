// SLIDE ANIMATION INTRO 
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");


//INITIAL SECTION
const intro = document.querySelector('.introduc');
const video = intro.querySelector('video');
const text1 = intro.querySelector('#text1');
const text2 = intro.querySelector('#text2');
//END SECTION
const section = document.querySelector('div');
const end = section.querySelector('h1');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  // duration of the video X1000
  duration: 8000,
  triggerElement: intro,
  triggerHook: 0
})
  // .addIndicators({
  //   name: 'fade scene',
  //   colorTrigger: 'blue',
  //   indent: 200,
  //   colorStart: 'green',
  // })
  .setPin(intro)
  // .setClassToggle(intro, 'fade-in')
  .addTo(controller);

//Text Animation
const textAnim1 = TweenMax.fromTo(text1, 3, { opacity: 1 }, { opacity: 0 });
let scene1 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim1)
  .addTo(controller);

const textAnim2 = TweenMax.fromTo(text2, 3, { opacity: 0 }, { opacity: 1 });
let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  offset: 5000,
  triggerElement: intro,
  triggerHook: 0
  
})
  .setTween(textAnim2)
  .addTo(controller);



//Video Animation
let accelamount = 0.1;
let scrollpos = 0
let delay = 1;

scene.on('update', e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

//   video.currentTime = scrollpos;
  video.currentTime = delay;
}, 33.3);