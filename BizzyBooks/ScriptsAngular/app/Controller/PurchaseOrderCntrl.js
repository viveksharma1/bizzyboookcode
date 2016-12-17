myApp.controller('PurchaseOrderCntrl', ['$scope', '$http', '$stateParams', '$timeout', '$rootScope', '$state', 'config', 'DTOptionsBuilder', 'DTDefaultOptions', function ($scope, $http, $stateParams, $timeout, $rootScope, $state, config, DTOptionsBuilder, DTDefaultOptions) {

   
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
    $('#billDueDate').datepicker("setDate", new Date());


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
    //suppliers popup

    $scope.add = function () {

        $('#form-popoverPopup').show();


    }
    $('#example').dataTable({
        "oLanguage": {
            "sProcessing": "DataTables is currently busy"
        }
    });
  
    // Get currency rate

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

            
        }
    });


    

    $scope.data = [];
    
    $http.get(url).then(function (response) {

        $scope.data = response.data;
      
        $('#rs').val(response.data.quotes.USDINR);
        $('#rs1').val(response.data.quotes.USDIDR, 'IDR');

        $scope.ExchangeRate = Math.round(response.data.quotes.USDINR); 
    });

    
   



    
   
    
    
    $scope.rate1="$683.42";
    $scope.rate2 = "$440";
    $scope.rate3="$6833.42";
   
    //get suppliers
    $http.get(config.api + 'suppliers' + '?filter[fields][company]=true')
          .success(function (data) {
              $scope.supliers = data;
              
          });
    //get selected suppliers
    $scope.$watch('sup', function () {
        $(".sk-wave").show()

        if ($scope.sup != "undefind") {

            $scope.supplier = $scope.sup;

            $http.get(config.api + 'suppliers' + '?filter[where][company]=' + $scope.supplier)
             .success(function (data) {
                 $scope.supEmail = data;
                 $scope.email = data[0].email;

             });
        }
       
        

        $http.get(config.api + "transactions" + "?filter[where][ordertype]=" + "enquiry" + "&filter[where][supliersName]=" + $scope.sup).then(function (response) {
          
            $scope.enquiryList = response.data;
            if ($scope.enquiryList.length == 0) {
                $("#noData").show()
                $scope.noData = "No Enquiry";
            }
            else {
                $("#noData").hide()
               

               
            }
            $(".sk-wave").hide()

        });
    });


    //get enquiry list 

    //  $scope.enquiryList = [];
    
    $scope.index = 0;
    var i = 0
    $scope.subtotal = 0;
    var count;
    
    $scope.role;
    $scope.admin = localStorage['adminrole'];
  

    // add item row to  po table 
    $scope.poTable = [];
    $scope.addrow = function () {
        if (localStorage['adminrole'] == 1) {

            $scope.poTable.push(
                {

                    grade: '',
                    finish: '',
                    thickness: '',
                    width: '',
                    length: '',
                    netweight: '',
                    grossweight: '',
                    sheetNo: '',
                    fobRate: '',
                    cif: '',
                    miscCharge: '',
                    charges: ''
                }
            );
        }
        if (localStorage['adminrole'] == 2) {
          
            $scope.poTable.push(
               {

                   grade: '',
                   finish: '',
                   thickness: '',
                   width: '',
                   length: '',
                   netweight: '',
                   grossweight: '',
                   sheetNo: '',
                   fobRate: '',
                   cif: '',
                   charges: ''
               }
           );
        }
        if (localStorage['adminrole'] == 3) {


           
            $scope.poTable.push(
               {


                   grade: '',
                   finish: '',
                   thickness: '',
                   width: '',
                   length: '',
                   netweight: '',
                   grossweight: '',
                   sheetNo: '',
                   fobRate: '',
                   cif: '',
                   miscCharge: '',

                   charges: '',
                   adminCharge: ''

               }

           );

           
        }
        // calculating  total amount
        var total = 0;
        for (var i = 0; i < $scope.poTable.length; i++) {
            var product = Number($scope.poTable[i]);
            total += Number($scope.poTable[i].charges);
        }
        $scope.subtotalnew = total;

        // console.log(total);




    }


    $scope.addrow1 = function () {
        var total = 0;
        for (var i = 0; i < $scope.poTable.length; i++) {
            var product = Number($scope.poTable[i]);
            total += Number($scope.poTable[i].charges);
        }
        $scope.subtotalnew = total;

        
    }

    // remove po table row 

    $scope.remove = function (index) {

    
        $scope.poTable.splice(index, 1);
        var total = 0;
        for (var i = 0; i < $scope.poTable.length; i++) {
            var product = Number($scope.poTable[i]);
            total += Number($scope.poTable[i].charges);
        }
        $scope.subtotalnew = total;

         
    }
    
    // add enquiry item detail to po item detail

    $scope.addtoPurchase = function (index) {


        $scope.poTable = $scope.enquiryList[index].itemDetail;
       


    }

    //clear row
    $scope.clearTable = function () {

        $scope.poTable = [];

    }

    //state params variable

    $scope.no = $stateParams.poNo;
    $scope.edit = $stateParams.edit;
    $scope.enqNo = $stateParams.enqNo;
   
    $scope.model = {
        
       

};
   
   

    //save suppliers

    $scope.saveSuppliers = function () {

        var data = {

            company: $scope.suppliersName,
            email: $scope.email1,
            mobile: $scope.mobile

        }

        $http.post(config.api + "suppliers", data)
        .success(function (data) {

        });

    }
        // po count 
      
    //get po Lis

        if ($scope.edit == 1) {
            $scope.poNo = $scope.enqNo;
       
            $http.get(config.api + "transactions" + "?filter[where][no]=" + $scope.enqNo).then(function (response) {


            //console.log(response);
            $scope.supplier = response.data[0].supliersName;
               
            $scope.email = response.data[0].email;
            $scope.poDate = response.data[0].date;
            $scope.poDueDate = response.data[0].billDueDate;
            $scope.poNo = $scope.enqNo;
            $scope.poTable = response.data[0].itemDetail;
        });


        }

        else
        {

            $http.get(config.api + "transactions" + "/count" + "?where[ordertype]=" + "po").then(function (response) {

                $scope.poCount = response.data.count;
                $scope.poNo = 'PO' + $scope.poCount;
            });

            $http.get(config.api + "transactions" + "?filter[where][no]=" + $scope.no).then(function (response) {


                //console.log(response);

                $scope.email = response.data[0].email;
                $scope.supplier = response.data[0].supliersName;
               
              
                $scope.poTable = response.data[0].itemDetail;
            });
        }

        //save purchase order

        $scope.savePurchaseOrder = function (index) {
            console.log($scope.poTable);

            var index = 0;

            if ($scope.edit == 1) {
                $scope.poNo = $stateParams.enqNo;
                var data = {

                    supliersName: $scope.supplier,
                    email: $scope.email,
                    role: localStorage['adminrole'],
                    currency: $scope.currency,
                    date: $scope.poDate,
                    billDueDate: $scope.poDueDate,
                    ordertype: "po",
                    no: $scope.poNo,
                    status: [$scope.status],
                    itemDetail: $scope.poTable,
                    amount: $scope.subtotalnew,
                    exchangeRate: $scope.ExchangeRate
                }
              
                $http.post(config.api + "transactions" + "/update" + "?[where][no]=" + $scope.poNo, data).then(function (response) {

                    window.alert(" po  is edited")
                });
            }
            else {
                var data = {

                    
                    supliersName: $scope.supplier,
                    email: $scope.email,
                    role: localStorage['adminrole'],
                    currency: $scope.currency,
                    date: $scope.poDate,
                    billDueDate: $scope.poDueDate,
                    ordertype: "po",
                    no: $scope.poNo,
                    status: [$scope.status],
                    itemDetail: $scope.poTable,
                    amount: $scope.subtotalnew,
                    exchangeRate:$scope.ExchangeRate
                }
                $http.post(config.api + "transactions", data).then(function (response) {
                    window.alert(" po  is saved")
                });
            }


        }
    
}]);

