myApp.controller('MakePaymentCntrl', ['$scope', '$http', '$stateParams', '$timeout', 'myService','$rootScope', '$state', 'config', function ($scope, $http, $stateParams,$timeout,myService, $rootScope, $state, config) {

    $.fn.datepicker.defaults.format = "dd/mm/yyyy";
    localStorage["type1"] = "PAYMENT"
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
    $scope.Accountbtn = function () {
        $('#AccountModal').modal('show');
    };

    $('.parentaccount > li').click(function () {
        var $toggle = $(this).parent().siblings('.dropdown-toggle');
        $toggle.html("" + $(this).text() + "<i class=\"fa fa-sort pull-right\" style=\"margin-top:3px\"></i>")


    });

    $('.parentaccount li a').click(function () {
        $(this).addClass('select').siblings().removeClass('select');
    });

    $('#asofdate').datepicker({
        autoclose: true,
        format: 'dd/mm/yyyy'
    });
    $scope.Accountbtn = function () {
        $('#formaccount').modal('show');
    };


    $scope.add3 = function () {
        $('#formaccount').modal('show');
    };
    $('#SearchFilter').keyup(function () {
        var searchText = $(this).val();
        $('.parentaccount > li a').each(function () {
            var currentLiText = $(this).text().toLowerCase();
            showCurrentLi = currentLiText.indexOf(searchText) !== -1;
            $(this).toggle(showCurrentLi);
        });

    });

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
    $scope.bankAccount = {}
    $scope.partyAccount = {}
    $('#paymentdate').datepicker();
    $scope.dateFormat = function (date) {
        var res = date.split("/");
        console.log(res);
        var month = res[1];
        var days = res[0]
        var year = res[2]
        var date = month + '/' + days + '/' + year;
        return date;
    }
    $scope.getVoucherCount = function () {
        $http.get(config.api + "voucherTransactions/count" + "?[whrer][type]=Payment").then(function (response) {
            $scope.paymentNo = response.data.count
            console.log(response);
        });
    }
    $scope.getSupplier = function () {
        $http.get(config.api + "suppliers").then(function (response) {
            $scope.partyAccounts = response.data
            console.log($scope.partyAccounts);
        });
    }
    $scope.getAccount = function () {
        $http.get(config.login + "getPaymentAccount").then(function (response) {
            $scope.bankAccounts = response.data
            console.log($scope.bankAccounts);
        });
    }
    $scope.paymentData = [];
    $scope.transaction = []
    $scope.createPaymentData = function () {
        for (var i = 0; i < $scope.transaction.length; i++) {

            $scope.paymentData.push({ date: $scope.transaction.date , duedate: $scope.transaction.billDueDate ,  id: $scope.transaction[0].id, amount: $scope.transaction[0].amount, no: $scope.transaction[0].no 
                , type: $scope.transaction.ordertype, balance: $scope.transaction[0].balance
            });
        }
       
    }
   
    $scope.getAllBill = function (name) {
        $http.get(config.api + "transactions"+"?[filter][where][supliersName]=" + name).then(function (response) {
            $scope.transaction = response.data
            $scope.createPaymentData();         
        });
    }
    
    
    $scope.payBill = function (amount, index, paymentamount,id) {   
        if (!paymentamount) {           
        }     
        if (amount >= paymentamount && paymentamount > 0) {       
           var  paidAmount = Number(amount - paymentamount);
           $scope.paymentData[index].balance = paidAmount;        
        }      
        console.log($scope.paymentData)
     
    }

    $scope.getAccount();
    $scope.getSupplier();
    $scope.getVoucherCount();
    $scope.$watch('partyAccount.selected', function () {
        if ($scope.partyAccount.selected.company) {
            $scope.getAllBill($scope.partyAccount.selected.company);
        }

    });

    $('#paymentdate').datepicker("setDate", new Date());

    $('#paymentdate').datepicker().on('changeDate', function (ev) {
        $('.datepicker').hide();
    });

  
    $scope.getPaymentdata = function (id) {
        $http.get(config.api + 'voucherTransactions/' + id)
                    .then(function (response) {
                        console.log(response);
                      
                        $scope.paymentdate = response.data.date;
                        $scope.state = response.data.state;
                        $scope.billDetail = response.data.vo_payment.billDetail;
                        $scope.amount = response.data.amount
                        $scope.refNo = response.data.refNo
                        $scope.paymentNo = response.data.no
                        $scope.bankAccount = { selected: { company: response.data.vo_payment.bankAccount } };
                        $scope.partyAccount = { selected: { company: response.data.vo_payment.partyAccount } };
                       
                    });
    }

    if ($stateParams.voId) {  
        $scope.getPaymentdata($stateParams.voId);
        if (!$scope.billDetail) {

            $('#Outstandingdiv').hide();

        }
    }
    

   
   



}]);