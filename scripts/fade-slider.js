(function(){
    const slides = document.querySelectorAll('.fade-slider__item');
    const activeClass = 'fade-slider__item--style-visible';
    let index = 0;
    setInterval(function(){
        slides[index].classList.remove(activeClass);
        index++;
        if (index + 1 > slides.length) {
            index = 0;
        } else {

        }
        slides[index].classList.add(activeClass);
    }, 5000);
}())