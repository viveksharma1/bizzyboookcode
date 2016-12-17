var customerName;
var CustomerId_Invoice;

myApp.controller('InvoiceCntrl', ['$scope', '$http', '$timeout', '$rootScope', '$state', 'config', function ($scope, $http, $timeout, $rootScope, $state, config) {
    //CustomerId_Invoice=  localStorage.CustomerId_Invoice;
    $scope.usertype = localStorage.userType_Role;
    if (localStorage.userType_Role == "3") {
        $("#ItemTable").show();
        $("#btnid").show();
        $("#ItemTable1").hide();
        $("#btnid1").hide();
    }
    else {
        $("#ItemTable1").show();
        $("#btnid1").show();
        $("#ItemTable").hide();
        $("#btnid").hide();
    }
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
        $('#InvoiceTable tr:last').after('<tr class="Countedit"><td class="text-right Count"></td><td class="Count">&nbsp;</td><td class="Count">&nbsp;</td><td class="text-right Count">&nbsp;</td><td class="text-right Count">&nbsp;</td><td class="text-right Count">&nbsp;</td><td class="text-right Count"><a> <i class="fa fa-pencil" style="font-size:16px"></i></a></td><td class="text-right Count2"><input type="text" class="form-control" style="width:30px" value="" /></td><td class="Count2"><input type="text" class="form-control" value="-" /></td><td class="Count2"><input type="text" class="form-control" value="-" /></td><td class="text-right Count2"><input type="text" class="form-control text-right" value="" /></td><td class="text-right Count2"><input type="text" class="form-control text-right" value="" /></td><td class="text-right Count2"><input type="text" class="form-control text-right" value="" /></td><td class="text-right Count2 savetr"><a> <i class="fa fa-save" style="font-size:16px"></i></a></td></tr>');
    }


    $scope.enquiryTable = [];

    //Add row to the enquiry Item detail table

    $scope.addRow = function () {
        $scope.enquiryTable.push(
            {

                product: '',
                discription: '',
                quantity: '',
                rate: '',
                amount: ''
            }
        );
    };

    $scope.addRowMisliniusCh = function () {
        $scope.enquiryTable.push(
            {

                product: '',
                discription: '',
                quantity: '',
                rate: '',
                misliniusCh: '',
                amount: ''
            }
        );
    };
    // Remove the row from item table

    $scope.remove = function (index) {

        $scope.enquiryTable.splice(index, 1);
    }


    $(".num-key").click(function () {
        if ($(this).val() == "D")
            $(".num-text").val($(".num-text").val().substring(0, $(".num-text").val().length - 1));
        else if ($(this).val() == "C")
            $(".num-text").val("");
        else
            $(".num-text").val($(".num-text").val() + $(this).val());
    });

    var url = config.api + "customers";
    $http.get(url).success(function (response) {
        $scope.customerNameList = response;
    })
    $scope.$watch('sup', function () {
        $scope.CustomerEmail = $scope.sup;
        customerName = $scope.cname;
        CustomerId_Invoice = $scope.id;
        localStorage.InvoiceItem_CId = $scope.id;

    });

    $scope.CreateNewInvoice = function () {
        var Invoice_count;
        var Invoice_count_url = config.api + "customerTransactions/count";
        $http.get(Invoice_count_url).success(function (count) {
            Invoice_count = count.count;
            create_Invoice(Invoice_count);

        })

    }
    $scope.textChanged = function () {


    };
    function create_Invoice(Invoice_count) {
        var productName, productDiscription, productQty, rate, amount;
        var ProductArr = $scope.enquiryTable;
        var num = Math.floor(Math.random() * 90000) + 10000;
        var invoiceNo = "INV" + num + Invoice_count;
        var TinNo = "TIN" + num + Invoice_count;

        data = {
            customerId: CustomerId_Invoice,
            invoiceNo: invoiceNo,
            tinNo: TinNo,
            customerName: customerName,
            customerEmail: $scope.CustomerEmail,
            billingAddress: $scope.billingAddress,
            invoiceDate: $scope.invoiceDate,
            invoiceDueDate: $scope.invoiceDueDate,
            displayedInvoice: $scope.displayoninvoice,
            statementMemo: $scope.statementMemo,
            productInfo: ProductArr

        }
        var url = config.api + "customerTransactions";
        $http.post(url, data).success(function (response) {
            if (response != null) {
                alert("Create New Invoice Successfully");
                $scope.enquiryTable = [];
                $scope.billingAddress = null;
                $scope.displayoninvoice = null;
                $scope.statementMemo = null;
            }

        })
    }

}]);