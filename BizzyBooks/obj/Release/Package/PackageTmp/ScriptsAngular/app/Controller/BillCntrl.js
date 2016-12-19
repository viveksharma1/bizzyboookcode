myApp.controller('BillCntrl', ['$scope', '$http', '$timeout','$stateParams', '$rootScope', '$state', 'config', function ($scope, $http, $timeout,$stateParams, $rootScope, $state, config) {

    $(".my a").click(function (e) {
        e.preventDefault();
    });

    $scope.goBack = function () {
        window.history.back();
    },
     $scope.popuclose = function () {
         $('#form-popoverPopup').hide();
     },

     $('#BillDate').datepicker("setDate", new Date());

    $('#DueDate').datepicker("setDate", new Date());

    var files, res;

    document.getElementById("uploadBtn").onchange = function (e) {
        e.preventDefault();

    };
    document.getElementById('uploadBtn').onchange = uploadOnChange;

    function uploadOnChange() {
        var filename = this.value;
        var lastIndex = filename.lastIndexOf("\\");
        if (lastIndex >= 0) {
            filename = filename.substring(lastIndex + 1);
        }
        files = $('#uploadBtn')[0].files;
        res = Array.prototype.slice.call(files);
        for (var i = 0; i < files.length; i++) {
            $("#upload_prev").append("<span>" + files[i].name + "&nbsp;&nbsp;<b>X</b></span>");
        }

    }

    $(document).on("click", "#upload_prev span", function () {
        res.splice($(this).index(), 1);
        $(this).remove();
        console.log(res);

    });

    $('.Countedit td').click(function () {
        $(this).closest('tr').find('.Count').hide();
        $(this).closest('tr').find('.Count2').show();

    });

    $('.savetr').click(function () {
        $(this).closest('tr').find('.Count').show();
        $(this).closest('tr').find('.Count2').hide();

    });


    $scope.AddAccountTableLine = function () {
        $('#AccountTableLine tr:last').after('<tr class="Countedit"><td class="text-right Count" style="width:50px" data-field="Count">&nbsp;</td><td class="Count" data-field="Account">&nbsp;</td><td class="Count" data-field="Description">&nbsp;</td><td class="text-right Count" data-field="Amount">&nbsp;</td><td class="text-right Count"><a> <i class="fa fa-pencil" style="font-size:16px"></i></a></td><td class="text-right Count2" style="width:50px" data-field="Count"><input type="text" class="form-control" value="4" /></td><td class="Count2" data-field="Account"><ui-tree-Account model="model"></ui-tree-Account></td><td class="Count2" data-field="Description"><input type="text" class="form-control" /></td><td class="text-right Count2" data-field="Amount"><input type="text" class="form-control" /></td><td class="text-right Count2 savetr"><a> <i class="fa fa-save" style="font-size:16px"></i></a></td></tr>');
    },

     $scope.AddTableLine = function () {
         $('#ItemTable tr:last').after('<tr class="Countedit"><td class="Count">&nbsp;</td><td class="Count" style="text-align:center;">&nbsp;</td><td class="Count" style="text-align:center">&nbsp;</td><td class="Count" style="text-align:center">&nbsp;</td><td class="Count" style="text-align:center">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="text-right Count"><a class="edit" title="Edit"> <i class="fa fa-pencil" style="font-size:16px"></i></a></td><td class="Count2"><ui-tree-select model="model"></ui-tree-select></td><td class="Count2" style="text-align:center;"><input type="text" class="form-control" value="" /></td><td class="Count2" style="text-align:center;"><input type="text" class="form-control text-center" value="" /> </td><td class="Count2" style="text-align:center;"><input type="text" class="form-control text-center" value="" /></td><td class="Count2" style="text-align:center;"><input type="text" class="form-control text-center" value="" /></td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /></td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /> </td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /> </td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /> </td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /> </td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /> </td><td class="text-right Count2 savetr"><a> <i class="fa fa-save" style="font-size:16px"></i></a></td></tr>');
     }





    $scope.add = function () {

        $('#form-popoverPopup').show();


    };



    
    $scope.no = $stateParams.billNo
    $scope.role;
    $scope.amount = "00,00"
    $scope.admin = localStorage['adminrole'];

    //get Po List

    $http.get(config.api + "transactions" + "?filter[where][no]=" + $scope.no).then(function (response) {
       
        $scope.polist = response.data;
        $scope.supplier = $scope.polist[0].supliersName;
        $scope.billtable = $scope.polist[0].itemDetail;
        $scope.amount = $scope.polist[0].amount;
        $scope.email = $scope.polist[0].email;

    });

    // po count 

    $http.get(config.api + "transactions" + "/count" + "?where[ordertype]=" + "BILL").then(function (response) {

        $scope.poCount = response.data.count;
        $scope.billNo = 'BIll' + $scope.poCount;
    });


    // add item po to bill

    $scope.addtoBill = function (index) {


        $scope.billtable = $scope.polist[index].itemDetail;
        $scope.amount = $scope.polist[index].amount;


    }

    //get selected name and email of selected supplier
    $scope.$watch('sup', function () {
       
        
        if ($scope.sup != undefined) {

            $scope.supplier = $scope.sup;

            $http.get(config.api + 'suppliers' + '?filter[where][company]=' + $scope.supplier)
        .success(function (data) {
            $scope.supEmail = data;
            $scope.email = data[0].email;

        });

            $http.get(config.api + 'transactions' + '?filter[where][supliersName]=' + $scope.supplier + "&[filter][where][ordertype]=po")
       .success(function (data) {
           $scope.polist = data;


       });

        }
       
       
    });


    //get suppliers 

    $http.get(config.api + 'suppliers' + '?filter[fields][company]=true')
          .success(function (data) {
              $scope.supliers = data;
             
          });
    // save suppliers 
    $scope.saveBill = function (index) {
        
        var data = {

            supliersName: $scope.supplier,
            email: $scope.email,
            role: localStorage['adminrole'],
            currency: $scope.currency,
            date: $scope.billDate,
            billDueDate: $scope.billDueDate,
            ordertype: "BILL",
            no: $scope.billNo,
                
            itemDetail: $scope.billtable,
            amount: $scope.amount,
            balance: $scope.amount
                
        }
        $http.post(config.api + "transactions", data).then(function (response) {
            window.alert(" bill  Created")
        });
    };




    

   


}]);