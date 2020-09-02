// * Animation Goal #1:
//   * Animate the menu opening: You will need to change the CSS for the menu in order to achieve this. Get the menu to slide in from the left side of the screen. And slide out when the button is clicked. Bonus: Get the menu to slide back out when the user clicks anywhere on the screen other than the menu.

/* https://youtu.be/M4GCT-2kaoo */

gsap.to('.logo', {
    duration: 2, 
    x: 300
});

const menu = document.querySelector('.menu-button');
console.log(menu);
menu.addEventListener('click', (event) => {

    console.log('menu clicked');

    document.getElementById('Side-Menu').style.width = '250px';

});

const button_close_sideMenu = document.querySelector('.Btn-Close');
button_close_sideMenu.addEventListener('click', (event) => {

    console.log('.Btn-Close pressed');

    document.getElementById('Side-Menu').style.width = '0px';
});
