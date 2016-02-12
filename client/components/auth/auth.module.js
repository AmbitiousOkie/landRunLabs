'use strict';

angular.module('landRunLabsApp.auth', [
  'landRunLabsApp.constants',
  'landRunLabsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
