function showParagraph(ele) {
    var x = document.getElementById(ele).nextElementSibling;

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}