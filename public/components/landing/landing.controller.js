(() => {
  'use strict';
  angular
    .module('randajad')
    .controller('controllerLanding', controllerLanding);

  controllerLanding.$inject = ['$location', 'usersService'];

  function controllerLanding($location, usersService) {
    let vm = this;
  }
})();