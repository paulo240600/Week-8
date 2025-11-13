const body = document.body;
const button = document.getElementById("ThemeToggle");

button.addEventListener("click", () => {
    body.classList.toggle("dark");
});

const gallery = document.getElementById("gallery");
const original = gallery.src;

const images = [
    "images/luffy.jpg",
    "images/gear2.jpg",
    "images/Gear_3.png",
    "images/gear 4.jpg",
    "images/snakeman.jpg",
    "images/gear5.jpg"
];
let index = 0;

function changeImage() {
    gallery.classList.add("fade-out");

    setTimeout(() => {
        index = (index + 1) % images.length;
        gallery.src = images[index];

        gallery.classList.remove("fade-out");
    }, 500);
}

gallery.addEventListener("mouseover", changeImage);