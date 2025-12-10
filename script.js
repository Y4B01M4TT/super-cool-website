// Menu open/close
const menuButton = document.getElementById("menu-button");
const topMenu = document.getElementById("top-menu");

menuButton.addEventListener("click", () => {
    topMenu.classList.toggle("open");
});

// 12-hour Clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    const formatted = `${hours}:${minutes} ${ampm}`;

    document.getElementById("floating-clock").textContent = formatted;
    document.getElementById("clock").textContent = formatted;
}

setInterval(updateClock, 1000);
updateClock();
