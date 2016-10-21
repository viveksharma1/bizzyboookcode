myApp.controller('CreateInventoryCntrl', ['$scope', '$http', '$timeout', '$rootScope', '$state', function ($scope, $http, $timeout, $rootScope, $state) {
    $(".my a").click(function (e) {
        e.preventDefault();
    });

    $scope.goBack = function () {
        window.history.back();
    },
     $scope.popuclose = function () {
         $('#form-popoverPopup').hide();
     },

     $scope.popuclose = function () {
         $('#form-popoverPopup').hide();

     },

     $(".RemoveTR").click(function (event) {
         $(this).closest("tr").remove();
     });
}]);