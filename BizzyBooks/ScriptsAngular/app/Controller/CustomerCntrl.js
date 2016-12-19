myApp.controller('CustomerCntrl', ['$scope', '$http', '$timeout', '$rootScope', '$state', 'config', function ($scope, $http, $timeout, $rootScope, $state, config) {

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

    var url = config.api + "customers";
    $scope.loading = true;
    $http.get(url).success(function (data) {

        $scope.customerlist = data;
        $scope.loading = false;
    })

    $scope.createNewCustomer = function () {
        if ($scope.firstName == undefined) {
            alert("Please Enter First Name .")
            return;
        }
        if ($scope.company == undefined) {
            alert("Please Enter Company Name .")
            return;
        }
        if ($scope.mobile == undefined) {
            alert("Please Enter Mobile No.")
            return;
        }
        $scope.loading = true;
        var data = {

            title: $scope.title,
            firstName: $scope.firstName,
            middleName: $scope.middleName,
            lastName: $scope.lastName,
            suffix: $scope.suffix,
            email: $scope.email,
            company: $scope.company,
            phone: $scope.phone,
            mobile: $scope.mobile,
            fax: $scope.fax,
            displayName: $scope.displayName,
            other: $scope.other,
            website: $scope.website,
            billingAddress: [
              {
                  street: $scope.street,
                  city: $scope.city,
                  state: $scope.state,
                  postalCode: $scope.postalCode,
                  country: $scope.country
              }
            ],
            shippingAddress: [
              {

                  street: $scope.street1,
                  city: $scope.city1,
                  state: $scope.state1,
                  postalCode: $scope.postalCode1,
                  country: $scope.country1
              }
            ],
            taxInfo: [
              {
                  taxRegNo: $scope.taxRegNo,
                  cstRegNo: $scope.cstRegNo,
                  panNo: $scope.panNo


              }
            ],
            paymentInfo: [
              {
                  paymentMethod: $scope.paymentMethod,
                  terms: $scope.terms,
                  deliveryMethod: $scope.deliveryMethod,
                  openingBalance: $scope.openingBalance,
                  asOf: $scope.asOf



              }
            ],
            notes: $scope.notes

        }

        $http.post(url, data).success(function (response) {
            if (response != null) {
                $('#NewCustomerCreateModal').modal('hide');
                $http.get(url).success(function (res) {
                    $scope.loading = false;
                    $scope.customerlist = res;

                })

            }

            $scope.title = null;
            $scope.firstName = null;
            $scope.lastName = null;
            $scope.middleName = null;
            $scope.state = null;
            $scope.city = null;
            $scope.country = null;
            $scope.postalCode = null;
            $scope.city1 = null;
            $scope.state1 = null;
            $scope.country1 = null;
            $scope.postalCode1 = null;
            $scope.notes = null;
            $scope.paymentMethod = null;
            $scope.asOf = null;
            $scope.openingBalance = null;
            $scope.openingBalance = null;
            $scope.taxRegNo = null;
            $scope.cstRegNo = null;
            $scope.panNo = null;
            $scope.website = null;
            $scope.other = null;
            $scope.displayName = null;
            $scope.fax = null;
            $scope.mobile = null;
            $scope.phone = null;
            $scope.company = null;
            $scope.email = null;
            $scope.suffix = null;


        })

    };

    $scope.UpdateCustomerInfo = function (id, Name) {
        localStorage.CustomerId = id;
        localStorage.customerName = Name;

    }

    $scope.GetId_Customer = function (id) {
        localStorage.CustomerId_Invoice = id;


    }



}]);