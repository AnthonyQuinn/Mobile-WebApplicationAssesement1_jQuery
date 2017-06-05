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

    });
     };
     function getXmlData(data){
	xml = data;

	$(xml).find("kitteh").each(function (){
		kitteh = $(this);
		var name = $(kitteh).find("name").text();
		var src = $(kitteh).find("url").text();
		var id = $(kitteh).find("id").text();
		var url = $(kitteh).find("url").text();

		$('#myList').append('<li><a href="#'+id+'">'+ name + '</a></li>');

		/**$('#pageone').append(
			'<div data-role="page" id="'+id+'"><img src="'+url+'"><a href="#pageone">Back to Page One</a></div>'); **/
                $('#home').append(
			'<div data-role="page" id="'+id+'"><img src="'+url+'"><a href="#home">Back to Page One</a></div>');

	});

}


