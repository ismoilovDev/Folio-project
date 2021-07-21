document.addEventListener('DOMContentLoaded', () => {
    let toggle = document.querySelector('.toggle'),
        mobileMenu = document.querySelector('.mobile-menu'),
        hideMenu = document.querySelector('#hide-mobile-menu'),
        dropToggle = document.querySelector('#dropToggle'),
        dropToggle1 = document.querySelector('#dropToggle1'),
        showSign = document.querySelector('#show-sign'),
        hideSign = document.querySelector('#hide-sign-up-icon'),
        signUp = document.querySelector('.sign-up'),
        signA = document.querySelectorAll('.for-contact'),
        header = document.querySelector('header');


    toggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    })
    hideMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    })
    
    /*--================= Mobile DropDown ===================-- */
    function showDropDown() {
        const dropDown = document.querySelector('.menu-drop-down'),
              dropIcon = document.querySelector('.drop-icons');
        
        dropDown.classList.toggle('active');
        dropIcon.classList.toggle('active');
        document.querySelector('.menu-drop-li').classList.add('active');

    }
    function showDropDown1() {
        const dropDown = document.querySelector('.menu-drop-down1'),
              dropIcon = document.querySelector('.drop-icons1');
        
        dropDown.classList.toggle('active');
        dropIcon.classList.toggle('active');
        document.querySelector('.menu-drop-li').classList.toggle('active');

    }
    dropToggle.addEventListener('click', showDropDown);
    dropToggle1.addEventListener('click', showDropDown1);

    /*--================= Change Theme ===================-- */
    const changeBtn = document.querySelector('.change-icon'),
          changeIcon = document.querySelector('#chage-icon'),
          changeDiv = document.querySelector('.change-theme'),
          light = document.querySelector('#light'),
          dark = document.querySelector('#dark');


    function changeTheme() {
        changeDiv.classList.toggle('active');
        changeIcon.classList.toggle('active');
    }
    changeBtn.addEventListener('click', changeTheme);
    function changeDark() {
        document.body.classList.add('dark');
        document.querySelector('header').classList.add('dark');
        light.classList.remove('active');
        dark.classList.add('active');
    }
    function changeLight() {
        document.body.classList.remove('dark');
        header.classList.remove('dark');
        dark.classList.remove('active');
        light.classList.add('active');
    }
    dark.addEventListener('click', changeDark);
    light.addEventListener('click', changeLight);
    
    /*--================= Header Shadow ===================--*/
    function headerShadow() {
        if(window.scrollY >= 50) {
            header.classList.add('shadow');
        }
        else {
            header.classList.remove('shadow');
        }
    }
    window.addEventListener('scroll', headerShadow)

    
    /*--================= Show-Hide Sign Up ===================--*/
    function showSignUp() {
        signUp.classList.add('active');
    }
    showSign.addEventListener('click', showSignUp);

    signA.forEach(item => item.addEventListener('click', showSignUp))
     

    function removeSignUp() {
        signUp.classList.remove('active');
    }
    hideSign.addEventListener('click', removeSignUp);
    const prev = document.querySelector('.slick-prev').textContent = ' < '
    const next = document.querySelector('.slick-next').textContent = ' > '
})
$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
  