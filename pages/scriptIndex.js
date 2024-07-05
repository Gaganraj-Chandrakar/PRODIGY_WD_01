window.addEventListener('scroll', function() {
    const nav = document.getElementById("navbar");
    if(window.scrollY > 5) {
        nav.classList.add('scrolled');
    }
    else {
        nav.classList.remove('scrolled');
    }
});


function openPage(id) {
    document.location.replace(`${id}.html`);
}