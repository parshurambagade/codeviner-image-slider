
const images = ["https://cdn.pixabay.com/photo/2023/03/07/10/04/clamshell-orchid-7835395_1280.jpg", "https://cdn.pixabay.com/photo/2020/01/12/03/08/orchids-4759196_1280.jpg", "https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg"];
let currentIndex = 0;

const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const sliderImage = document.getElementById("sliderImage");

function updateImage() {
    sliderImage.src = images[currentIndex];
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Initial image
updateImage();
