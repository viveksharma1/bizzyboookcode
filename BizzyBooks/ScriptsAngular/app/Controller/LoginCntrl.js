myApp.controller('LoginCntrl', ['$state', '$http','$rootScope', function ($state,$http, $rootScope) {
   // showoverlay();

   
    $(function () {
   //     showoverlay();
        $('#Move').on('click', function () {
         //   showoverlay();
            var usernamedetail = $('#usernamedetail').val();
            var userpassword = $('#userpassword').val();
            //  showoverlay();

            var data = {
                "email": usernamedetail,
                "password": userpassword
            };

            $http.post("http://localhost:4000/login", data).success(function (data, status) {

                console.log(data);
                $rootScope.tok = data.token;
                localStorage['adminrole'] = data.role;
                localStorage['token'] = data.token;
               
                console.log($rootScope.tok);
                

                $rootScope.loggedin(usernamedetail);
            });

            /*
            if (usernamedetail == "") {
                return;

            }
            else if (userpassword == "") {
                return;

            }
            else {
                $rootScope.loggedin(usernamedetail);
            } */
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