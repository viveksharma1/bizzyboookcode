myApp.controller('EnquirydetailCntrl', ['$scope', '$http', '$timeout', '$rootScope', '$state', function ($scope, $http, $timeout, $rootScope, $state) {


    $(".my a").click(function (e) {
        e.preventDefault();
    });
    $scope.goBack = function () {
        window.history.back();
    },

    

    $scope.popuclose = function () {
        $('#form-popoverPopup').hide();
    },

$(".Additem").click(function () {
    $('.additemlist').css("display", "block");
    var domElement = $('<div class="col-sm-6" style="margin-top:10px"><input type="text" class="form-control" placeholder="" /></div><div class="col-sm-6 " style="margin-top:10px"><input type="text" class="form-control" placeholder="Email address" /></div>');
    $('.additemlist').append(domElement);
});


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




    $scope.AddTableLine = function () {
        $('#ItemTable tr:last').after('<tr class="Countedit"><td class="text-right Count">&nbsp;</td><td class="Count">&nbsp;</td><td class="Count">&nbsp;</td><td class="Count">&nbsp;</td><td class="Count">&nbsp;</td><td class="Count">&nbsp;</td><td class="Count">&nbsp;</td><td class="text-right Count">&nbsp;</td><td class="text-right Count">&nbsp;</td><td class="text-right Count">&nbsp;</td><td class="text-right Count">&nbsp;</td><td class="text-right Count"><a class="edit" title="Edit"> <i class="fa fa-pencil" style="font-size:16px"></i></a></td><td class="text-right Count2"><input type="text" class="form-control" style="width:30px" /></td><td class="Count2"><ui-tree-Item model="model"></ui-tree-Item></td><td class="Count2"><input type="text" class="form-control" /></td><td class="Count2"><input type="text" class="form-control" /></td><td class="Count2"><input type="text" class="form-control"  /></td><td class="Count2"><input type="text" class="form-control" /></td><td class="Count2"><input type="text" class="form-control" /></td><td class="text-right Count2"><input type="text" class="form-control"  /></td><td class="text-right Count2"><input type="text" class="form-control"  /></td><td class="text-right Count2"><input type="text" class="form-control"  /></td><td class="text-right Count2"><input type="text" class="form-control"  /></td><td class="text-right Count2 savetr"><a> <i class="fa fa-save" style="font-size:16px"></i></a></td></tr>');
    }


    $scope.enquiry = [
        {

            DATE: '23/07/2016',
            TYPE: 'Enquiry',
            NO: '1001',
            DUEDATE: '22/08/2016',
            BALANCE: 'Rs0.00',
            TOTAL: 'Rs0.00',
            STATUS: 'Paid',
            ACTION: 'Print'
        },
         {

             DATE: '23/07/2016',
             TYPE: 'Enquiry',
             NO: '1001',
             DUEDATE: '22/08/2016',
             BALANCE: 'Rs0.00',
             TOTAL: 'Rs0.00',
             STATUS: 'Paid',
             ACTION: 'Print'
         },
          {

              DATE: '23/07/2016',
              TYPE: 'Enquiry',
              NO: '1001',
              DUEDATE: '22/08/2016',
              BALANCE: 'Rs0.00',
              TOTAL: 'Rs0.00',
              STATUS: 'Unpaid',
              ACTION: 'Print'
          }

    ];

    $scope.bill = [
       {

           DATE: '23/07/2016',
           TYPE: 'Bill',
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


    $scope.po = [
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
             TYPE: 'PO',
             NO: '1001',
             DUEDATE: '22/08/2016',
             BALANCE: 'Rs0.00',
             TOTAL: 'Rs0.00',
             STATUS: 'Unpaid',
             ACTION: 'Print'
         }

    ];


}]);