
var btn = document.querySelector(".icon-link").addEventListener("click", function () {
    document.querySelector(".nav-link").classList.toggle("active-btn");
})
document.querySelectorAll('.nav-link a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector(".nav-link").classList.remove("active-btn");
    });
});
