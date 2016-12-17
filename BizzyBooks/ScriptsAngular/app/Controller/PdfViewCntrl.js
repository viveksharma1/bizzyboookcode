myApp.controller('PdfViewCntrl', ['$scope', '$http', '$timeout', '$stateParams', '$rootScope', '$state', 'config', function ($scope, $http, $timeout, $stateParams, $rootScope, $state, config) {

    $(".my a").click(function (e) {
        e.preventDefault();
    });

    $scope.goBack = function () {
        window.history.back();
    }
   

    //get po
    $scope.no = $stateParams.po;

    $scope.EnqNo = $stateParams.po
    $scope.suppliersName;
    console.log($stateParams.po);
    localStorage["type"] = $stateParams.enq;
   $rootScope.type = localStorage["type"];
    console.log($scope.type);
    $scope.admin = localStorage['adminrole'];
    var data = {

        no: $scope.no

    };

    $http.post(config.api + "transactions" + "/getPo", data, { headers: { 'tokan': localStorage['token'] } }).then(function (response) {
        $scope.data = response.data.code
        console.log($scope.data);
        console.log($scope.data.amount);

    
    
       
        $scope.suppliersName = $scope.data.supliersName;
        $scope.email = $scope.data.email;
        $scope.date = $scope.data.date;
        $scope.billDueDate = $scope.data.billDueDate;
        $scope.no = $scope.data.no;
        $scope.amount = $scope.data.amount;
    $scope.itemDetail = [];
    $scope.itemDetail = $scope.data.itemDetail;
    $scope.exchangeRate = $scope.data.exchangeRate;

    console.log($scope.exchangeRate);
        
    var total = 0;
    for (var i = 0; i < $scope.itemDetail.length; i++) {
        var product = Number($scope.itemDetail[i]);
        total += Number($scope.itemDetail[i].netweight);
    }
    $scope.totalweight = total;


        
        //get suppliers

    $http.get(config.api + "suppliers" + "?filter[where][company]=" + $scope.suppliersName).then(function (response) {

        console.log(response.data);
        $scope.suppliersAdd = response.data;
        $scope.suppliersdata1 = $scope.suppliersAdd[0].billingAddress[0].street

        $scope.taxRegNo = $scope.suppliersAdd[0].taxInfo[0].taxRegNo
        console.log($scope.suppliersdata1);

    });


})
    


    //pdf 


     $scope.generatePDF = function ()
     {
       
       kendo.drawing.drawDOM($("#upperdivId")).then(function (group)
       {

           console.log(group);
           
           console.log(kendo.drawing.pdf.saveAs(group, "PurchaseOrder PDF.pdf"))
           
            group.options.set("font", "30px Verdana");
        });
       
        var doc = new jsPDF();
        doc.setFontSize(20);
        
        
        var source = $('#upperdivId').html();
       
       
       
        
        doc.fromHTML(source, 15, 15, {
            'width': 170
           
        },
        
       
        function() {
          
           
            var data = new Blob([doc.output()], {
                type: 'application/pdf'
            });

            doc.output('datauri');
            var formData = new FormData();
            formData.append("pdf", data, "myfile.pdf");
            var request = new XMLHttpRequest();
            request.open("POST", 'http://localhost:4000/email'); // Change to your server
            request.send(formData);
            
           
        });

      

      
      
    }






     

    //get  enquiry  data

     $http.get(config.api + "transactions" + "?filter[where][no]=" + $scope.EnqNo).then(function (response) {

         console.log(response.data);

         $scope.EnqTable = response.data.itemDetail;
         console.log($scope.EnqTable)




         $scope.suppliersName1 = response.data.suppliersName;
         $scope.date1 = response.data.date;
         $scope.no1 = response.data.no;
        

     });






 
}]);