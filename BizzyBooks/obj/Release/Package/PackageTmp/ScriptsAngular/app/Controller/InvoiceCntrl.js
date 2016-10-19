myApp.controller('InvoiceCntrl', ['$scope', '$http', '$timeout', '$rootScope', '$state', function ($scope, $http, $timeout, $rootScope, $state) {

    $(".my a").click(function (e) {
        e.preventDefault();
    });

    $scope.goBack = function () {
        window.history.back();
    },
     $scope.popuclose = function () {
         $('#form-popoverPopup').hide();
         $('#form-popoverPopupCustomer').hide();
     },

    $scope.SaveCustomer = function () {
        $('#form-popoverPopupCustomer').hide();
        $('#SaveCustomerModal').modal('show');
    },

     $scope.errorpopup = function () {
         $('#SaveCustomerModal').modal('hide');
         $('#errorpopupModal').modal('show');
     },

     $scope.successmsg = function () {
         $('#successmsgModal').modal('show');
         $('#errorpopupModal').modal('hide');
     },

     $scope.suceesback = function () {
         $('#form-popoverPopupCustomer').show();
     },

     $('#DueDate').datepicker("setDate", new Date());

    $('#InvoiceDate').datepicker("setDate", new Date());

    $('.Discountfilter > li').click(function () {
        var $toggle = $(this).parent().siblings('.dropdown-toggle');
        $toggle.html("" + $(this).text() + "<i class=\"fa fa-sort pull-right\" style=\"margin-top:3px\"></i>")

    });



    $('#NewCustomerCreate').click(function () {
        $('#NewCustomerCreateModal').modal('show');

    });

     
    $('.Countedit td').click(function () {
        $(this).closest('tr').find('.Count').hide();
        $(this).closest('tr').find('.Count2').show();

    });

    $('.savetr').click(function () {
        $(this).closest('tr').find('.Count').show();
        $(this).closest('tr').find('.Count2').hide();

    });


     $scope.AddTableLine = function () {
$('#InvoiceTable tr:last').after('<tr class="Countedit"><td class="text-right Count"></td><td class="Count">&nbsp;</td><td class="Count">&nbsp;</td><td class="text-right Count">&nbsp;</td><td class="text-right Count">&nbsp;</td><td class="text-right Count">&nbsp;</td><td class="text-right Count"><a> <i class="fa fa-pencil" style="font-size:16px"></i></a></td><td class="text-right Count2"><input type="text" class="form-control" style="width:30px" value="" /></td><td class="Count2"><ui-tree-Invoice model="model"></ui-tree-Invoice></td><td class="Count2"><input type="text" class="form-control" value="-" /></td><td class="text-right Count2"><input type="text" class="form-control text-right" value="" /></td><td class="text-right Count2"><input type="text" class="form-control text-right" value="" /></td><td class="text-right Count2"><input type="text" class="form-control text-right" value="" /></td><td class="text-right Count2 savetr"><a> <i class="fa fa-save" style="font-size:16px"></i></a></td></tr>');
     }


    

     $(".num-key").click(function () {
         if ($(this).val() == "D")
             $(".num-text").val($(".num-text").val().substring(0, $(".num-text").val().length - 1));
         else if ($(this).val() == "C")
             $(".num-text").val("");
         else
             $(".num-text").val($(".num-text").val() + $(this).val());
     });
       
        

}]);