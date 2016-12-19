myApp.controller('EnquiryCntrl', ['$scope', '$http', '$timeout', '$stateParams', '$rootScope', '$state', 'config', function ($scope, $http, $timeout, $stateParams, $rootScope, $state, config) {

    $("#mySel").select2({

    });
   
    $(".my a").click(function (e) {
        e.preventDefault();
    });

    $scope.moreEmployeebtn = function () {
        $('#moreEmployeeModal').modal('show');
    },
   
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

    $('.selectpicker').selectpicker();
    $scope.sup2 = [];
    $scope.suppliersList = function () {
        $scope.sup2 = $('.selectpicker option:selected').val();
        $scope.sup2 = $('.selectpicker option:selected').val();
       

    };


    $(".RemoveTR").click(function (event) {
        $(this).closest("tr").remove();
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

 

    $('.Countedit td').click(function () {
        $(this).closest('tr').find('.Count').hide();
        $(this).closest('tr').find('.Count2').show();

    });

    $('.savetr').click(function () {
        $(this).closest('tr').find('.Count').show();
        $(this).closest('tr').find('.Count2').hide();

    });

   
    $scope.enqNo = $stateParams.email;
    $scope.edit = $stateParams.edit;
   
  
    
    

   
    //get enquiry list for edit enquiry

    if ($scope.edit == 1) {
        $scope.no = $scope.enqNo;
        $http.get(config.api + "transactions" + "?filter[where][no]=" + $scope.enqNo).then(function (response) {

            $scope.enquiryData = response.data;
            $scope.email = response.data[0].email;
            $scope.supplier = response.data[0].supliersName;
           
            $scope.billDate = response.data[0].date;
            $scope.billDueDate = response.data[0].billDueDate;
            $scope.no = $scope.enqNo;
            $scope.enquiryTable = response.data[0].itemDetail;
            $scope.supplierList = response.data[0].sentSupplier;
        });

    }
    else {

             
        $http.get(config.api + "transactions" + "/count" + "?where[ordertype]=" + "ENQUIRY").then(function (response) {

            $scope.enquiryCount = response.data;

            $scope.no = 'ENQ' + $scope.enquiryCount.count;
        });

    }

    //console.log($scope.cop);


    $scope.enquiryTable = [];

    //Add row to the enquiry Item detail table

    $scope.addRow = function () {
        $scope.enquiryTable.push(
            {
                
                grade: '',
                finish: '',
                thickness: '',
                width: '',
                length: '',
                netweight: '',
                grossweight: '',
                sheetNo: ''
            }
        );
    };
  
    // Remove the row from item table

    $scope.remove = function (index) {

        $scope.enquiryTable.splice(index, 1);
    }
    
    $scope.removeS = function (index) {

        $scope.supplierList.splice(index, 1);
    }


    //get suppliers
    //get suppliers
    $scope.supplierList = [];
 
   
    

    

    //coment by vivek sharma
    //coment by vivek sharma

    $scope.$watch('sup', function () {

        $http.get(config.api + 'suppliers')
           .success(function (data) {
               $scope.supliers = data;

             

           });
           
            
        if ($scope.sup != undefined) {
            $scope.email = $scope.sup;
                $scope.email1 = $scope.email

              
                $scope.supplier = $scope.supplierName
             
                $scope.supplierList.push({ "supplier": $scope.supplier, "email": $scope.email1 })
             
            }
           
        
    });

    // save enquiry

    $scope.saveEnquiry = function () {
      
        var index = 0;
        $scope.enquiryTable.forEach(function (row) {

        });
       
        var data = {

            supliersName: $scope.supplier,
            suplierId: $scope.sup2,
            email: $scope.email,

            currency: $scope.currency,
            date: $scope.billDate,
            billDueDate: $scope.billDueDate,
            no: $scope.no,
            ordertype: "ENQUIRY",
            status: ["OPEN"],
            itemDetail: $scope.enquiryTable,
            sentSupplier: $scope.supplierList
        }

        // edit enquiry 

        // edit enquiry 
        if ($scope.edit == 1) {
            var data = {


                supliersName: $scope.supplier,
                suplierId: $scope.sup2,
                email: $scope.email,
               
                currency: $scope.currency,
                date: $scope.billDate,
                billDueDate: $scope.billDueDate,
                no: $scope.enqNo,
                ordertype: "ENQUIRY",
                status: [$scope.status],
                itemDetail: $scope.enquiryTable,
                sentSupplier: $scope.supplierList
            }

            $http.post(config.api +"transactions" + "/update" + "?[where][no]=" + $scope.enqNo, data).then(function (response) {

                alert("Enquiry Updated");
            });
        }

           
        else {

            $http.post(config.api + "transactions" , data).then(function (response) {
                  window.alert(" Enquiry is saved")
            });
        };


       
        
    }

   
   $scope.add = function () {

       $('#form-popoverPopup').show();


   }
 
   
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

   
}]);

