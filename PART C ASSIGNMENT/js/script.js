$(document).ready(function () {

    // Adding a "JavaScript is Enabled" Body Class

    $("body").addClass("js");

    $("#login_button, #login .close_button a").click(function (event) {
        event.preventDefault();
        $("body").toggleClass("show_login");
    });

    var account_exist = false
    if (account_exist == false) {
        $("#login #register_form").toggleClass("register_on");
    }
});