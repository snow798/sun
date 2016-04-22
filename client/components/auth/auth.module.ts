'use strict';

angular.module('text55App.auth', [
  'text55App.constants',
  'text55App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
