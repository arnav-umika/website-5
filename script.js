document.addEventListener("DOMContentLoaded", function() {
    const pictureSelect = document.getElementById("pictureSelect");
    const displayedImage = document.getElementById("displayedImage");

    pictureSelect.addEventListener("change", function() {
        const selectedPicture = pictureSelect.value;
        displayedImage.src = selectedPicture;
    });
});
