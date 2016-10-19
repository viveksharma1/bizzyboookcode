myApp.controller('LoginCntrl', ['$state', '$rootScope', function ($state, $rootScope) {
   // showoverlay();

   
    $(function () {
   //     showoverlay();
        $('#Move').on('click', function () {
         //   showoverlay();
            var usernamedetail = $('#usernamedetail').val();
            var userpassword = $('#userpassword').val();
          //  showoverlay();
            if (usernamedetail == "") {
                return;

            }
            else if (userpassword == "") {
                return;

            }
            else {
                $rootScope.loggedin(usernamedetail);
            }
           // hideoverlay();
        });
     //   hideoverlay();
    });

    $('#Invalidbtn').click(function () {
        $('#InvalidModal').modal('show');
    });

    $('#okbtn').click(function () {
        $('#CaptchaDiv').show();
    })


}]);