function translate(lng, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
    if(lng == 'en'){
        $("#enTranslator").css('color', '#00EEF4');
        $("#esTranslator").css('color', '#f3f3f3');
    }
    if(lng == 'es'){
        $("#esTranslator").css('color', '#00EEF4');
        $("#enTranslator").css('color', '#f3f3f3');
    }
}

$(document).ready(function(){
    $("#enTranslator").click(function(){
        translate('en', 'lng-tag');
    });
    $("#esTranslator").click(function(){
        translate('es', 'lng-tag');
    });
});


// var english = document.getElementById("enTranslator");
// var    spanish = document.getElementById("esTranslator");
// // declare some variables to catch the various HTML elements
//
// english.addEventListener("click", function() {
//        translate('en','lng-tag')
//     }, false
// );
// // add an event listener to listen to when the user clicks on one of the language span tags
// // this triggers our custom "change" function, which we will define later
//
// spanish.addEventListener("click", function() {
//        translate('es','lng-tag')
//     }, false
// );
//

