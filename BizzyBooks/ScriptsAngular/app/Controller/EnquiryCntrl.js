myApp.controller('EnquiryCntrl', ['$scope', '$http', '$timeout', '$stateParams', '$rootScope', '$state', function ($scope, $http, $timeout, $stateParams,$rootScope, $state) {

    $("#mySel").select2({

    });
   
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

    $('.selectpicker').selectpicker();
    $scope.sup2 = [];
    $scope.suppliersList = function () {
        $scope.sup2 = $('.selectpicker option:selected').val();
        $scope.sup2 = $('.selectpicker option:selected').val();
        console.log($scope.sup2);

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

   
    $scope.enqNo = $stateParams.email;
    $scope.edit = $stateParams.edit;
   
    console.log($scope.edit);


    $scope.AddTableLine = function () {


         $('#ItemTable tr:last').after('<tr class="Countedit"><td class="Count">&nbsp;</td><td class="Count" style="text-align:center;">&nbsp;</td><td class="Count" style="text-align:center">&nbsp;</td><td class="Count" style="text-align:center">&nbsp;</td><td class="Count" style="text-align:center">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="Count" style="text-align:right">&nbsp;</td><td class="text-right Count"><a class="edit" title="Edit"> <i class="fa fa-pencil" style="font-size:16px"></i></a></td><td class="Count2"></td><td class="Count2" style="text-align:center;"><input type="text" class="form-control" value="" /></td><td class="Count2" style="text-align:center;"><input type="text" class="form-control text-center" value="" /> </td><td class="Count2" style="text-align:center;"><input type="text" class="form-control text-center" value="" /></td><td class="Count2" style="text-align:center;"><input type="text" class="form-control text-center" value="" /></td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /></td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /> </td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /> </td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /> </td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /> </td><td class="Count2" style="text-align:right"><input type="text" class="form-control text-right" value="" /> </td><td class="text-right Count2 savetr"><a> <i class="fa fa-save" style="font-size:16px"></i></a></td></tr>');
    }
    $scope.enquiryData = [];

   

    $http.get("http://localhost:4000/api/enquiries" + "/count").then(function (response) {

        $scope.enquiryCount = response.data;

        $scope.EnquiryNo = 'ENQ' + $scope.enquiryCount.count;
    });

    $http.get("http://localhost:4000/api/enquiries" + "?filter[where][no]=" + $scope.enqNo).then(function (response) {

        $scope.enquiryData = response.data;
        $scope.email = response.data[0].email;
        $scope.billDate = response.data[0].date;
        $scope.billDueDate = response.data[0].billDueDate;
        $scope.EnquiryNo = $scope.enqNo;
       
        console.log(response.data[0].itemDetail);
       
        $scope.enquiryTable = response.data[0].itemDetail;
    });




    $scope.enquiryTable = [];
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
  

    $scope.remove = function (index) {

        $scope.enquiryTable.splice(index, 1);
   


    }
    


     
    $scope.saveEnquiry = function () {
        console.log($scope.enquiryTable);

        var index = 0;
        $scope.enquiryTable.forEach(function (row) {

        });
        console.log($scope.email);
        var data = {

            supliersName: $scope.sup2,
            email: $scope.enqNo,
            remarks: $scope.remarks,
            currency: $scope.currency,
            date: $scope.billDate,
            billDueDate: $scope.billDueDate,
            no: $scope.EnquiryNo,
            status: [$scope.status],
            itemDetail: $scope.enquiryTable
        }


        if ($scope.edit == 1) {
            var data = {

                supliersName: $scope.sup2,
                email: $scope.email,
                remarks: $scope.remarks,
                currency: $scope.currency,
                date: $scope.billDate,
                billDueDate: $scope.billDueDate,
                no: $scope.EnquiryNo,
                status: [$scope.status],
                itemDetail: $scope.enquiryTable
            }


            var url = "http://localhost:4000/api/enquiries";
            $http.post(url + "/update" + "?[where][no]=" + $scope.enqNo, data).then(function (response) {

            });


        }
        else {
            console.log(data);
            var url = "http://localhost:4000/api/enquiries";
            $http.post(url + "/addEnquiry", data).then(function (response) {

            });
           

        };
        $scope.totalsuppliers = [];
        var url = "http://localhost:4000/api/suppliers";
        $http.get(url + "?filter[fields][company]=true").then(function (response) {
            $scope.totalsuppliers = response.data;

            console.log($scope.totalsuppliers);


        });
        $http.get(url + "/count").then(function (response) {

            $scope.suppliersCount = response.data;
        });
    }



}]);

