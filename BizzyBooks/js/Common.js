$(document).ready(function () {


    $('#menutoggle').click(function () {
        $("#wrapper").toggleClass("toggled");
    });


    $('#flyout').hide();
    $('#flyoutCompany').hide();
    $(".addrotate").click(function () {
        $(this).toggleClass("down");
        $('#flyout').fadeToggle("slow", "linear");
    })


    
});