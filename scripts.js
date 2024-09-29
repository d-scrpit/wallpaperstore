const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const close = document.getElementById('close');

document.querySelectorAll('.wallpaper').forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = image.src;
    });
});

close.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
