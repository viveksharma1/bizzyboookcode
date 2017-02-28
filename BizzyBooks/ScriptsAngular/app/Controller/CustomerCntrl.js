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

    $scope.totalCustomerbtn = function () {

        $('#overdueInvoiceTable').hide();
        $('#paidInvoiceTable').hide();
        $('#example').show();
        $('#openInvoiceTable').hide();
    },



   $scope.overDueInvoicebtn = function (status) {

       $('#overdueInvoiceTable').show();
       $('#paidInvoiceTable').hide();
       $('#example').hide();
       $('#openInvoiceTable').hide();
   },

   $scope.paidInvoicebtn = function () {
       $('#overdueInvoiceTable').hide();
       $('#paidInvoiceTable').show();
       $('#example').hide();
       $('#openInvoiceTable').hide();

   },

   $scope.openInvoicebtn = function (status) {
      
       $('#overdueInvoiceTable').hide();
       $('#paidInvoiceTable').hide();
       $('#example').hide();
       $('#openInvoiceTable').show();
       $scope.getTransaction();

   }

    $('#overdueInvoiceTable').hide();
    $('#paidInvoiceTable').hide();
    $('#example').show();
    $('#openInvoiceTable').hide();

   

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

    
    $scope.UpdateCustomerInfo = function (id, Name) {
        localStorage.CustomerId = id;
        localStorage.customerName = Name;

    }

    $scope.GetId_Customer = function (id) {
        localStorage.CustomerId_Invoice = id;


    }

    $scope.createNewSupplier = function () {

        var data = {

            compCode: localStorage.CompanyId,
            email: $scope.email,
            company: $scope.company,
            phone: $scope.phone,
            mobile: $scope.mobile,
            fax: $scope.fax,
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

            notes: $scope.notes,
            account: {
                compCode: localStorage.CompanyId,
                accountName: $scope.company,
                category: 'Supplier',
                group: 'Sundry Debitor',
                type: 'Current Liability',
                credit: 0,
                debit: 0
            }

        }


        if (!data.email == '') {




            $http.post(config.login + "createCustomer", data).then(function (response) {

            });
            $scope.email = null,
            $scope.company = null,
            $scope.phone = null,
            $scope.mobile = null,
            $scope.fax = null,


                  $scope.street = null,
                  $scope.city = null,
                  $scope.state = null,
                  $scope.postalCode = null,


                  $scope.street1 = null,
                  $scope.city1 = null,
                  $scope.state1 = null,
                  $scope.postalCode1 = null,


                  $scope.taxRegNo = null,
                  $scope.cstReg = null,
                  $scope.panNo = null,



                  $scope.paymentMethod = null,
                  $scope.terme = null,
                  $scope.deliveryMethod = null,
                  $scope.openingBalance = null,
                  $scope.asOf = null,
                  $scope.notes = null
        }
    };


    //get customer data
    $http.get(config.api + "customerTransactions" + "/count").then(function (response) {
        $scope.openInvoiceCount = response.data;
    });
    $http.get(config.api + "customers" + "/count").then(function (response) {
        $scope.customerCount = response.data;
    });

    $scope.getTransaction = function () {

        $http.get(config.api + "customerTransactions").then(function (response) {
            $scope.transactions = response.data;
        });


    }

}]);