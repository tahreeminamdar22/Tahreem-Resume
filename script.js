function reorderElements() {
    if (window.innerWidth <= 1050) {
        const container = document.querySelector(".container");

        // Select elements and move them in the desired order
        container.appendChild(document.querySelector(".contactinfo"));
        container.appendChild(document.querySelector(".obj"));
        container.appendChild(document.querySelector(".edu-cert"));
        container.appendChild(document.querySelector(".skills"));
        container.appendChild(document.querySelector(".projects"));
    }
}

// Run when page loads & when screen resizes
window.addEventListener("load", reorderElements);
window.addEventListener("resize", reorderElements);