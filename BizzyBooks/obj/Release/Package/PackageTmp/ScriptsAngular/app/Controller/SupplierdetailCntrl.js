myApp.controller('SupplierdetailCntrl', ['$scope', '$http', '$timeout', '$rootScope', '$state', function ($scope, $http, $timeout, $rootScope, $state) {

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



}]);