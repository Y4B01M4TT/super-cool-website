// Menu open/close
const menuButton = document.getElementById("menu-button");
const menuWrapper = document.getElementById("glass-menu-wrapper");

menuButton.addEventListener("click", () => {
    menuWrapper.classList.toggle("open");
});

// Click outside to close
document.addEventListener("click", (e) => {
    if (!menuWrapper.contains(e.target) && e.target !== menuButton) {
        menuWrapper.classList.remove("open");
    }
});

// 12-hour Clock (both clocks)
function updateClock() {
    const now = new Date();
    let h = now.getHours();
    const m = now.getMinutes().toString().padStart(2, "0");
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;

    const formatted = `${h}:${m} ${ampm}`;

    document.getElementById("floating-clock").textContent = formatted;
    document.getElementById("menu-clock").textContent = formatted;
}

setInterval(updateClock, 1000);
updateClock();
