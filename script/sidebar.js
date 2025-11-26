const btn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const main = document.querySelector(".main");

btn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    main.classList.toggle("shifted");
    btn.classList.toggle("shifted");
});

