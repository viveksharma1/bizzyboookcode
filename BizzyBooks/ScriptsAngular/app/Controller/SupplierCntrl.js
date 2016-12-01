myApp.controller('SupplierCntrl', ['$scope', '$http', '$timeout', '$rootScope','myService', '$state' ,function ($scope, $http, $timeout,  $rootScope, myService, $state) {
    $(".my a").click(function (e) {
        e.preventDefault();
    });

   

    $scope.suppliers = [];
   

    var url = "http://localhost:4000/api/supplierscounts";
    $scope.supplierscount = [];
    $http.get(url).then(function (response) {
        $scope.supplierscount = response.data;

        console.log($scope.supplierscount[0].companyName);
    });
    $http.get(url + "/count").then(function (response) {

        $scope.suppliersCount = response.data;
    });

    $scope.suppliersCounts1 = 'fetgfdghfdgfdgfdtewtew';
    $http.get("http://localhost:4000/api/enquiries" + "/count", { headers: { 'tokan': $rootScope.tok } }).then(function (response) {

        $scope.enquiryCount = response.data;
    });
    

    $('#PurchaseOrderTable').hide();
    $('#OpenBill').hide();
    $('#PaidBillTable').hide();
    $('#EnquiryTable').hide();
   
    $scope.SuppliersTablebtn = function () {
        $('#example').show();
        $('#PurchaseOrderTable').hide();
        $('#EnquiryTable').hide();
        $('#OpenBill').hide();
        $('#PaidBillTable').hide();
    },

    $scope.PurchaseOrderTable = function () {
        $('#example').hide();
        $('#PurchaseOrderTable').show();
        $('#EnquiryTable').hide();
        $('#OpenBill').hide();
        $('#PaidBillTable').hide();
       
    },

    $scope.OpenBillTable = function () {
        $('#OpenBill').show();
        $('#PurchaseOrderTable').hide();
        $('#EnquiryTable').hide();
        $('#PaidBillTable').hide();
        $('#example').hide();
    },

    $scope.PaidBillbtn = function () {
        $('#PaidBillTable').show();
        $('#OpenBill').hide();
        $('#PurchaseOrderTable').hide();
        $('#EnquiryTable').hide();
        $('#example').hide();

    },

    $scope.EnquiryTablebtn = function () {
        $('#PaidBillTable').hide();
        $('#OpenBill').hide();
        $('#PurchaseOrderTable').hide();
        $('#EnquiryTable').show();
        $('#example').hide();

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

   
    $scope.createNewSupplier = function () {
       
        var data = {

            title: $scope.title,
            firstName: $scope.firstName,
            middleName: $scope.middleName,
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
                  terms: $scope.terme,
                  deliveryMethod: $scope.deliveryMethod,
                  openingBalance: $scope.openingBalance,
                  asOf: $scope.asOf



              }
            ],
            notes: $scope.notes

        }
        var data1 = {

            companyName: $scope.company,
            email: $scope.email,
            po: 0,
            enquiry: 0,
            openBill:0

        }
        if (!data.email=='') {
            var webService = 'suppliers';
            var webService1 = 'supplierscounts';

            myService.postSuppliers(webService, data).then(function (data) {
                console.log(data);
            });

            myService.postSuppliers(webService1, data1).then(function (data) {
                console.log(data);
            });

            $scope.supplierscount.push(data1);


   $scope.middleName = null,
   $scope.suffix = null,
   $scope.email = null,
   $scope.company = null,
   $scope.phone = null,
   $scope.mobile = null,
   $scope.fax = null,
   $scope.displayName = null,
   $scope.other = null,
   $scope.website = null,

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

    var url = "http://localhost:4000/api/enquiries";
    $scope.enquiries = [];
    $http.get(url).then(function (response) {
        $scope.enquiries = response.data;

        console.log($scope.enquiries);
    });
  



   
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

    //Get PurchaseOrder Table 

    var url = "http://localhost:4000/api/purchaseOrders";
    $scope.purchaseOrder = [];
    $http.get(url +"?filter[fields][supliersName]=true&filter[fields][poDate]=true&filter[fields][poDueDate]=true&filter[fields][poNo]=true&filter[fields][amount]=true").then(function (response) {
        $scope.purchaseOrder = response.data;

        console.log($scope.purchaseOrder);
    });





}]);