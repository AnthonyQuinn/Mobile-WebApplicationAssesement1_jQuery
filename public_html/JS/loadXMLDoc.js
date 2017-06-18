/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function loadXMLDoc() {
console.log(' Parsing has started');
        var xml;
        $(document).ready(function () {
$.ajax({
type: "GET",
        url: "XML_Files/LOLCatz.xml",
        dataType: "xml",
        success: getXmlData});
        console.log(' Parsing has  completed');
        })};
        function loadXMLDoc2() {
        //Set the value of an input box and put it in a variable.
        $("button").click(function () {

        // remove previous search results
        $("#popups").empty();
                var numOfPics = 5;
                var anchorHTML = "";
                var popupHTML = "";
                var mysearch = $("input").val();
                // make call and handle callback from Flickr public Feed

                        (function () {

                        var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
                                /*   var jsonTestFile = "JSON/test.json";  */

                                $.getJSON(flickerAPI, {
                                /*  $.getJSON(jsonTestFile, {  */

                                /*   $.getJSON(newyorktimesAPI, { */
                                tags: mysearch, // our input 
                                        tagmode: "any",
                                        /*  tagmode:"mount rainier", */
                                        format: "json"
                                })

                                .done(function (data) {

                                // looping numOfPics times
                                $.each(data.items, function (i, item) {

                                // generate  <a href="#photo0" data-rel="popup">Open Popup 0 </a>
                                anchorHTML += '<li><a href="#photo' + i + '" data-rel="popup">Open Popup ' + i + ' </a></li>';
                                        // generate <div data-role="popup" id="photo0"><img src={{flickr query}} /></div>
                                        popupHTML += '<div data-role="popup" id="photo' + i + '"><img src="' + item.media.m + '"/></div>';
                                        /*    popupHTML += '<div data-role="popup" id="photo' + i + '"><p ' + item + '/></div>'; */


                                        if (i === numOfPics - 1) {
                                return false;
                                }
                                /*   }); // end of loop */

                                });
                                        // Dom injection 
                                        $("ul").append(anchorHTML).listview("refresh");
                                        $("#popups").append(popupHTML).trigger("create");
                                        // set a unique ID atribute for each image using attr()

                                        jQuery.each($("img"), function (i, val) {
                                        $(this).attr("id", i);
                                                /*       }); */
                                        });
                                        function getXmlData(data) {
                                        xml = data;
                                                $(xml).find("kitteh").each(function () {
                                        kitteh = $(this);
                                                var name = $(kitteh).find("name").text();
                                                var src = $(kitteh).find("url").text();
                                                var id = $(kitteh).find("id").text();
                                                var url = $(kitteh).find("url").text();
                                                $('#myList').append('<li><a href="#' + id + '">' + name + '</a></li>');
                                                /** alert("This is a test @21:59"); **/
                                                /**$('#pageone').append(
                                                 '<div data-role="page" id="'+id+'"><img src="'+url+'"><a href="#pageone">Back to Page One</a></div>'); **/
                                                /**  $('#home').append( **/
                                                $('#myList').append(
                                                '<div data-role="page" id="' + id + '"><img src="' + url + '"><a href="#home">Back to Page One</a></div>');
                                        });
                                        };


                                };
