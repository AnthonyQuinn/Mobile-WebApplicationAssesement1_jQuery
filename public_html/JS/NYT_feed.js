/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function loadJSON() {

    /* $.getJSON("JSON/test.json", function (data) { */
    $.getJSON("JSON/test.json", function (data) {

        var items = [];
        $.each(data, function (key, val) {
            items.push("<li id='" + key + "'>" + val + "</li>");
        });

        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("#NYT_feed");
    })
}
;
function loadJSON2() {

    $.getJSON("JSON/twitter.json", function (data) {

        var items = [];
        $.each(data, function (key, val) {
            items.push("<li id='" + key + "'>" + val + "</li>");
        });

        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("#NYT_feed");
    })
}
;