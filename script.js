document.addEventListener("DOMContentLoaded", () => {
    // --- LÓGICA DEL THEME TOGGLE ---
    const themeToggle = document.getElementById("theme-toggle");
    const html = document.documentElement;
    const themeIcon = themeToggle.querySelector("i");

    // Cargar tema guardado o detectar preferencia del sistema
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light");

    // Aplicar tema inicial
    html.setAttribute("data-theme", initialTheme);
    updateThemeIcon(initialTheme);

    // Toggle theme al hacer clic
    themeToggle.addEventListener("click", () => {
        const currentTheme = html.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";

        html.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeIcon(newTheme);
    });

    // Función para actualizar el icono
    function updateThemeIcon(theme) {
        if (theme === "dark") {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        } else {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        }
    }

    // Detectar cambios en la preferencia del sistema
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
            const newTheme = e.matches ? "dark" : "light";
            html.setAttribute("data-theme", newTheme);
            updateThemeIcon(newTheme);
        }
    });

    // --- LÓGICA DEL CARRUSEL INFINITO ---
    const track = document.getElementById("track");

    if (track) {
        const items = Array.from(track.children);
        items.forEach((item) => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });
    }

    // --- LÓGICA DEL MENÚ HAMBURGUESA (MÓVIL) ---
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    // --- MODAL PARA SOLO LAS IMÁGENES DE CANCHAS ---
    const imgModal = document.getElementById("imgModal");
    const imgModalContent = document.getElementById("imgModalContent");
    const closeModal = document.getElementById("closeModal");

    // Delegación de eventos: funciona también con elementos clonados
    document.addEventListener("click", (e) => {
        const clickedImage = e.target.closest(".zoomable-img");

        if (clickedImage) {
            imgModal.style.display = "flex";
            imgModalContent.src = clickedImage.src;
            imgModalContent.alt = clickedImage.alt || "Imagen ampliada";
            document.body.style.overflow = "hidden";
            return;
        }

        if (e.target === imgModal || e.target === closeModal) {
            imgModal.style.display = "none";
            imgModalContent.src = "";
            document.body.style.overflow = "";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && imgModal.style.display === "flex") {
            imgModal.style.display = "none";
            imgModalContent.src = "";
            document.body.style.overflow = "";
        }
    });

    console.log("Nodo Sur: Carrusel + Responsive Menu + Modal activos.");
});
