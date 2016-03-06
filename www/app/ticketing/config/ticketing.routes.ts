"use strict";

module RailTech {
export module Ticketing {

angular.module('ticketing')
    .config(function($stateProvider) {

        $stateProvider
            .state('app.ticketing', {
                url: '/ticketing',
                abstract: true,
                template: "<ion-nav-view>"
            })

            .state('app.ticketing.search', {
                url: '/search',
                templateUrl: 'app/ticketing/search/search.html',
                controller: 'SearchController as $ctrl'
            })

            .state('app.ticketing.results', {
                url: '/results',
                templateUrl: 'app/ticketing/results/results.html',
                controller: 'ResultsController as $ctrl'
            });
    });
}
}