document.querySelectorAll(".nav-link")[2].classList.add('active');      // Highlighting Hollywood in nav bar
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('navbar');
        const logoList = document.getElementById('logoList');
        const navimg = document.getElementById("navimg");

        // To change the color of nav bar, decreasing size of logo and adding the name of website on top when scrolled
        if (window.scrollY > 5) {
            nav.classList.add('scrolled');
            navimg.classList.add('scrolled');
            logoList.innerHTML = `<img src="../images/logos/onlyname.png" id="logoName">`;
        } else {
            nav.classList.remove('scrolled');
            navimg.classList.remove('scrolled');
            logoList.innerHTML = "";
        }
    }); 