myApp.controller('SupplierCntrl', ['$scope', '$http', '$timeout', '$rootScope', 'myService', '$state', 'config', '$location','DTOptionsBuilder', 'DTDefaultOptions', function ($scope, $http, $timeout, $rootScope, myService, $state, config, $location, DTOptionsBuilder, DTDefaultOptions) {
    $(".my a").click(function (e) {
        e.preventDefault();
    });

   
    $(".sk-wave").show()
    $('#PurchaseOrderTable').hide();
    $('#OpenBill').hide();
    $('#PaidBillTable').hide();
    $('#EnquiryTable').hide();

    $scope.SuppliersTablebtn = function () {
        $(".sk-wave").show()
        $scope.suppliers;
        $http.get(config.api + "suppliers").then(function (response) {
            $(".sk-wave").hide()
            // $scope.suppliers = [];
            $scope.suppliers = response.data;
            console.log($scope.suppliers);
        });

        $('#example').show();
        $('#PurchaseOrderTable').hide();
        $('#EnquiryTable').hide();
        $('#OpenBill').hide();
        $('#PaidBillTable').hide();
    },

    $scope.PurchaseOrderTable = function () {
       
        $(".sk-wave").show()
        $scope.purchaseOrder;
        $http.get(config.api + "transactions" + "?filter[where][ordertype]=po" + "&filter[fields][supliersName]=true&filter[fields][date]=true&filter[fields][billDueDate]=true&filter[fields][no]=true&filter[fields][amount]=true").then(function (response) {
            $(".sk-wave").hide()
            // $scope.purchaseOrder = [];
            $scope.purchaseOrder = response.data;


        });
        $('#example').hide();
        $('#PurchaseOrderTable').show();
        $('#EnquiryTable').hide();
        $('#OpenBill').hide();
        $('#PaidBillTable').hide();

    },

    $scope.OpenBillTable = function () {

        $(".sk-wave").show()
       
        $scope.bill;
        $http.get(config.api + "transactions" + "?filter[where][ordertype]=" + "bill").then(function (response) {
            // $scope.enquiries = [];
             $(".sk-wave").hide()
            $scope.bill = response.data;


        });
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
        $(".sk-wave").show()
        $scope.enquiries = [];
        $http.get(config.api + "transactions" + "?filter[where][ordertype]=" + "enquiry").then(function (response) {
            // $scope.enquiries = [];
            $(".sk-wave").hide()
            $scope.enquiries = response.data;


        });

        $('#PaidBillTable').hide();
        $('#OpenBill').hide();
        $('#PurchaseOrderTable').hide();
        $('#EnquiryTable').show();
        $('#example').hide();

    }




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

    //

    $scope.viewPo = function (data) {

        $location.path('#/Customer/PdfView' + data);



    }

    // HTML to PDF file by Harpal Singh
    $scope.generatePDF = function ()
    {
        kendo.drawing.drawDOM($("#upperdivId")).then(function (group)
        {
            kendo.drawing.pdf.saveAs(group, "Converted PDF.pdf");
        });
    }
   
    //get total PO Amount

    $http.post(config.api + "transactions" + "/totalpoAmount", { headers: { 'tokan': localStorage['token'] } }).then(function (response) {


        $scope.totalpoAmount = response.data;

        console.log($scope.totalpoAmount)


    });


    //get suppliers count


    $http.get(config.api + "suppliers" + "/count").then(function (response) {
        

        $scope.suppliersCount = response.data;
    });

    //get bill count
    $http.get(config.api + "transactions" + "/count" + "?where[ordertype]=" + "bill").then(function (response) {


        $scope.billCount = response.data;
    });

    // Get enquiry count

    $http.get(config.api + "transactions"+ "/count"+ "?where[ordertype]="+"enquiry").then(function (response) {

        $scope.enquiryCount = response.data;
    });

    //get purchase order count 

    $http.get(config.api + "transactions" + "/count" + "?where[ordertype]=" + "po").then(function (response) {

        $scope.purchaseCount = response.data;
    });

    //get suppliers data 
   
    $http.get(config.api + "suppliers").then(function (response) {
        $(".sk-wave").hide()
        // $scope.suppliers = [];
        $scope.suppliers = response.data;
       
    });
    //get Enquiry List table
   
   

    //Get PurchaseOrder Table 


   
    

    //create New Suppliers

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

            company: $scope.company,
            email: $scope.email,
            mobile: $scope.mobile,
            paymentInfo: [
              {
              
                  openingBalance: $scope.openingBalance

              }
            ]

        }
        if (!data.email=='') {
            var webService = 'suppliers';
        

            myService.postSuppliers(webService, data).then(function (data) {
                console.log(data);
            });

           

            $scope.suppliers.push(data1);

   
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

  




}]);