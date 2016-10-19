myApp.controller('SupplierCntrl', ['$scope', '$http', '$timeout', '$rootScope', '$state', function ($scope, $http, $timeout, $rootScope, $state) {
    $(".my a").click(function (e) {
        e.preventDefault();
    });

   

    $('#PurchaseOrder').hide();
    $('#OpenBill').hide();
    $('#Overdue').hide();
    
    $scope.PurchaseOrderTable = function () {
        $('#PurchaseOrder').show();
        $('#OpenBalance').hide();
        $('#OpenBill').hide();
        $('#Overdue').hide();
    },

    $scope.OpenBillTable = function () {
        $('#OpenBill').show();
        $('#PurchaseOrder').hide();
        $('#OpenBalance').hide();
        $('#Overdue').hide();
    },

    $scope.OverdueTable = function () {
        $('#Overdue').show();
        $('#OpenBill').hide();
        $('#PurchaseOrder').hide();
        $('#OpenBalance').hide();

    },

    $scope.OpenBalanceTable = function () {
        $('#Overdue').hide();
        $('#OpenBill').hide();
        $('#PurchaseOrder').hide();
        $('#OpenBalance').show();

    },

   


    $scope.menuUp = function (e) {
        $(".statusBody").slideToggle("slow", function () {
            // Animation complete.
        })

        $('#menuUp i').toggleClass("fa-chevron-down fa-chevron-up")
        e.preventDefault();
    };





  

    $('#NewCustomerCreate').click(function () {
        $('#NewCustomerCreateModal').modal('show');

    });




   

  

}]);