// ============================================
// INSTITUTO RUTHERFORD - JAVASCRIPT
// ============================================

// Datos de las materias para los modales
const materiasData = {
    matematica: {
        title: "Matemática",
        sections: [
            {
                icon: "fa-square-root-alt",
                title: "Análisis Matemático",
                items: ["Análisis Matemático I, II y III", "Cálculo I y II", "Álgebra y Álgebra Lineal", "Geometría Analítica, Descriptiva y Proyectiva", "Lógica Matemática", "Ecuaciones Diferenciales", "Topología y Análisis Avanzado", "Matemática clásica, aplicada y moderna"]
            }
        ]
    },
    fisica: {
        title: "Física",
        sections: [
            {
                icon: "fa-atom",
                title: "Física General",
                items: ["Física General", "Física I, II y III", "Fisicoquímica", "Biofísica", "Física Cuántica", "Física Nuclear", "Mecánica Cuántica", "Mecánica Clásica", "Magnetismo y Electromagnetismo", "Óptica y Acústica", "Mecánica de los Fluidos", "Resistencia de los Materiales y Estabilidad"]
            }
        ]
    },
    estadistica: {
        title: "Estadística",
        sections: [
            {
                icon: "fa-chart-line",
                title: "Estadística y Probabilidad",
                items: ["Estadística Descriptiva e Inferencial", "Probabilidad y Teoría de Hipótesis", "Estimación y Análisis de Datos", "Bioestadística", "Investigación Operativa"]
            }
        ]
    },
    biologia: {
        title: "Biología",
        sections: [
            {
                icon: "fa-dna",
                title: "Biología y Ciencias",
                items: ["Biología General y Celular", "Bioquímica y Biofísica", "Química Biológica", "Bacteriología y Microbiología", "Genética y Botánica", "Ecología y Ciencias Naturales", "Epistemología de las Ciencias"]
            }
        ]
    },
    salud: {
        title: "Ciencias de la Salud",
        sections: [
            {
                icon: "fa-heartbeat",
                title: "Salud y Medicina",
                items: ["Anatomía, Histología y Biología Celular", "Embriología y Genética", "Fisiología y Biofísica", "Farmacología, Toxicología y Bioética", "Microbiología, Inmunología y Parasitología", "Clínica Médica y Semiología", "Neurología, Psiquiatría y Salud Mental", "Ginecología, Obstetricia y Pediatría", "Diagnóstico por Imágenes y Medicina Interna", "Metodología de Investigación y Bioinformática"]
            }
        ]
    },
    economia: {
        title: "Economía",
        sections: [
            {
                icon: "fa-chart-bar",
                title: "Economía y Finanzas",
                items: ["Microeconomía y Macroeconomía", "Matemática Financiera", "Finanzas, Opciones y Futuros", "Matemática clásica, aplicada y moderna"]
            }
        ]
    },
    contabilidad: {
        title: "Contabilidad",
        sections: [
            {
                icon: "fa-calculator",
                title: "Contabilidad y Gestión",
                items: ["Contabilidad General, Patrimonial y Superior", "Costos y Gestión Organizacional", "Auditoría e Impuestos", "Liquidación de Sueldos y Haberes", "Sistema Tango Gestión", "Investigación Operativa y Optimización"]
            }
        ]
    },
    diseno: {
        title: "Diseño",
        sections: [
            {
                icon: "fa-palette",
                title: "Diseño y Modelado 3D",
                items: ["SketchUp, Rhinoceros, 3ds Max, Revit", "V-Ray, Lumion, D5 Render, Twinmotion", "Photoshop, Illustrator, Premiere, After Effects", "Herramientas Office: Word, Excel, PowerPoint, Access, Power BI, Microsoft Project, Microsoft 365"]
            }
        ]
    },
    computacion: {
        title: "Computación",
        sections: [
            {
                icon: "fa-laptop-code",
                title: "Programación y Sistemas",
                items: ["Java, Visual Basic, HTML", "Desarrollo Mobile: Android e iOS", "Sistemas Operativos: Windows, Linux y MS-DOS", "Marketing Digital y Publicidad Online"]
            }
        ]
    },
    idiomas: {
        title: "Idiomas",
        sections: [
            {
                icon: "fa-language",
                title: "Idiomas",
                items: ["Inglés", "Francés", "Italiano", "Portugués", "Alemán", "Latín", "Chino"]
            }
        ]
    }
};

// ============================================
// FUNCIONES DEL MODAL
// ============================================

function openModal(materiaKey) {
    const modal = document.getElementById('materia-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    
    const data = materiasData[materiaKey];
    
    if (!data) return;
    
    modalTitle.textContent = data.title;
    
    let html = '';
    
    data.sections.forEach(section => {
        html += `
            <div class="modal-section">
                <h4><i class="fas ${section.icon}"></i> ${section.title}</h4>
                <ul>
                    ${section.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    });
    
    html += `
        <div class="modal-cta" style="grid-column: 2; margin-top: 0;">
            <p>¿Te interesa esta materia?</p>
            <a href="https://wa.me/5491140743723?text=Hola, me interesan clases de ${encodeURIComponent(data.title)}" target="_blank" class="btn btn-primary">
                <i class="fab fa-whatsapp"></i> Contactar
            </a>
        </div>
    `;
    
    modalContent.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Aplicar distribución de 2 en 2 si hay más de 5 items
    applyTwoColumnLayout();
}

function closeModal() {
    const modal = document.getElementById('materia-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Función para aplicar distribución de 2 en 2 cuando hay más de 5 items
function applyTwoColumnLayout() {
    const modalSections = document.querySelectorAll('.modal-section');
    
    modalSections.forEach(section => {
        const listItems = section.querySelectorAll('li');
        
        if (listItems.length > 5) {
            // Crear un contenedor de 2 columnas
            const twoColumnContainer = document.createElement('div');
            twoColumnContainer.className = 'two-column-list';
            
            // Dividir los items en 2 columnas
            const midPoint = Math.ceil(listItems.length / 2);
            const firstColumn = document.createElement('ul');
            const secondColumn = document.createElement('ul');
            
            listItems.forEach((item, index) => {
                const clonedItem = item.cloneNode(true);
                if (index < midPoint) {
                    firstColumn.appendChild(clonedItem);
                } else {
                    secondColumn.appendChild(clonedItem);
                }
            });
            
            // Limpiar el contenido actual y agregar las 2 columnas
            section.innerHTML = `
                <h4>${section.querySelector('h4').innerHTML}</h4>
                <div class="two-column-list">
                    <ul>${firstColumn.innerHTML}</ul>
                    <ul>${secondColumn.innerHTML}</ul>
                </div>
            `;
        }
    });
}

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Cerrar menú al hacer clic en un enlace
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// ============================================
// FILTER BUTTONS
// ============================================

function initFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const materiaCards = document.querySelectorAll('.materia-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));
            // Agregar clase active al botón clickeado
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            materiaCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.3s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ============================================
// SCROLL EFFECTS
// ============================================

function initScrollEffects() {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Efecto de sombra en el header al hacer scroll
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// ANIMACIONES DE ENTRADA
// ============================================

function initAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos para animar
    const animateElements = document.querySelectorAll('.materia-card, .especifica-card, .universidad-item, .modalidad-card, .stat-item');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease-out ${index * 0.05}s, transform 0.5s ease-out ${index * 0.05}s`;
        observer.observe(el);
    });
}

// Clase CSS para animación
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// CERRAR MODAL CON ESC
// ============================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Cerrar modal al hacer clic fuera
document.getElementById('materia-modal').addEventListener('click', (e) => {
    if (e.target.id === 'materia-modal') {
        closeModal();
    }
});

// Cerrar modal al hacer clic en el botón de cierre
document.querySelector('.modal-close')?.addEventListener('click', closeModal);

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initFilterButtons();
    initScrollEffects();
    initAnimations();
    
    // Verificar si hay imagen de logo, si no, ocultarla
    const logoImg = document.getElementById('logo-img');
    
    if (logoImg) {
        logoImg.onerror = function() {
            this.style.display = 'none';
        };
    }
    
    // Inicializar navegación activa
    initActiveNavigation();
});

// ============================================
// NAVEGACIÓN ACTIVA
// ============================================

function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// UTILIDADES
// ============================================

// Función para debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Función para throttle
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
