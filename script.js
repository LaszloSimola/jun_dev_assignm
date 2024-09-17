
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

document.querySelectorAll('.navbar ul li a').forEach(item => {
    item.addEventListener('click', function (event) {

        event.preventDefault();


        document.querySelectorAll('.navbar ul li a').forEach(link => {
            link.classList.remove('active');
        });


        this.classList.add('active');
    });
});

document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
