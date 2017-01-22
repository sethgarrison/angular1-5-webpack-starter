//THIRD PARTY
import angular from 'angular';

import templateUrl from './nav.html';
import './style.scss';

const myNav = angular.module('component.nav', [])
    .component('myNav', {
        templateUrl
    });

export default myNav.name;
