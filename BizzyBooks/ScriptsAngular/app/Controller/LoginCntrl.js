
var RoleCheck="";
myApp.controller('LoginCntrl', ['$state', '$http', '$rootScope', '$scope', 'config', 'UserService', function ($state, $http, $scope, $rootScope, config, UserService)
{
   // showoverlay();

   
    $(function ()
    {
   //     showoverlay();
        $('#Move').on('click', function ()
        {
         //   showoverlay();
            var usernamedetail = $('#usernamedetail').val();
            var userpassword = $('#userpassword').val();
            //  showoverlay();
            //fiewjfilewjfewjlfewrdjewi powkoew ropewkp
            var data = {
                "email": usernamedetail,
                "password": userpassword
            };
            //comment by vivek
            //comment by vivek
            //comment by vivek
            RoleCheck = "";
            $http.post(config.login + "login", data).success(function (data, status)
            {
               
                RoleCheck = data.role;
                localStorage.userType_Role = data.role;
                $rootScope.tok = data.token;
                localStorage['adminrole'] = data.role;
                localStorage['token'] = data.token;
                

                if(data.message=="User Not Found")
                {

                    alert("Invalid Username or Password")
                    $('#InvalidModal').modal('show');
                                       
                }
                else
                {
                    if (RoleCheck == "3")
                    {
                        var mainCaptcha_Value = document.getElementById('mainCaptcha').value;
                        var txtInput_Value = document.getElementById('txtInput').value;
                        if (mainCaptcha_Value != undefined)
                        var WithoutSpace = mainCaptcha_Value.split(' ').join('');
                        if (txtInput_Value == "")
                        {
                            $('#InvalidModal').modal('show');
                        }
                                
                        if (WithoutSpace == txtInput_Value)
                        {
                            var type = "user";
                            $scope.usertype = type;
                            $rootScope.loggedin(usernamedetail);
                        }
                        else
                        {
                            if (mainCaptcha_Value != undefined)
                            {
                                var type = RoleCheck;
                                $scope.usertype = type;
                                $rootScope.loggedin(usernamedetail);
                            }
                           
                        }
                        
                    }
                    else
                    {
                        $rootScope.loggedin(usernamedetail);
                    }
                     
                    
                }
                
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

    //$('#Invalidbtn').click(function () {
    //    $('#InvalidModal').modal('show');
    //});

    $('#okbtn').click(function ()
    {
        if (RoleCheck=="3")
            $('#CaptchaDiv').show();
        Captcha();
    })

    function Captcha()
    {
        var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
           'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
               '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
        var i;
        for (i = 0; i < 6; i++)
        {
            var a = alpha[Math.floor(Math.random() * alpha.length)];
            var b = alpha[Math.floor(Math.random() * alpha.length)];
            var c = alpha[Math.floor(Math.random() * alpha.length)];
            var d = alpha[Math.floor(Math.random() * alpha.length)];
            var e = alpha[Math.floor(Math.random() * alpha.length)];
            var f = alpha[Math.floor(Math.random() * alpha.length)];
            var g = alpha[Math.floor(Math.random() * alpha.length)];
        }
        var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;
        document.getElementById("mainCaptcha").innerHTML = code
        document.getElementById("mainCaptcha").value = code
    }

 $scope.ValidCaptcha = function ()
    {
       var mainCaptcha_Value = removeSpaces(document.getElementById('mainCaptcha').value);
       var txtInput_Value = removeSpaces(document.getElementById('txtInput').value);
       if (mainCaptcha_Value == txtInput_Value)
        {
            return true;
        }
        else
        {
            return false;
        }
 }

 $scope.removeSpaces = function (string)
    {
        return string.split(' ').join('');
    }

}]);










