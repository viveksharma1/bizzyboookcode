var Domain = "http://localhost:4000/api/";
var Id = "";
var recalledBlocked = "";
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

    //Send Get Request for all Inventory list  Data
    var url = "" + Domain + "Inventories";
    $http.get(url).then(function (response) {
        $scope.InventoryList = response.data;
    });

    //Create New Inventory and update
    $scope.createNewInventory = function () {


        if (Id == "") {

            var data = {

                Remarks: $scope.Remarks,
                ContainerNOS: $scope.ContainerNOS,
                ParticularSheets: $scope.ParticularSheets,
                Grade: $scope.grade,
                Finish: $scope.finish,
                Thickness: $scope.Thickness,
                Width: $scope.width,
                Length: $scope.lenght,
                NetWeight: $scope.newweight,
                GrossWeight: $scope.gweight,
                StockCount: $scope.sheetsnos,
                Status: "Open"

            }
            if ($scope.ContainerNOS == null) {

                alert("Please Enter Container NOS.")
                return;
            }
            var url = "" + Domain + "Inventories";
            $http.post(url, data).success(function (response) {
                if (response != null) {
                    var url = "" + Domain + "/Inventories";

                    $http.get(url).then(function (response) {
                        $scope.InventoryList = response.data;
                    });

                    $scope.Remarks = null;
                    $scope.ContainerNOS = null;
                    $scope.ParticularSheets = null;
                    $scope.grade = null;
                    $scope.finish = null;
                    $scope.Thickness = null;
                    $scope.width = null;
                    $scope.lenght = null;
                    $scope.newweight = null;
                    $scope.gweight = null;
                    $scope.sheetsnos = null;
                    Id = "";

                }

            })
        }
        else {
            var data = {
                id: Id,
                Remarks: $scope.Remarks,
                ContainerNOS: $scope.ContainerNOS,
                ParticularSheets: $scope.ParticularSheets,
                Grade: $scope.grade,
                Finish: $scope.finish,
                Thickness: $scope.Thickness,
                Width: $scope.width,
                Length: $scope.lenght,
                NetWeight: $scope.newweight,
                GrossWeight: $scope.gweight,
                StockCount: $scope.sheetsnos,
                Status: "Open"

            }
            var url = "" + Domain + "Inventories/" + Id + "";
            $http.put(url, data).success(function (response) {
                if (response != null) {
                    var url = "" + Domain + "Inventories";

                    $http.get(url).then(function (response) {
                        $scope.InventoryList = response.data;
                    });

                    $scope.Remarks = null;
                    $scope.ContainerNOS = null;
                    $scope.ParticularSheets = null;
                    $scope.grade = null;
                    $scope.finish = null;
                    $scope.Thickness = null;
                    $scope.width = null;
                    $scope.lenght = null;
                    $scope.newweight = null;
                    $scope.gweight = null;
                    $scope.sheetsnos = null;
                    Id = "";

                }

            })
        }





    };

    $scope.getId = function (id, Remarks, ContainerNOS, ParticularSheets, ParticularSheets, Grade, Finish, Thickness, Width, Length, NetWeight, GrossWeight, SheetsNOS) {
        if (recalledBlocked == "") {
            Id = id;
            $scope.Remarks = Remarks;
            $scope.ContainerNOS = ContainerNOS;
            $scope.ParticularSheets = ParticularSheets;
            $scope.grade = Grade;
            $scope.finish = Finish;
            $scope.Thickness = Thickness;
            $scope.width = Width;
            $scope.lenght = Length;
            $scope.newweight = NetWeight;
            $scope.gweight = GrossWeight;
            $scope.sheetsnos = SheetsNOS;
        }
    }

    $scope.deleteRecord = function (id) {
        recalledBlocked = id;
        var url = "" + Domain + "Inventories/" + id + ""
        $http.delete(url).success(function (response) {
            if (response != null) {
                var url = "" + Domain + "Inventories";

                $http.get(url).then(function (response) {
                    $scope.InventoryList = response.data;
                });
                recalledBlocked = "";
                $scope.Remarks = null;
                $scope.ContainerNOS = null;
                $scope.ParticularSheets = null;
                $scope.grade = null;
                $scope.finish = null;
                $scope.Thickness = null;
                $scope.width = null;
                $scope.lenght = null;
                $scope.newweight = null;
                $scope.gweight = null;
                $scope.sheetsnos = null;
            }
        })



    }

}]);