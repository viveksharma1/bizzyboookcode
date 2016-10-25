myApp.controller('SupplierCntrl', ['$scope', '$http', '$timeout', '$rootScope', '$state', function ($scope, $http, $timeout, $rootScope, $state) {
    $(".my a").click(function (e) {
        e.preventDefault();
    });



    $('#PurchaseOrderTable').hide();
    $('#OpenBill').hide();
    $('#PaidBillTable').hide();
    $('#EnquiryTable').hide();

    $scope.SuppliersTablebtn = function () {
        $('#SuppliersTable').show();
        $('#PurchaseOrderTable').hide();
        $('#EnquiryTable').hide();
        $('#OpenBill').hide();
        $('#PaidBillTable').hide();
    },

    $scope.PurchaseOrderTable = function () {
        $('#PurchaseOrderTable').show();
        $('#EnquiryTable').hide();
        $('#OpenBill').hide();
        $('#PaidBillTable').hide();
        $('#SuppliersTable').hide();
    },

    $scope.OpenBillTable = function () {
        $('#OpenBill').show();
        $('#PurchaseOrderTable').hide();
        $('#EnquiryTable').hide();
        $('#PaidBillTable').hide();
        $('#SuppliersTable').hide();
    },

    $scope.PaidBillbtn = function () {
        $('#PaidBillTable').show();
        $('#OpenBill').hide();
        $('#PurchaseOrderTable').hide();
        $('#EnquiryTable').hide();
        $('#SuppliersTable').hide();

    },

    $scope.EnquiryTablebtn = function () {
        $('#PaidBillTable').hide();
        $('#OpenBill').hide();
        $('#PurchaseOrderTable').hide();
        $('#EnquiryTable').show();
        $('#SuppliersTable').hide();

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
            email: 'Paynna@gmail.com',
            enquiryNo: '23',
            purchageOrder: 'System Architect',
            OpenBill: 'Bill 243',
            action: 'Make Payment'
        },

        {
            suppliers: 'jindal Stainless Steel',
            email: 'jindal@gmail.com',
            enquiryNo: '05',
            purchageOrder: 'System Architect',
            OpenBill: 'Bill 253',
            action: 'Make Payment'
        },
        {
            suppliers: 'Shenzhen Import & Export',
            email: 'Shenzhen@gmail.com',
            enquiryNo: '05',
            purchageOrder: 'System Architect',
            OpenBill: 'Bill 244',
            action: 'Make Payment'
        },

        {
            suppliers: 'Phoenix Imports and Exports ',
            email: 'Phoenix@gmail.com',
            enquiryNo: '01',
            purchageOrder: 'System Architect',
            OpenBill: 'Bill 249',
            action: 'Make Payment'
        }

    ];

    $scope.purchageOrder = [];


    $scope.purchageOrder = [

        {
            ponumber: '47598479',
            podt: '18/Oct/2016',
            duedt: '22/Oct/2016',
            suppliers: 'Phoenix Imports and Exports ',
            poAmount: 'Rs0.00',
            action: 'Create Bill'


        },
        {
            ponumber: '47598479',
            podt: '18/Oct/2016',
            duedt: '22/Oct/2016',
            suppliers: 'jindal Stainless Steel',
            poAmount: 'Rs0.00',
            action: 'Create Bill'


        },
        {
            ponumber: '47598479',
            podt: '18/Oct/2016',
            duedt: '22/Oct/2016',
            suppliers: 'Shenzhen Import & Export',
            poAmount: 'Rs0.00',
            action: 'Create Bill'


        },
        {
            ponumber: '47598479',
            podt: '18/Oct/2016',
            duedt: '22/Oct/2016',
            suppliers: 'Paynna ',
            poAmount: 'Rs0.00',
            action: 'Create Bill'


        }
    ];


    $scope.Enquiries = [];


    $scope.Enquiries = [

        {
            enquiryNo: '2323',
            enquirydate: '18/Oct/2016',
            enquiryduedt: '22/Oct/2016',
            suppliers: 'System Architect',
            action: 'Edit'


        },
        {
            enquiryNo: '2329',
            enquirydate: '10/Oct/2016',
            enquiryduedt: '15/Oct/2016',
            suppliers: 'Paynna',
            action: 'Edit'


        },
        {
            enquiryNo: '2332',
            enquirydate: '1/Oct/2016',
            enquiryduedt: '10/Oct/2016',
            suppliers: 'Shenzhen Import & Export',
            action: 'Edit'


        },
        {
            enquiryNo: '2335',
            enquirydate: '18/Sep/2016',
            enquiryduedt: '22/Sep/2016',
            suppliers: 'Jindal Stainless Steel',
            action: 'Edit'


        }
    ];


    $scope.Bill = [];


    $scope.Bill = [

        {
            suppliers: 'System Architect',
            email: 'System@gmail.com',
            billno: '23424',
            bilamt: 'Rs0',
            balamt: 'Rs0',
            action: 'Make payment'


        },
        {
            suppliers: 'Paynna',
            email: 'Paynna@gmail.com',
            billno: '23429',
            bilamt: 'Rs0',
            balamt: 'Rs0',
            action: 'Make payment'


        },
        {
            suppliers: 'Shenzhen Import & Export',
            email: 'Shenzhen@gmail.com',
            billno: '4234',
            bilamt: 'Rs0',
            balamt: 'Rs0',
            action: 'Make payment'


        },
        {
            suppliers: 'Jindal Stainless Steel',
            email: 'Jindal@gmail.com',
            billno: '34534',
            bilamt: 'Rs0',
            balamt: 'Rs0',
            action: 'Make payment'


        }
    ];





}]);