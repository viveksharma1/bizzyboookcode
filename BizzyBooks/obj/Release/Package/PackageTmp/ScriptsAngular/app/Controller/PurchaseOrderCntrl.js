myApp.controller('PurchaseOrderCntrl', ['$scope', '$http', '$timeout', '$rootScope', '$state', function ($scope, $http, $timeout, $rootScope, $state) {


    $('#dueDate').hide();
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

  
   
    $scope.ExchangeRatebtn = function () {
        $('#ExchangeRateDiv').modal('show');
    },

$scope.CommodityRatesbtn = function () {
    $('#CommodityRatesDiv').modal('show');
},

$('.addexchange').click(function () {
    $('.modalbodyexchange').append('<div class="ExchangeLine"><div class="col-sm-5 padding5"><select class="form-control selectcss">         <option>Indonesian rupiah</option><option>Indian rupee</option></select></div><div class="col-sm-5 padding5"><input type="text" class="form-control" /></div><div class="col-sm-2 padding5 delete"><i class="fa fa-trash"></i> Delete</div></div>');
});

    $(document).on('click', '.delete', function () {
        $(this).parent('div').remove();
    });

    $('.addcommodity').click(function () {
        $('.modalbodycommodity').append('<div class="ExchangeLine"><div class="col-sm-6 padding5"><select class="form-control selectcss">         <option>Select</option><option>Nickel</option><option>Copper</option><option>Fe</option><option>Molybdenum</option><option>Ferrous</option></select></div><div class="col-sm-6 padding5"><input type="text" class="form-control" /></div></div>');
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
         $('#ItemTable tr:last').after('<tr class="Countedit"><td class="Count">&nbsp;</td><td class="Count" style="text-align:center;">&nbsp;</td><td class="Count" style="text-align:center">&nbsp;</td><td class="Count" style="text-align:center">&nbsp;</td><td class="Count" style="text-align:center">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="text-right Count"><a class="edit" title="Edit"> <i class="fa fa-pencil" style="font-size:16px"></i></a></td><td class="Count2"><ui-tree-select model="model"></ui-tree-select></td><td class="Count2" style="text-align:center;"><input type="text" class="form-control" value="" /></td><td class="Count2" style="text-align:center;"><input type="text" class="form-control text-center" value="" /> </td><td class="Count2" style="text-align:center;"><input type="text" class="form-control text-center" value="" /></td><td class="Count2" style="text-align:center;"><input type="text" class="form-control text-center" value="" /></td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /></td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /> </td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /> </td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /> </td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /> </td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /> </td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /> </td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /> </td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /> </td><td class="text-right Count2 savetr"><a> <i class="fa fa-save" style="font-size:16px"></i></a></td></tr>');
     }

    $scope.order = [];
    $scope.order = [
        {

            vivek: 'kdfhfs',
            vivek1: 'kdfhfsff'
        }

    ];
    $scope.order = "fdfdsf";

    var access_key = 'af072eeb3d8671688ff6eaa83c8dbcb8';
    var url = 'http://apilayer.net/api/live?access_key=' + access_key;
    var access_key = 'af072eeb3d8671688ff6eaa83c8dbcb8';
    var from = 'USD';
    var to = 'EUR';
    var amount = '1';

    $.ajax({

        url: 'http://apilayer.net/api/convert?access_key=' + access_key,
        success: function (response) {

            if (response.success) {

                alert('1 USD is worth ' + parseFloat(response.rate).toFixed(2) + ' EUR');
            }

            console.log(response);
        }
    });


    

    $scope.data = [];
    
    $http.get(url).then(function (response) {

        $scope.data = response.data;
        console.log($scope.data);
        console.log(response);
        console.log(response.data.quotes.USDINR);
        $('#rs').val(response.data.quotes.USDINR);
        $('#rs1').val(response.data.quotes.USDIDR,'IDR');

    });

    //$('#rs').val(response.data.quotes.USDINR);

    // $('#txtarea').val('fffsfsff');
    $('#amount').val('fffsfsff');


    $scope.purchage = [];

    $scope.purchage = [{ name: "System Architect", dsc: 'Coldrolledstainlesssteelsheets/plates/coilscut-exstock', ammount: "2345" }, { name: "System Architect", dsc: 'Coldrolledstainlesssteelsheets/plates/coilscut-exstock', ammount: "2345" }, { name: "System Architect", dsc: 'Coldrolledstainlesssteelsheets/plates/coilscut-exstock', ammount: "2345" }];

    


    $scope.purchageorder = [];

    $scope.purchageorder = [{ name: 'System Architect', date: '12/05/2016', count: '23', dsc: 'Coldrolledstainlesssteelsheets/plates/coilscut-exstock', email: 'SystemArchitect@gmail.com', phone: '+934434343' }, { name: 'Jindal Steel', date: '29/05/2016', count: '33', email: 'JindalSteel@gmail.com', phone: '+932323233' }, { name: 'Phoenix Imports and Exports', date: '25/05/2016', count: '73', email: 'Phoenix@gmail.com', phone: '+9445466663' }, { name: 'Paynna Anugrah Indonesia', date: '25/05/2016', count: '73', email: 'Paynna@gmail.com', phone: '+9134423443' }]

    
    $scope.item = [];

    $scope.item = [[{ PRODUCT: "Stainless Steel Coil", FINISH: '2B', GRADE: '377', THICKNESS: '0.56', WIDTH: '1234', DESCRIPTION: '', QTY: '1', RATE: '125.00', AMOUNT: '125.00', TAX: '0.00' }, { PRODUCT: "nickel", FINISH: '2B', GRADE: '307', THICKNESS: '0.56', WIDTH: '1234', DESCRIPTION: '', QTY: '1', RATE: '125.00', AMOUNT: '125.00', TAX: '0.00' }, { PRODUCT: "Steel Coil", FINISH: '7B', GRADE: '357', THICKNESS: '0.56', WIDTH: '1255', DESCRIPTION: '', QTY: '1', RATE: '125.00', AMOUNT: '125.00', TAX: '0.00' }, { PRODUCT: "Baby Coil", FINISH: '2B', GRADE: '307', THICKNESS: '0.56', WIDTH: '1234', DESCRIPTION: '', QTY: '1', RATE: '125.00', AMOUNT: '125.00', TAX: '0.00' }],
    [{ PRODUCT: "nickel Coil", FINISH: '2B', GRADE: '307', THICKNESS: '0.56', WIDTH: '1234', DESCRIPTION: '', QTY: '51', RATE: '125.00', AMOUNT: '125.00', TAX: '0.00' }, { PRODUCT: "Baby Coil", FINISH: '2B', GRADE: '307', THICKNESS: '0.56', WIDTH: '1234', DESCRIPTION: '', QTY: '1', RATE: '125.00', AMOUNT: '125.00', TAX: '0.00' }, { PRODUCT: " Nickel Coil", FINISH: '6B', GRADE: '307', THICKNESS: '0.56', WIDTH: '1323', DESCRIPTION: '', QTY: '1', RATE: '125.00', AMOUNT: '125.00', TAX: '0.00' }, { PRODUCT: "Baby Coil", FINISH: '2B', GRADE: '307', THICKNESS: '0.56', WIDTH: '1234', DESCRIPTION: '', QTY: '1', RATE: '125.00', AMOUNT: '125.00', TAX: '0.00' }],
     [{ PRODUCT: "Baby Coil", FINISH: '5B', GRADE: '237', THICKNESS: '0.56', WIDTH: '1234', DESCRIPTION: '', QTY: '9', RATE: '125.00', AMOUNT: '525.00', TAX: '0.00' }, { PRODUCT: "Baby Coil", FINISH: '2B', GRADE: '307', THICKNESS: '0.56', WIDTH: '1234', DESCRIPTION: '', QTY: '1', RATE: '125.00', AMOUNT: '125.00', TAX: '0.00' }, { PRODUCT: "Iron Coil", FINISH: '2B', GRADE: '307', THICKNESS: '0.56', WIDTH: '5454', DESCRIPTION: '', QTY: '1', RATE: '125.00', AMOUNT: '125.00', TAX: '0.00' }, { PRODUCT: "Baby Coil", FINISH: '2B', GRADE: '307', THICKNESS: '0.56', WIDTH: '1234', DESCRIPTION: '', QTY: '1', RATE: '125.00', AMOUNT: '125.00', TAX: '0.00' }],
     [{ PRODUCT: "Steel Coil", FINISH: '2B', GRADE: '307', THICKNESS: '0.56', WIDTH: '1234', DESCRIPTION: '', QTY: '8', RATE: '125.00', AMOUNT: '325.00', TAX: '0.00' }, { PRODUCT: "Baby Coil", FINISH: '2B', GRADE: '307', THICKNESS: '0.56', WIDTH: '1234', DESCRIPTION: '', QTY: '1', RATE: '125.00', AMOUNT: '125.00', TAX: '0.00' }, { PRODUCT: "Iron  Coil", FINISH: '2B', GRADE: '307', THICKNESS: '0.56', WIDTH: '1455', DESCRIPTION: '', QTY: '1', RATE: '125.00', AMOUNT: '125.00', TAX: '0.00' }, { PRODUCT: "Steel Coil", FINISH: '2B', GRADE: '307', THICKNESS: '0.56', WIDTH: '1234', DESCRIPTION: '', QTY: '5', RATE: '600.00', AMOUNT: '125.00', TAX: '0.00' }]];
    
    $scope.name1 = $scope.purchageorder[0].name;
    $scope.email = $scope.purchageorder[0].email;
    $scope.phone = $scope.purchageorder[0].phone;
    $scope.add = function (i) {

        $scope.newitem = [];

        $scope.newitem = $scope.item[i];
       
        //$('#dsc').val('fffsfsff');
        //$('#amount').val('fffsfsff');

        $scope.table = "dfdsff";
        $('#txtarea').val('Mumbai , Mahrashtra');
        $('#dsc').val('Cold rolled stainless steel sheets/plates/coils cut - exstock');
        // $('#name').show(purchageorder[0].name);

        // $scope.name1 = $scope.purchageorder.name;
        $scope.name1 = $scope.purchageorder[i].name;
        $scope.email = $scope.purchageorder[i].email;
        $scope.phone = $scope.purchageorder[i].phone;

    };


    //$scope.name1 = $scope.purchageorder[i].name;


    $scope.rate1="$683.42";
    $scope.rate2 = "$440";
    $scope.rate3="$6833.42";
   




    

}]);