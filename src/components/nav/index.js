//THIRD PARTY
import angular from 'angular';

require('./style.scss');
//EXTERNAL MODULES

//INTERNAL

const module = angular.module('component.nav', [])
    .component('myNav', {
        template: require('./nav.html')
    });
export default module.name;