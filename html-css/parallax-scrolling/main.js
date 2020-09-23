const parallax = document.querySelector('#parallax');
window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    console.log('offset ', offset);
    parallax.style.backgroundPositionY = offset + .7 + 'px';
});