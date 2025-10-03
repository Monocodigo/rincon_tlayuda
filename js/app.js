//VARIABLES
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');
const imagenes = document.querySelectorAll('.img');
const imgModal = document.querySelector('#imgModal');


// ===== FUNCIONALIDAD DEL MENÚ DESPLEGABLE =====
if (dropdownBtn && dropdownContent) {
    // Toggle del dropdown al hacer clic en el botón
    dropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleDropdown();
    });

    // Función para alternar el dropdown
    function toggleDropdown() {
        dropdownContent.classList.toggle('show');
        dropdownBtn.classList.toggle('active');
    }

    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
            closeDropdown();
        }
    });

    // Función para cerrar el dropdown
    function closeDropdown() {
        dropdownContent.classList.remove('show');
        dropdownBtn.classList.remove('active');
    }
}

//Movimiento del header
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for menu links
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').startsWith('#') ? this.getAttribute('href').slice(1) : null;
        if (targetId) {
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                const header = document.getElementById('main-header');
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10; // 10px extra space
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        }
    });
});
//Código para la galería
imagenes.forEach(img => {
    img.addEventListener('click', (e) => {
        imgModal.src = e.target.src;
        e.target.setAttribute('data-toggle', 'modal')
        e.target.setAttribute('data-target', '#exampleModal')
    });
});