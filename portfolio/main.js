var typed = new Typed(".text", {
    strings: ["Software Engineer", "Btech Student", "Programmer", "Problem Solver"],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop: true
});
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarDropdown = document.querySelector('.navbar-dropdown');

navbarToggle.addEventListener('click', function () {
  navbarToggle.classList.toggle('open');
  navbarDropdown.classList.toggle('open');
});

