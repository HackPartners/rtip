var RailTech;
(function (RailTech) {
    var Ticketing;
    (function (Ticketing) {
        angular.module('ticketing', [
            // External
            'ionic',
            'ionic-material',
            'ionMdInput',
            'ngMaterial'
        ]);
    })(Ticketing = RailTech.Ticketing || (RailTech.Ticketing = {})); // Ticketing
})(RailTech || (RailTech = {})); // RailTech
