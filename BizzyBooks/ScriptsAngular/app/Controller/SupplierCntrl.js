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


    $scope.savechanges = function () {

       

        var newsuppliers = [];

        var newsuppliers = {


            title: $scope.title,
            firstName: $scope.fname,
            mName: $scope.mname,
            lName: $scope.lname,
            suffix: $scope.suffix,
            company: $scope.company,
            displayName: $scope.nameas,
            street: $scope.street,
            city: $scope.city,
            state: $scope.state,
            pCode: $scope.pcode,
            country: $scope.country,
            panNo: $scope.pan,
            applyTds: $scope.tds,
            note: $scope.note,
            email: $scope.email,
            phone: $scope.phone,
            mobile: $scope.mobile,
            fax: $scope.fax,
            other: $scope.other,
            website: $scope.website,
            billingRate: $scope.billrate,
            terms: $scope.terms,
            openingBalance: $scope.openbalance,
            asof: $scope.asof,
            accountNo: $scope.accno,
            taxRegNo: $scope.taxregno,
            effectiveDate: $scope.effectiveDate

        };

        console.log(newsuppliers);




    };



    $scope.suppliers = [];

    $scope.suppliers = [
        {
            suppliers: 'Paynna ',
            enquiryDate: '30/09/2016',
            enquiryNo: '23',
            status: 'Open',
            action: 'Make Payment'
        },

        {
            suppliers: 'jindal Stainless Steel',
            enquiryDate: '1/10/2016',
            enquiryNo: '05',
            status: 'Process',
            action: 'Make Payment'
        },
        {
            suppliers: 'Shenzhen Import & Export',
            enquiryDate: '1/10/2016',
            enquiryNo: '05',
            status: 'Close',
            action: 'Make Payment'
        },

        {
            suppliers: 'Phoenix Imports and Exports ',
            enquiryDate: '6/10/2016',
            enquiryNo: '01',
            status: 'Open',
            action: 'Make Payment'
        }

    ];

    $scope.purchageOrder = [];


    $scope.purchageOrder = [

        {
            suppliers: 'System Architect',
            phone: '9876543212',
            email: 'Edinburgh@gmail.com',
            purchageOrder: 'System Architect',
            poAmount: 'Rs0.00',
            action: 'Make Payment'


        }
    ];


  
  

}]);