document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.projects-slider');

    sliders.forEach(slider => {
        slider.addEventListener('wheel', (event) => {
            if (event.deltaY !== 0) {
                event.preventDefault();
                slider.scrollLeft += event.deltaY;
            }
        });
    });


    // Função para trocar o idioma
    function changeLang(lang) {
        const langElements = document.querySelectorAll('.lang');
        langElements.forEach(element => {
            const ptText = element.getAttribute('data-lang-pt');
            const enText = element.getAttribute('data-lang-en');
            const text = lang === 'pt-br' ? ptText : enText;
            element.innerHTML = text.replace(/\\n/g, '<br>');
        });
    

        // Atualizar o estilo dos links de idioma
        const ptLink = document.querySelector('.pt-br-link');
        const enLink = document.querySelector('.en-link');
        ptLink.classList.toggle('active', lang === 'pt-br');
        enLink.classList.toggle('active', lang === 'en');
    }

    // Adicionar evento de clique aos links de idioma
    const langLinks = document.querySelectorAll('.lang-link');
    langLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const lang = event.target.getAttribute('data-lang');
            const content = document.querySelector('.content');
            content.classList.add('fade-out');

            setTimeout(() => {
                changeLang(lang);
                content.classList.remove('fade-out');
                content.classList.add('fade-in');
            }, 300);

            setTimeout(() => {
                content.classList.remove('fade-in');
            }, 600);
        });
    });

    // Definir o idioma padrão como Português
    changeLang('pt-br');



    // Background partículas
    const dotCount = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--dot-count'));
    const container = document.querySelector('.background-dots');

    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');

        // Define posição aleatória
        dot.style.top = Math.random() * 100 + '%';
        dot.style.left = Math.random() * 100 + '%';

        // Define tamanho aleatório
        const size = Math.random() * (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--dot-max-size')) - parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--dot-min-size'))) + parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--dot-min-size'));
        dot.style.width = size + 'px';
        dot.style.height = size + 'px';

        // Define duração da animação aleatória
        const duration = Math.random() * 20 + 10; // Entre 10s e 30s
        dot.style.animationDuration = duration + 's';

        // Define movimento aleatório
        const moveX = (Math.random() * 100 - 50) + 'px';
        const moveY = (Math.random() * 100 - 50) + 'px';
        dot.style.setProperty('--move-x', moveX);
        dot.style.setProperty('--move-y', moveY);

        container.appendChild(dot);
    }


});


// Fade com a rolagem da página
$(document).ready(function() {
    $(window).scroll(function() {
      $('.fade-in').each(function() {
        var top_of_element = $(this).offset().top + 100;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
        var top_of_screen = $(window).scrollTop();
  
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
          $(this).addClass('visible');
        } else {
          $(this).removeClass('visible');
        }
      });
    });
  });
  