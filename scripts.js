function likePost(button) {
    const likeCountSpan = button.querySelector('.like-count');
    let likeCount = parseInt(likeCountSpan.textContent);
    likeCount++;
    likeCountSpan.textContent = likeCount;
}

function openModal(image) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');
    
    modal.style.display = "flex";
    modalImage.src = image.src;
    caption.textContent = image.alt;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}