const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');

// ===== FUNCIONALIDAD DEL MENÚ DESPLEGABLE =====
    
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

    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Scroll suave hacia la sección
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Cerrar dropdown después de hacer clic
            closeDropdown();
        });
    });