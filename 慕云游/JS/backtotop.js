(function () {
    var backtotop = document.getElementById('backtotop');
    var banner = document.getElementById('banner')
    var timer;

    backtotop.onclick = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            document.documentElement.scrollTop -= 30;
            if (document.documentElement.scrollTop <= 0) {
                clearInterval(timer);
            }
        }, 20)
    }
    banner.onmousewheel = function () {
        clearInterval(timer);
    }
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop;
        if (scrollTop == 0) {
            backtotop.style.display = 'none';
        } else {
            backtotop.style.display = 'block';
        }
    }
})()