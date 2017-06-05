/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function loadXMLDoc(){
    var xml;
    $(document).ready(function(){
        $.ajax({
            type: "GET",
            url:"XML_Files/LOLCatz.xml",
            dataType: "xml",
            success: xmlParser       })
    });
});
