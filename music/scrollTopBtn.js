// When the user scrolls down 20px from the top, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-top-btn").style.display = "block";
    } else {
        document.getElementById("scroll-top-btn").style.display = "none";
    }
}