myApp.controller('CustomerdetailCntrl', ['$scope', '$http', '$timeout', '$rootScope', '$state', 'config', function ($scope, $http, $timeout, $rootScope, $state, config) {


    var CustomerId = localStorage.CustomerId;
    $scope.CompanyList = JSON.parse(localStorage.comobj);
    $scope.CustomerName = localStorage.customerName;
    $scope.CompanyName = localStorage.ChangeCompanyName;
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







    $scope.EditViewPopUp = function () {
        var url = config.api + "customers/" + CustomerId + "";
        $http.get(url).success(function (response) {
            $scope.title = response.title;
            $scope.firstName = response.firstName;
            $scope.lastName = response.lastName;
            $scope.middleName = response.middleName;
            $scope.street = response.billingAddress[0].street;
            $scope.city = response.billingAddress[0].city;
            $scope.state = response.billingAddress[0].state;
            $scope.country = response.billingAddress[0].country;
            $scope.postalCode = response.billingAddress[0].postalCode;
            $scope.street1 = response.shippingAddress[0].street;
            $scope.city1 = response.shippingAddress[0].city;
            $scope.state1 = response.shippingAddress[0].state;
            $scope.country1 = response.shippingAddress[0].country;
            $scope.postalCode1 = response.shippingAddress[0].postalCode;
            $scope.notes = response.notes;
            $scope.deliveryMethod = response.paymentInfo[0].deliveryMethod;
            $scope.paymentMethod = response.paymentInfo[0].paymentMethod;
            $scope.openingBalance = response.paymentInfo[0].openingBalance;
            $scope.terms = response.paymentInfo[0].terms;
            $scope.taxRegNo = response.taxInfo[0].taxRegNo;
            $scope.cstRegNo = response.taxInfo[0].cstRegNo;
            $scope.panNo = response.taxInfo[0].panNo;
            $scope.website = response.website;
            $scope.other = response.other;
            $scope.displayName = response.displayName;
            $scope.fax = response.fax;
            $scope.mobile = response.mobile;
            $scope.phone = response.phone;
            $scope.company = response.company;
            $scope.email = response.email;
            $scope.suffix = response.suffix;

        })
        $('#NewCustomerCreateModal').modal('show');

    }
    $scope.UpdateCustomerInfo = function () {
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
            notes: $scope.notes,
            id: CustomerId

        }

        var url = config.api + "customers/" + CustomerId + "";
        $http.put(url, data).success(function (response) {
            $scope.CustomerName = response.firstName;

        })
        $('#NewCustomerCreateModal').modal('hide');

    }




}]);