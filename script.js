
    document.addEventListener("DOMContentLoaded", () => {
        // Selecciona los enlaces del menú de navegación
        links = document.querySelectorAll("nav a");

        // Agrega un evento de clic a cada enlace
        links.forEach(link => {
            link.addEventListener("click", event => {
                event.preventDefault(); // Previene el comportamiento predeterminado del enlace

                const href = link.getAttribute("href");
                const section = document.querySelector(href);

                // Verifica si la sección existe y realiza el scroll
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            });
        });

        // Mostrar un mensaje de bienvenida sin usar alert
        const welcomeMessage = document.createElement("div");
        welcomeMessage.textContent = "Bienvenido a mi página web";
        welcomeMessage.style.position = "fixed";
        welcomeMessage.style.top = "10px";
        welcomeMessage.style.left = "50%";
        welcomeMessage.style.transform = "translateX(-50%)";
        welcomeMessage.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        welcomeMessage.style.color = "#fff";
        welcomeMessage.style.padding = "10px 20px";
        welcomeMessage.style.borderRadius = "5px";
        document.body.appendChild(welcomeMessage);

        // Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            welcomeMessage.style.display = "none";
        }, 5000);
    });