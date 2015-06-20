/**
 * Created by soufien on 6/13/15.
 */



function logout() {
    $.ajax({
        url: "/users/logout",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        success: function (response) {
            //do whatever your thingy..
            $('#acceuil').hide();
            $('#ajoutentreprise').hide();
            $('#listentreprise').hide();
            $('#deconnexionli').hide();
            $('#loginli').show();
            $('#signupli').show();
            window.location.href="#/login";

        }
    });
}