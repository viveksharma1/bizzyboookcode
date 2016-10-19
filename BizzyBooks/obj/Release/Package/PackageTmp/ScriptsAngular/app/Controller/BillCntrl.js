myApp.controller('BillCntrl', ['$scope', '$http', '$timeout', '$rootScope', '$state', function ($scope, $http, $timeout, $rootScope, $state) {

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
         $('#ItemTable tr:last').after('<tr class="Countedit"><td class="text-right Count">&nbsp;</td><td class="Count">&nbsp;</td><td class="Count">&nbsp;</td><td class="Count">&nbsp;</td><td class="Count">&nbsp;</td><td class="Count">&nbsp;</td><td class="Count">&nbsp;</td><td class="text-right Count">&nbsp;</td><td class="text-right Count">&nbsp;</td><td class="text-right Count">&nbsp;</td><td class="text-right Count">&nbsp;</td><td class="text-right Count"><a class="edit" title="Edit"> <i class="fa fa-pencil" style="font-size:16px"></i></a></td><td class="text-right Count2"><input type="text" class="form-control" style="width:30px" /></td><td class="Count2"><ui-tree-Item model="model"></ui-tree-Item></td><td class="Count2"><input type="text" class="form-control" /></td><td class="Count2"><input type="text" class="form-control" /></td><td class="Count2"><input type="text" class="form-control"  /></td><td class="Count2"><input type="text" class="form-control" /></td><td class="Count2"><input type="text" class="form-control" /></td><td class="text-right Count2"><input type="text" class="form-control"  /></td><td class="text-right Count2"><input type="text" class="form-control"  /></td><td class="text-right Count2"><input type="text" class="form-control"  /></td><td class="text-right Count2"><input type="text" class="form-control"  /></td><td class="text-right Count2 savetr"><a> <i class="fa fa-save" style="font-size:16px"></i></a></td></tr>');
     }




}]);