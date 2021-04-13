// * Animation Goal #1:
//   * Animate the menu opening: You will need to change the CSS for the menu in order to achieve this. Get the menu to slide in from the left side of the screen. And slide out when the button is clicked. Bonus: Get the menu to slide back out when the user clicks anywhere on the screen other than the menu.

/* https://youtu.be/M4GCT-2kaoo */

gsap.to('.logo', {
    duration: 2, 
    x: 300
});

const hamburger = document.querySelector('.menu-button');
const side_nav = document.querySelector('.Side-Nav');

let count = 0;
hamburger.addEventListener('click', (event) => {
  console.log('menu clicked');
  side_nav.classList.toggle('Side-Menu_open');

  if (count % 2 === 0)
    gsap.to('.Side-Nav', {x: "100px"});
  else
    gsap.to('.Side-Nav', {x: "-100px"});

  ++count;
});