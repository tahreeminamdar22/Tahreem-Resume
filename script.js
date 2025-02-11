// Get the container element
const reorder = document.querySelector(".container");

// Check if the screen width is 1050px or less
if (window.innerWidth <= 1050) {
    if (reorder) { // Ensure container exists
        reorder.appendChild(document.querySelector(".contactinfo"));
        reorder.appendChild(document.querySelector(".obj"));
        reorder.appendChild(document.querySelector(".edu-cert"));
        reorder.appendChild(document.querySelector(".skills"));
        reorder.appendChild(document.querySelector(".projects"));
    }
}
document.getElementById("year").innerText = new Date().getFullYear();