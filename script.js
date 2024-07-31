function smoothScroll(target) {
    var targetElement = document.querySelector(target);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}





function changeText(item, text){
    item.innerHTML = text
}


