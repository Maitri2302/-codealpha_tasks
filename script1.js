let currentIndex = 0;

function getAllVisibleImages() {
    return Array.from(document.querySelectorAll('.gallery .image'))
        .filter(img => img.style.display !== 'none');
}

const allImages = document.querySelectorAll('.gallery .image');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = allImages[currentIndex].src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function nextImage() {
    currentIndex = (currentIndex + 1) % allImages.length;
    lightboxImg.src = allImages[currentIndex].src;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    lightboxImg.src = allImages[currentIndex].src;
}

function filterImages(category) {
    allImages.forEach(img => {
        if (category === 'all' || img.classList.contains(category)) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}