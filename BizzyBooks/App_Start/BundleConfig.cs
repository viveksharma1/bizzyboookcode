using System.Configuration;
using System.Web;
using System.Web.Optimization;

namespace Restaurant
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new StyleBundle("~/bundles/appcss").Include(
                "~/css/bootstrap.min.css",
                "~/css/selectize.bootstrap3.min.css",
                "~/css/select.min.css",
                "~/css/datepicker.css"
                ));


         
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                   "~/js/jquery.js",
                   "~/js/datatables/jquery.dataTables.js",
                   "~/js/nicescroll/jquery.nicescroll.min.js",
                   "~/js/bootstrap.min.js",
                   "~/js/progressbar/bootstrap-progressbar.min.js",
                   "~/js/moment/moment.js",
                    "~/js/prefixfree.min.js",
                   "~/js/datepicker/daterangepicker.js",
                   "~/ScriptsAngular/Angular/angular.js",
                   "~/ScriptsAngular/Angular/angular-route.js",
                   "~/ScriptsAngular/Angular/angular-ui-router.js",
                   "~/ScriptsAngular/Angular/src/plugins/Animate/angular-animate.js",
                   "~/ScriptsAngular/Angular/src/ui-bootstrap-tpls-0.13.4.js",
                   "~/ScriptsAngular/Angular/src/angular-sanitize.min.js",
                   "~/ScriptsAngular/Angular/angular-datatables.js",
                   "~/js/pace/pace.min.js",
                   "~/js/datatables/dataTables.fixedHeader.min.js",
                    "~/js/datatables/dataTables.keyTable.min.js",
                    "~/js/datatables/dataTables.responsive.min.js",
                    "~/js/datatables/dataTables.scroller.min.js",
                    "~/js/datatables/dataTables.bootstrap.js",
                    "~/js/datatables/responsive.bootstrap.min.js",
                    "~/js/alertify.js",
                    "~/js/waitMe.js",
                    "~/js/underscore-min.js",
                    "~/js/fsm-sticky-header.js",
                    "~/js/moment.js",
                    "~/js/datepicker.js",
                    "~/js/Common.js"

               ));
            bundles.Add(new ScriptBundle("~/bundles/appjs")
                .Include(
                "~/js/custom.js",
                //"~/js/ngtimeago.js",
                "~/js/sweetalert-dev.js",
                "~/js/SweetAlert.js",
                "~/js/modernizr.custom.js",
                "~/js/jquery.scrollTo.js",
                "~/ScriptsAngular/Angular/angular.js",
                "~/ScriptsAngular/Angular/angular-route.js",
              //For test of Ui-Select
              "~/ScriptsAngular/Angular/src/angular-sanitize.min.js",
             "~/ScriptsAngular/Angular/src/lodash.min.js",
              "~/ScriptsAngular/Angular/src/select.min.js",
              "~/js/Common.js",
                "~/ScriptsAngular/app/App.js",
                "~/ScriptsAngular/app/Controller/LoginCntrl.js",
                 "~/ScriptsAngular/app/Controller/CustomerCntrl.js",
                 "~/ScriptsAngular/app/Controller/SupplierCntrl.js",
                 "~/ScriptsAngular/app/Controller/CustomerdetailCntrl.js",
                 "~/ScriptsAngular/app/Controller/HomePageCntrl.js",
                 "~/ScriptsAngular/app/Controller/SearchTransactionsCntrl.js",
                 "~/ScriptsAngular/app/Controller/SupplierdetailCntrl.js",
                 "~/ScriptsAngular/app/Controller/InventoryCntrl.js",
                 "~/ScriptsAngular/app/Controller/ImportCntrl.js",
                 "~/ScriptsAngular/app/Controller/BankingCntrl.js",
                 "~/ScriptsAngular/app/Controller/SalesCntrl.js",
                 "~/ScriptsAngular/app/Controller/ExpensesCntrl.js",
                 "~/ScriptsAngular/app/Controller/LogisticsCntrl.js",
                 "~/ScriptsAngular/app/Controller/InvoiceCntrl.js",
                 "~/ScriptsAngular/app/Controller/ReceivePaymentCntrl.js",
                 "~/ScriptsAngular/app/Controller/EnquiryCntrl.js",
                 "~/ScriptsAngular/app/Controller/PurchaseOrderCntrl.js",
                 "~/ScriptsAngular/app/Controller/BillCntrl.js",
                 "~/ScriptsAngular/app/Controller/ExpenseCntrl.js",
                 "~/ScriptsAngular/app/Controller/GRNEntryCntrl.js",
                 "~/ScriptsAngular/app/Controller/AdvancePaymentCntrl.js",
                 "~/ScriptsAngular/app/Controller/MakePaymentCntrl.js",
                 "~/ScriptsAngular/app/Controller/CreateInventoryCntrl.js",
                  "~/ScriptsAngular/app/Controller/EnquirydetailCntrl.js"

                ));

            bundles.Add(new StyleBundle("~/bundles/appcss2").Include(
                "~/css/bootstrap.min.css"
               
                ));

            bundles.Add(new ScriptBundle("~/bundles/appjs2").Include(
                  "~/js/jquery.min.js",
                  "~/ScriptsAngular/Angular/angular.js",
                  "~/ScriptsAngular/Angular/angular-route.js",
                  "~/ScriptsAngular/app/Controller/LoginCntrl.js"

                 ));

            BundleTable.EnableOptimizations = bool.Parse(ConfigurationManager.AppSettings["BundleOptimisation"]); ;

        }
    }


}
