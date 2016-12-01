myApp.controller('SupplierdetailCntrl', ['$scope', '$http', '$timeout','myService', '$rootScope','$stateParams', '$state', function ($scope, $http, $timeout, $rootScope,$myService, $stateParams,$state) {

    $(".my a").click(function (e) {
        e.preventDefault();
    });



    //Get the height of the first item
    $('.Tabmask').css({ 'height': $('#panel-1').height() });

    //Calculate the total width - sum of all sub-panels width
    //Width is generated according to the width of #mask * total of sub-panels
    $('.panelbox').width(parseInt($('.Tabmask').width() * $('.panelbox section').length));

    //Set the sub-panel width according to the #mask width (width of #mask and sub-panel must be same)
    $('.panelbox section').width($('.Tabmask').width());

    //Get all the links with rel as panel
    $('a[rel=panel]').click(function () {

        //Get the height of the sub-panel
        var panelheight = $($(this).attr('href')).height();

        //Set class for the selected item
        $('a[rel=panel]').removeClass('selected');
        $(this).addClass('selected');

        //Resize the height
        $('.Tabmask').animate({ 'height': panelheight }, { queue: false, duration: 1000 });

        //Scroll to the correct panel, the panel id is grabbed from the href attribute of the anchor
        $('.Tabmask').scrollTo($(this).attr('href'), 800);

        //Discard the link default behavior
        return false;
    });


    $scope.menutoggle = function () {
        $("#wrapper").toggleClass("toggled");
    };

  

    $scope.menuUp = function (e) {
        $(".statusBody").slideToggle("slow", function () {
            // Animation complete.
        })

        $('#menuUp i').toggleClass("fa-chevron-down fa-chevron-up")
        e.preventDefault();
    };



    $scope.NewCustomerCreate = function () {
        $('#NewCustomerCreateModal').modal('show');
       
    }


    //$scope.transaction = [];

    $scope.transaction = [
        {

            DATE: '23/07/2016',
            TYPE: 'PO',
            NO: '1001',
            DUEDATE: '22/08/2016',
            BALANCE: 'Rs0.00',
            TOTAL: 'Rs0.00',
            STATUS: 'Paid',
            ACTION: 'Print'
        },
         {

             DATE: '23/07/2016',
             TYPE: 'Invoice',
             NO: '1001',
             DUEDATE: '22/08/2016',
             BALANCE: 'Rs0.00',
             TOTAL: 'Rs0.00',
             STATUS: 'Paid',
             ACTION: 'Print'
         },
          {

              DATE: '23/07/2016',
              TYPE: 'Bill',
              NO: '1001',
              DUEDATE: '22/08/2016',
              BALANCE: 'Rs0.00',
              TOTAL: 'Rs0.00',
              STATUS: 'Unpaid',
              ACTION: 'Print'
          }

    ];
    $scope.suppliers = [];
    console.log($stateParams.contactId);
    $scope.company = $stateParams.contactId;
    var url = "http://localhost:4000/api/suppliers";
    $scope.supplierscount = [];
    $http.get(url + "?filter[where][email] =" + $scope.company).then(function (response) {
        $scope.suppliers = response.data;
       console.log(response);
        
   $scope.middleName=$scope.suppliers[0].middleName,
   $scope.suffix= $scope.suppliers[0].suffix,
   $scope.email= $scope.suppliers[0].email,
   $scope.company =$scope.suppliers[0].company,
   $scope.phone = $scope.suppliers[0].phone,
   $scope.mobile = $scope.suppliers[0].mobile,
   $scope.fax = $scope.suppliers[0].fax,
   $scope.displayName = $scope.suppliers[0].displayName,
   $scope.other =   $scope.suppliers[0].other,
   $scope.website = $scope.suppliers[0].website,
   
         $scope.street =  $scope.suppliers[0].billingAddress[0].street ,
         $scope.city = $scope.suppliers[0].billingAddress[0].city,
         $scope.state = $scope.suppliers[0].billingAddress[0].state,
         $scope.postalCode =  $scope.suppliers[0].billingAddress[0].postalCode,
    
  
         $scope.street1 =   $scope.suppliers[0].shippingAddress[0].street,
         $scope.city1 = $scope.suppliers[0].shippingAddress[1].city,
         $scope.state1 = $scope.suppliers[0].shippingAddress[1].state,
         $scope.postalCode1 =   $scope.suppliers[0].shippingAddress[1].postalCode,
   
  
         $scope.taxRegNo =   $scope.suppliers[0].taxInfo[0].taxRegNo,
         $scope.cstReg =  $scope.suppliers[0].taxInfo[0].cstRegNo,
         $scope.panNo =  $scope.suppliers[0].taxInfo[0].panNo,


   
         $scope.paymentMethod = $scope.suppliers[0].paymentInfo[0].paymentMethod,
         $scope.terme =  $scope.suppliers[0].paymentInfo[0].terms,
         $scope.deliveryMethod = $scope.suppliers[0].paymentInfo[0].deliveryMethod,
         $scope.openingBalance = $scope.suppliers[0].paymentInfo[0].openingBalance,
         $scope.asOf = $scope.suppliers[0].paymentInfo[0].asOf,



   
        $scope.notes = $scope.suppliers[0].notes




    });

   

    $scope.updateSupplier = function (supplier) {

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
            openBill: 0

        }

        var webService = 'suppliers';
        var webService1 = 'supplierscounts';

        $http.post(url + "/update" + "?[where][email]=" + supplier, data).then(function (response) {
           


            console.log(supplier);
            console.log(response.data);
        });
        var data1 = {

            companyName: $scope.company,
            email: $scope.email,
          
        }

        var webService = 'suppliers';
        var webService1 = 'supplierscounts';

      
        $http.post("http://localhost:4000/api/supplierscounts" + "/update" + "?[where][email]=" + supplier, data1).then(function (response) {



            console.log(supplier);
            console.log(response.data);
        });

        $scope.supplierscount.push(data1);




    };

}]);