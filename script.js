function openCertificate(image) {
    const modal = document.getElementById("certificateModal");
    const modalImage = document.getElementById("certificateModalImage");

    modalImage.src = image;
    modal.style.display = "flex";
}

function closeCertificate() {
    document.getElementById("certificateModal").style.display = "none";
}
