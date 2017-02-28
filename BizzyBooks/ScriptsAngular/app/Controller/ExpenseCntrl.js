myApp.controller('ExpenseCntrl', ['$scope', '$http', '$stateParams','$timeout', '$rootScope', '$state', 'myService', 'config', function ($scope, $http,$stateParams, $timeout, $rootScope, $state, myService, config) {

    $(".my a").click(function (e) {
        e.preventDefault();
    });

    $scope.goBack = function () {
        window.history.back();
    },
     $scope.popuclose = function () {
         $('#form-popoverPopup').hide();
     },

     $('#Paymentdate').datepicker("setDate", new Date());

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
    $scope.add3 = function () {
        $('#formaccount').modal('show');
    };

  
    // supplier select box
    $scope.accounts = {};
   
    $scope.accounts1 = {};
    $scope.refNo = $stateParams.no;
    $scope.sup = $stateParams.suppliers;
    
    $scope.supplier = { selected: $scope.supplier };
    console.log($scope.supplier)
    $scope.tax = {};
    $scope.accountTable = [];
    $scope.accountTable1 = [];

    if ($scope.refNo) {
        $scope.expenseNo = "REF-" + $scope.refNo
    }
    $scope.accounts[0] = {};
  


  //get supplier data
    $scope.supliers = []
        $http.get(config.api + "suppliers").then(function (response) {
            $scope.supliers = response.data;
        });

    //Expense table 
  
   
   //


    //calculate total tax and total amount
    var totalTax = function () {
        var total1 = 0;
        for (var i = 0; i < $scope.accountTable.length; i++) {
            var product = Number($scope.accountTable[i]);
            total1 += Number($scope.accountTable[i].amount);
        }
        $scope.taxTotal = total1.toFixed(2);
        $scope.totalTax = Number($scope.subtotalnew) + Number($scope.taxTotal);
        $scope.totalWithTax = $scope.totalTax.toFixed(2)
    }

    $scope.total = "0,00"

    //ng-click on row
  

    // remove po table row 

    $scope.remove6 = function (index) {
        $scope.accountTable1.splice(index, 1);
        var total = 0;
        for (var i = 0; i < $scope.accountTable1.length; i++) {
            var product = Number($scope.accountTable1[i]);
            total += Number($scope.accountTable1[i].AMOUNT);
        }
        $scope.subtotalnew = total;

        if ($scope.accountTable1.length == '0') {
            $scope.taxTotal = '0.00';
            $scope.totalWithTax = '0.00'
        }
        else
           totalTax();
    }

    //clear expense table
    $scope.clearTable = function () {
        $scope.accountTable1 = [];
       
    }

   

    
    // remove row from account table
    $scope.remove1 = function (index) {
        $scope.accountTable.splice(index, 1);
       $scope.totalAmount();
    }
    $scope.remove = function (index) {
        $scope.accountTable1.splice(index, 1);
        $scope.totalAmount1();
    }
    $scope.accountTable = [];
    $scope.accountTable1 = [];
    //push new row in account table
    $scope.accountTable.push({ "ac": '', "DSC": '', "amount": '' })
    $scope.accountTable1.push({ "ac1": '', "DSC": '', "amount1": '' })

    console.log($scope.accounts)
   

    //add account function for first account
    $scope.totalAmount = function () {

        var total = 0;
        for (var i = 0; i < $scope.accountTable.length; i++) {
            var product = Number($scope.accountTable[i]);
            total += Number($scope.accountTable[i].amount);
        }
        $scope.totaltax1 = total.toFixed(2);
        $scope.totaltax = Number($scope.totaltax1)
    }
    $scope.totalAmount1 = function () {

        var total = 0;
        for (var i = 0; i < $scope.accountTable1.length; i++) {
            var product = Number($scope.accountTable1[i]);
            total += Number($scope.accountTable1[i].amount1);
        }
        $scope.totalcharges1 = total.toFixed(2);
        $scope.totalcharges = Number($scope.totalcharges1)
    }
    $scope.addAccount = function () {

        $scope.accountTable.push({ "ac": '', "DSC": '', "amount": '' })
        console.log($scope.accountTable)
        $scope.totalAmount();
    }

    $scope.addAccount1 = function () {
        $scope.accountTable1.push({ "ac1": '', "DSC1": '', "amount1": '' })
        console.log($scope.accountTable1)
        $scope.totalAmount1();

    }

    

    $http.get(config.api + "transactions" + "/count" + "?where[ordertype]=" + "EXPENSE").then(function (response) {

        $scope.expenseNoCount = response.data.count;
        $scope.no = 'EXPENSE' + $scope.expenseNoCount;
    });


    // save expense

   

    

    $scope.saveExpense = function () {
        
        $('#addInventryModal1').modal('show');
        var data = {
            compCode: localStorage.CompanyId,
            no: $scope.no,
            refNo: $scope.refNo,
            ordertype: "EXPENSE",
            supliersName: $scope.supplier.selected,
            email:$scope.supplier.selected,
            role: localStorage['adminrole'],
            currency: $scope.currency,
            date: $("#Paymentdate").val(),
            itemDetail: $scope.expenseTable,
            taxInfo: $scope.accountTable,
            amount: $scope.totalcharges + $scope.totaltax
        }

        $http.post(config.api + "transactions", data).then(function (response) {
           

              
                if ($scope.accountTable[0].ac != undefined) {
                    for (var i = 0; i < $scope.accountTable.length; i++) {

                        var accountData = {
                            compCode: localStorage.CompanyId,
                            compCode: localStorage.CompanyId,
                            accountName: $scope.accountTable[i].ac.accountName,
                            debit: $scope.accountTable[i].amount,
                            credit: 0
                        }
                        var ledgerData = {
                            compCode: localStorage.CompanyId,
                            compCode: localStorage.CompanyId,
                            supliersName: $scope.supplier.selected,
                            accountName: $scope.accountTable[i].ac.accountName,

                            date: $("#Paymentdate").val(),
                            particular: $scope.supplier.selected,
                            no: $scope.no,
                            debit: 0,
                            refNo: $scope.refNo,
                            credit: $scope.accountTable[i].amount,
                            type: 'Tax'
                        }
                        $http.post(config.login + "addammount", accountData).then(function (response) {

                        });
                        $http.post(config.api + "ledgers", ledgerData).then(function (response) {

                        });
                    }
                }
                if ($scope.accountTable1[0].ac1 != undefined) {
                    for (var i = 0; i < $scope.accountTable1.length; i++) {
                        if ($scope.accountTable1[i].ac1 != undefined) {
                            var accountData1 = {
                                compCode: localStorage.CompanyId,
                                compCode: localStorage.CompanyId,
                                accountName: $scope.accountTable1[i].ac1.accountName,
                                debit: $scope.accountTable1[i].amount1,
                                credit: 0
                            }
                            var ledgerData1 = {
                                compCode: localStorage.CompanyId,
                                compCode: localStorage.CompanyId,
                                supliersName: $scope.supplier.selected,
                                accountName: $scope.accountTable1[i].ac1.accountName,

                                date: $("#Paymentdate").val(),
                                particular: $scope.supplier.selected,
                                no: $scope.no,
                                debit: 0,
                                refNo: $scope.refNo,
                                credit: $scope.accountTable1[i].amount1,
                                type: 'Expense'
                            }
                            $http.post(config.login + "addammount", accountData1).then(function (response) {

                            });
                            $http.post(config.api + "ledgers", ledgerData1).then(function (response) {
                                $('#addInventryModal1').modal('hide');
                            });
                        }
                    }
                    
                }
                $http.post(config.api + "ledgers", expenseData).then(function (response) {
                   
                });
               
            
        })


    }

    //get account data

    $http.get(config.api + "accounts"+ "?[filter][where][type]=Direct Expense"+ "&[filter][fields][accountName]=true").then(function (response) {
        $scope.account1 = response.data
        console.log($scope.account);
    })

    $http.get(config.api + "accounts" + "?[filter][where][type]=Tax And Duties" + "&[filter][fields][accountName]=true").then(function (response) {
        $scope.account = response.data
        console.log($scope.account);
    })
   
    //create account 


    $scope.createAccount = function () {

        var accountData = {
            compCode: localStorage.CompanyId,
            accountName: $scope.accountName,
            category: '',
            group: $scope.accountgroup,
            type: $scope.accountType,
            balance: $scope.balance,
            credit: 0,
            debit: 0
        }


        $http.post(config.api + "accounts", accountData).then(function (response) {
            $http.get(config.api + "accounts").then(function (response) {
                $scope.account = response.data;
            })
        });

    }

// Save And Close

    $scope.saveAndClose = function () {
        $scope.saveExpense();
        $scope.goBack();
}


}]);