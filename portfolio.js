var new_type = new Typed(".editable", {
    strings: ["Web Developer", "Github Developer", "Frontend Engineer", "Programmer", "Graphic Designer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
})

const hamburgerButton = document.querySelector('.hamburger-button');

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('active');
});

document.getElementById("download-cv").addEventListener("click", function() {
    window.open("./Rahul_resume.pdf", "_blank");
});
