var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var backdrop = document.querySelector(".backdrop");

menuIcon.addEventListener("click", function() {
    if (sideBar.classList.contains("small-sidebar")) {
        closeSidebar();
    } else {
        openSidebar();
    }
});

backdrop.addEventListener("click", function() {
    closeSidebar();
});

function openSidebar() {
    sideBar.classList.add("small-sidebar");
    container.classList.add("large-container");
    backdrop.style.display = "block";
}

function closeSidebar() {
    sideBar.classList.remove("small-sidebar");
    container.classList.remove("large-container");
    backdrop.style.display = "none";
}
