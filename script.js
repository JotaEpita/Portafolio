// Manejar el menú de navegación fijo con efecto de desplazamiento
document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const menu = document.querySelector('.menu');
    const menuCheckbox = document.getElementById('menu');
    const navLinks = document.querySelectorAll('.navbar a');
    
    // Cambiar el estilo del menú al desplazarse
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            menu.style.padding = '15px 20px';
            menu.style.backgroundColor = 'rgba(16, 22, 48, 0.95)';
            menu.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
        } else {
            menu.style.padding = '20px';
            menu.style.backgroundColor = 'rgba(16, 22, 48, 0.9)';
            menu.style.boxShadow = 'none';
        }
    });
    
    // Cerrar el menú al hacer clic en un enlace (en móvil)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuCheckbox.checked = false;
        });
    });

    // Animación de scroll suave para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Resaltar sección actual en la navegación
    window.addEventListener('scroll', highlightNavigation);
    
    function highlightNavigation() {
        const sections = document.querySelectorAll('section, header');
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            const top = section.offsetTop - 100;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.navbar a[href="#${id}"]`);

            if (link) {
                if (scrollPosition >= top && scrollPosition < top + height) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    }
});
