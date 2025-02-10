function reorderElements() {
    const container = document.querySelector(".container");

    // Only reorder if screen width is 1050px or less
    if (window.innerWidth <= 1050) {
        if (!container.classList.contains("reordered")) {
            container.appendChild(document.querySelector(".contactinfo"));
            container.appendChild(document.querySelector(".obj"));
            container.appendChild(document.querySelector(".edu-cert"));
            container.appendChild(document.querySelector(".skills"));
            container.appendChild(document.querySelector(".projects"));
            container.classList.add("reordered"); // Mark as reordered
        }
    } else {
        // Reload page to restore original order on large screens
        if (container.classList.contains("reordered")) {
            location.reload();
        }
    }
}

// Run only when the page loads or screen size changes
window.addEventListener("resize", reorderElements);
window.addEventListener("DOMContentLoaded", reorderElements);
