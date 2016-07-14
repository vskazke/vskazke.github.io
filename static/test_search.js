/*jslint node: true */
'use strict';

$(document).ready(function () {

    $('#search').click(function () {
        $('#result').submit();
        $('#result').html('');
        var name = $('#skazka_search').val(),
            result = [],
            title,
            i,
            url = '/search/get_skazki/';
        $.getJSON(url, function (data) {
            title = data.skazka_search;
            for (i = 0; i < title.length; i += 1) {
                if (name == ' ' || name == '') {
                    result = [];
                } else if (title[i].title.toLowerCase().match(name)) {
                    result.push(title[i]);
                }
            }
            if (result.length <= 0) {
                result = ['NO'];
            }
            for (i = 0; i < result.length; i += 1) {
                if (result[i] === 'NO') {
                    $('#result').html('<p>Ничего не найдено</p>');
                } else {
                    $('#result').append('<a href="' + result[i].url + '">' +
                                '<button class="btn btn-default" id="skazka-title">' +
                                '<img src=' + result[i].first_img + ' width="150px" height="150px">' +
                                '<br><strong>' + result[i].title + '</strong></br></button></a>');
                }
            }
        });
    });
    $('#skazka_search').keydown(function (event) {
        if (event.which === 13) {
            $('#result').submit();
            $('#result').html('');
            var name = $('#skazka_search').val(),
                result = [],
                title,
                i,
                url = '/search/get_skazki/';
            $.getJSON(url, function (data) {
                title = data.skazka_search;
                for (i = 0; i < title.length; i += 1) {
                    if (name == ' ' || name == '') {
                        result = [];
                    } else if (title[i].title.toLowerCase().match(name)) {
                        result.push(title[i]);
                    };
                }
                if (result.length <= 0) {
                    result = ['NO'];
                }
                for (i = 0; i < result.length; i += 1) {
                    if (result[i] === 'NO') {
                        $('#result').html('<p>Ничего не найдено</p>');
                    } else {
                    $('#result').append('<a href="' + result[i].url + '">' +
                                '<button class="btn btn-default" id="skazka-title">' +
                                '<img src=' + result[i].first_img + ' width="150px" height="150px">' +
                                '<br><strong>' + result[i].title + '</strong></br></button></a>');
                    }
                }
            });
        }
    });
});

