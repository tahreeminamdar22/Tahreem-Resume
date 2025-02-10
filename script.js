function reorderElements() {
    const container = document.querySelector(".container");

    if (window.innerWidth <= 1050) {
        // Move elements only if screen width is small
        container.appendChild(document.querySelector(".contactinfo"));
        container.appendChild(document.querySelector(".obj"));
        container.appendChild(document.querySelector(".edu-cert"));
        container.appendChild(document.querySelector(".skills"));
        container.appendChild(document.querySelector(".projects"));
    } else {
        // Reload page to restore original order on large screens
        location.reload();
    }
}

// Run reorder when page loads and on screen resize
//window.addEventListener("load", reorderElements);
window.addEventListener("resize", reorderElements);
