$( document ).ready(function() {
    $( ".hide-content" ).hide();
});

var show_hide = function(hash) {
    $( "#" + hash + ".hide-show" ).hide();
    $( "#" + hash + ".hide-content" ).show();
}
