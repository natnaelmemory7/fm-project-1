// for the nav

let hamNav = document.querySelector('.ham--nav');
let listNav = document.querySelector('.list--nav');
let boxNav = document.querySelector('.box--nav');

boxNav.addEventListener("click", function(){
    listNav.classList.toggle('is--hidden');
    hamNav.classList.toggle('is--active');
})
