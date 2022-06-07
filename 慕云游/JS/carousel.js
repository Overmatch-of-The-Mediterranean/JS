(function () {
    var carousel_list = document.getElementById('carousel_list');
    var leftbtn = document.getElementById('leftbtn');
    var rightbtn = document.getElementById('rightbtn');
    var ol_circles = document.getElementById('circles');
    var ol_lis = ol_circles.getElementsByTagName('li');
    var cloneli = carousel_list.firstElementChild.cloneNode(true);
    var banner = document.getElementById('banner');
    carousel_list.appendChild(cloneli);
    var idx = 0;
    var lock = true;
    rightbtn.onclick = rightbtn_handler;
    function rightbtn_handler() {
        if (!lock) return;
        lock = false;
        idx++;
        carousel_list.style.transition = 'transform 0.5s ease 0s'
        carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
        if (idx > 4) {
            setTimeout(function () {
                carousel_list.style.transition = 'none';
                carousel_list.style.transform = 'none';
                idx = 0;
            }, 500)
        }
        setTimeout(function () {
            lock = true;
        }, 500)
        setCircle();
    }
    leftbtn.onclick = function () {
        if (!lock) return;
        lock = false;
        if (idx == 0) {
            carousel_list.style.transition = 'none';
            carousel_list.style.transform = 'translateX(' + -16.66 * 5 + '%)';
            idx = 4;
            setTimeout(function () {
                carousel_list.style.transition = 'transform 0.5s ease 0s';

                carousel_list.style.transform = 'translateX(' + -16.66 * 4 + '%)';
            }, 0)
        } else {
            idx--;
            carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
        }
        setTimeout(function () {
            lock = true;
        }, 500)
        setCircle();
    }
    //函数
    function setCircle() {
        for (var i = 0; i <= 4; i++) {
            if (i == idx % 5) {
                ol_lis[i].className = 'current';
            } else {
                ol_lis[i].className = ' ';
            }
        }
    }
    //事件委托
    ol_circles.onclick = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            var n = Number(e.target.getAttribute('data-n'));
            idx = n;
            carousel_list.style.transform = 'translateX(' + -16.66 * idx + '%)';
            setCircle();
        }
    }
    var timer = setInterval(rightbtn_handler, 2000);
    banner.onmouseenter = function () {
        clearInterval(timer);
    }
    banner.onmouseleave = function () {
        clearInterval(timer);
        timer = setInterval(rightbtn_handler, 2000);
    }
    ol_circles.onmouseenter = function () {
        clearInterval(timer);
    }
    ol_circles.onmouseleave = function () {
        clearInterval(timer);
        timer = setInterval(rightbtn_handler, 2000);
    }
})()