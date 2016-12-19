myApp.controller('MakePaymentCntrl', ['$scope', '$http', '$stateParams', '$timeout', 'myService','$rootScope', '$state', 'config', function ($scope, $http, $stateParams,$timeout,myService, $rootScope, $state, config) {

    $(".my a").click(function (e) {
        e.preventDefault();
    });

    $scope.goBack = function () {
        window.history.back();
    },
     $scope.popuclose = function () {
         $('#form-popoverPopup').hide();
     }

     $('#PaymentdateCheque').datepicker("setDate", new Date());
    $scope.popuclose = function () {
        $('#form-popoverPopup').hide();
    }

    $scope.add = function () {

        $('#form-popoverPopup').show();


    };


    var files, res;

    document.getElementById("uploadBtn").onchange = function (e) {
        e.preventDefault();

    };
    document.getElementById('uploadBtn').onchange = uploadOnChange;

    function uploadOnChange() {
        var filename = this.value;
        var lastIndex = filename.lastIndexOf("\\");
        if (lastIndex >= 0) {
            filename = filename.substring(lastIndex + 1);
        }
        files = $('#uploadBtn')[0].files;
        res = Array.prototype.slice.call(files);
        for (var i = 0; i < files.length; i++) {
            $("#upload_prev").append("<span>" + files[i].name + "&nbsp;&nbsp;<b>X</b></span>");
        }

    }

    $(document).on("click", "#upload_prev span", function () {
        res.splice($(this).index(), 1);
        $(this).remove();
       

    });

    $scope.no = $stateParams.poNo;

   

   

  
    //get suppliers 

    

    $scope.suppliers = [];
    $scope.$watch('sup', function () {
     

        myService.getSuppliers().then(function (data) {

            $scope.suppliers = data;

            console.log(data);
        });

        
        $http.get(config.api + 'transactions' + '?filter[where][no]=' + $scope.no)
        .success(function (data) {

            if (data.length > 0)
            {
                $scope.bill = data;
                $scope.amount = data[0].amount;

                $scope.supplier = data[0].supliersName;
                $scope.email = data[0].email;

                if (data[0].balance == null) {


                    $scope.bill[0].balance = data[0].amount;
                    $scope.balance = data[0].amount;

                    console.log($scope.balance)
                }
                else {
                    $scope.balance = data[0].balance;
                }

                if ($scope.balance == 0) {
                    $scope.status = "PAID";
                }


            }

          
    
           

          
        });

       
      
    });

    
    // Make payement 

    $scope.makePayment = function ()
    {
        var paymentAmount = $("#abc").val();

        $scope.paidAmount = paymentAmount;
        
        $scope.newAmount = Number($scope.balance - paymentAmount);
       
       

        var data = {
            amount: $scope.amount,
            status: ['PAID'],
            balance:$scope.newAmount


        }

      
        var date = $("#PaymentdateCheque").val()

        $scope.No = "REF " + $scope.no
        var data1 = {

            supliersName: $scope.supplier,
            email:$scope.email,
            ordertype: "PAYMENT",
            date: date,
            no: $scope.No,
            balance: $scope.newAmount,
           
            amount: $scope.paidAmount



        }


        $http.post(config.api + 'transactions', data1)
              .success(function (data) {



              });


    $http.post(config.api + 'transactions' +'/update'+ '?[where][no]=' + $scope.no,data)
          .success(function (data) {
              
             

          });

    }



}]);