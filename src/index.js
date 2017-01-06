import templateUrl from './app-container.html';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

const app = angular.module('app', [
    uiRouter
])
    .component('test', {
        templateUrl
    });


export default app;