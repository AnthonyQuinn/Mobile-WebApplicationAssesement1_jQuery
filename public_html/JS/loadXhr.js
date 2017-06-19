/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function loadJS_Popups() {
//Set the value of an input box and put it in a variable.
    $("#submitButton").click(function () {/*When the button is clicked, its id is used to trigger the 
                                          * function */


// remove previous search results
        $("#popups").empty();/* */
        var numOfPopups = 7;
        var anchorHTML = "";
        var popupHTML = "";
        var mysearch = $("input").val();
        // make call and handle callback from Flickr public Feed

        (function () {

            var nytmovies = "JSON/nytimesmovies.json"; /** A variable,nytmovies is used to reference the json file nytimesmovies.json
 *                                                      An explenation of how the nytimesmovies.json was obtained from the New York Times website
 *                                                      is provided in; howtheNYTmoviesJSONfilewasobtained.txt
 *                                                       **/


            $.getJSON(nytmovies, {

                tags: mysearch, // our input 
                tagmode: "any",
                format: "json"
            })

                    .done(function (data) {

                        // looping numOfPics times The numOfPics variable (5 in this case ) sets the number of 
                        $.each(data.results, function (i, results) {/*The array results[] is returned  */

                            // generate  <a href="#photo0" data-rel="popup">Open Popup 0 </a>
                            anchorHTML += '<li><a href="#photo' + i + '" data-rel="popup">Popup ' + i + ' </a></li>';

                            // generate <div data-role="popup" id="photo0"><img src={{flickr query}} /></div>
                            popupHTML += '<div data-role="popup" id="photo' + i + '"><figcaption display:block>Title: &nbsp' + results.display_title + '</figcaption><br><figcaption>Summary: &nbsp' + results.summary_short + '</figcaption><br><img src="' + results.multimedia.src + '"/></div>';







                            if (i === numOfPopups - 1) { /*When the condition is no longer true,
                             *  ie i is equal to numOfPics, the loop halts executing.  */
                                return false;
                            }
                            /*   }); // end of loop */

                        });
                        // Dom injection 
                        $("#myList").append(anchorHTML).listview("refresh");/* The id: "myList" is used to append anchorHTML*/

                        $("#popups").append(popupHTML).trigger("create");

                        // set a unique ID atribute for each image using attr()

                        jQuery.each($("img"), function (i, val) {
                            $(this).attr("id", i);
                        });
                    });
        })();
    });

}
