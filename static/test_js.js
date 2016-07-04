/* globals $ */
'use strict';

var count = 0;
function changeImageForward() {
    count = count + 1;
    var image = document.getElementById('image'),
        text = document.getElementById('text'),
        img,
        txt,
        len,
        i,
        n,
        url;
    url = '/' + location.pathname.split('/')[1] + '/get_skazka/';
    $.getJSON(url, function (data) {
        img = data.skazka.image;
        txt = data.skazka.text;
        if (img.length > txt.length) {
            len = img.length;
            //txt[img.length - 1] = 'Конец';
        } else if (img.length < txt.length) {
            len = txt.length;
            //img[txt.length - 1] = '/static/fonts/end.png';
        } else {
            len = img.length;
            //txt[img.length - 1] = 'Конец';
            //img[txt.length - 1] = '/static/fonts/end.png';
        }
        for (i = 1; i < len; i += 1) {
            n = i - 1;
            if (image.src.match(img[n].slice(6))) {
                image.src = img[i];
                text.innerHTML = txt[i];
                url =  '/' + data.skazka.name + '/' + i + '/';
                history.pushState(null, null, url);
                break;
            }
            //} else if ((i === len) && (image.src === undefined)) {
            //    img[txt.length - 1] = '/static/fonts/end.png';
            //} else {
            //    text.innerHTML = 'КОНЕЦ';
            //}
        }

    });
    return false;
}
function changeImageBack() {
    count = count + 1;
    var image = document.getElementById('image'),
        text = document.getElementById('text'),
        img,
        txt,
        len,
        i,
        n,
        url;
    url = '/' + location.pathname.split('/')[1] + '/get_skazka/';
    $.getJSON(url, function (data) {
        img = data.skazka.image;
        txt = data.skazka.text;
        if (img.length >= txt.length) {
            len = img.length;
        } else {
            //img[txt.length - 1] = '/static/fonts/end.png';
            len = txt.length;
        }
        //if (img.length > txt.length) {
          //  txt[img.length - 1] = 'конец';
        //};
        for (i = len - 1; i > 0; i -= 1) {
            n = i - 1;
            if (image.src.match(img[i].slice(6))) {
                image.src = img[n];
                text.innerHTML = txt[n];
                url =  '/' + data.skazka.name + '/' + n + '/';
                history.pushState(null, null, url);
                break;
            }
        }
    });
    return false;
}

$(document).keydown(function (event) {
    if (event.which === 37) {
        count = count + 1;
        changeImageBack();
    }
    if (event.which === 39 || event.which === 13 || event.which === 32) {
        count = count + 1;
        changeImageForward();
    }
});

function goBack() {
    history.go(-1 - count);
}


