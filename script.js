//Header Toggle

let Menubtn = document.getElementById('Menubtn')

Menubtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//Typing effect

let typed = new Typed('.auto-input', {
    strings: ['Full Stack Developer!', 'UI Designer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})

//active link

let navLinks = document.querySelectorAll('nav ul li a')

//get all sections

let sections = document.querySelectorAll('section')
console.log(sections)

window.addEventListener('scroll', function() {
    const scrollpos = this.window.scrollY + 20
    sections.forEach(section => {
        if (scrollpos > section.offsetTop && scrollpos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });

        }
    });
});