window.onscroll = function() {
    var header = document.querySelector('header'); // replace '.header' with your actual header selector

    if (window.pageYOffset > 50) { // replace '50' with the distance you prefer
        header.classList.add('active-header'); // replace 'active' with your actual class name
    } else {
        header.classList.remove('active-header'); // replace 'active' with your actual class name
    }
};