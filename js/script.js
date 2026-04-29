document.addEventListener("DOMContentLoaded", () => {
    console.log("SITIO CARGANDO CORRECTAMENTE");

    // --- Ir arriba (tu código original) ---
    const btntop = document.getElementById("btnTop");
    if (btntop) {
        window.addEventListener("scroll", () => {
            btntop.style.display = window.scrollY > 200 ? "block" : "none";
        });
        btntop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // --- Ir abajo ---
    const btnBottom = document.getElementById("btnBottom");
    if (btnBottom) {
        btnBottom.addEventListener("click", () => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        });
    }

    // --- Tiempo en página ---
    let segundos = 0;
    const reloj = document.getElementById("tiempoEnPagina");
    if (reloj) {
        setInterval(() => {
            segundos++;
            const min = Math.floor(segundos / 60);
            const seg = segundos % 60;
            reloj.textContent = `Tiempo en página: ${min}m ${seg}s`;
        }, 1000);
    }
});