myApp.controller('InventoryCntrl', ['$scope', '$http', '$timeout', '$rootScope', '$state', function ($scope, $http, $timeout, $rootScope, $state) {
    $(".my a").click(function (e) {
        e.preventDefault();
    });


    $('#InventoryFilterDiv').hide();

    $('#InventoryFilter').click(function (e) {
        $('#InventoryFilterDiv').toggle();
    });



   
    $scope.GRNDetail = function () {
        $('#GRNDetailDiv').slideDown();
    },

     $scope.invoiceclose = function () {
         $('.FlexPopup').slideUp();
     },

    $('.Statusfilter > li').click(function () {
        var $toggle = $(this).parent().siblings('.dropdown-toggle');
        $toggle.html("" + $(this).text() + "<i class=\"fa fa-sort pull-right\" style=\"margin-top:3px\"></i>")
        $('#SearchFilterDiv').show();

    });


    $('.Typefilter > li').click(function () {
        var $toggle = $(this).parent().siblings('.dropdown-toggle');
        $toggle.html("" + $(this).text() + "<i class=\"fa fa-sort pull-right\" style=\"margin-top:3px\"></i>")
        $('#SearchFilterDiv').show();

    });

    $('.Categoryfilter > li').click(function () {
        var $toggle = $(this).parent().siblings('.dropdown-toggle');
        $toggle.html("" + $(this).text() + "<i class=\"fa fa-sort pull-right\" style=\"margin-top:3px\"></i>")
        $('#SearchFilterDiv').show();

    });

}]);