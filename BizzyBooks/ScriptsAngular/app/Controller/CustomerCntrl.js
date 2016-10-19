myApp.controller('CustomerCntrl', ['$scope', '$http', '$timeout', '$rootScope', '$state', function ($scope, $http, $timeout, $rootScope, $state) {

    $(".my a").click(function (e) {
        e.preventDefault();
    });

 

   

    $scope.menuUp = function (e) {
        $(".statusBody").slideToggle("slow", function () {
            // Animation complete.
        })

        $('#menuUp i').toggleClass("fa-chevron-down fa-chevron-up")
        e.preventDefault();
    };


    $scope.customer = [];

    $scope.customer = [

        {
            customer: 'vijay',
            companyName: 'vijay Ishpat',
            contactNo: '99815435',
            balance: '55,5566'
      },

       {
           customer: 'vijay',
           companyName: 'vijay Ishpat',
           contactNo: '99815435',
           balance: "55,5566"

       },
       {
           customer: 'vijay',
           companyName: 'vijay Ishpat',
           contactNo: '99815435',
           balance: '55,5566'
       }
    ]


    console.log($scope.customer);


    $('#NewCustomerCreate').click(function () {
      $('#NewCustomerCreateModal').modal('show');

    });


    
}]);