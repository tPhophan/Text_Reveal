const contentsEl = document.querySelectorAll('.content');

document.addEventListener('scroll', ft_showText);

function ft_showText(){
    contentsEl.forEach((section)=>{
        const imgEl = section.querySelector('img');
        const textEl = section.querySelector('.text');
        const scrollPos = window.pageYOffset;
        // 500 + 100 / 50 = 502 => showText
        const textPos = imgEl.offsetTop + imgEl.offsetHeight / 50;
        if (scrollPos > textPos) {
            //show Text
            textEl.classList.add('show-reveal')
        }
        else{
            // hide Text
            textEl.classList.remove('show-reveal')
        }
    });
}
