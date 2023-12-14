let slideIndex = 0;


function carousel() {
    let i;
    let x = document.getElementsByClassName("carousel");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "flex";
    setTimeout(carousel, 3500);
}

carousel();