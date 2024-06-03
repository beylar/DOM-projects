
    const loadComponents = (id, url) => {
      fetch(url)
        .then((response) => response.text())
        .then((html) => {
          document.getElementById(id).innerHTML = html;
          let headerDiv = document.getElementById('header');
          let hamburgerButton = headerDiv.querySelector('#button');
          let closeButton = headerDiv.querySelector('#close')
          let menu = headerDiv.querySelector('#menu-bar')
          hamburgerButton.addEventListener('click', () => {
                  menu.classList.remove('hidden')
                  closeButton.classList.remove('hidden')
                  hamburgerButton.classList.add('hidden')
          })
          closeButton.addEventListener('click',() => {
            menu.classList.add('hidden')
            hamburgerButton.classList.remove('hidden')
            closeButton.classList.add('hidden')
          })

        });
    };
    window.onload = () => {
      loadComponents("header", "src/sections/header.html");
      loadComponents("hero", "src/sections/hero.html");
      loadComponents("about", "src/sections/about.html");
      loadComponents("sticky", "src/sections/sticky.html");
      loadComponents("services", "src/sections/services.html");
      loadComponents("footer", "src/sections/footer.html");
    };

