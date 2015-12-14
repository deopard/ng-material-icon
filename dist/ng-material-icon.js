/*! 
 * ng-material-icon v1.0.0
 * https://github.com/deopard/ng-material-icon#readme
 * Copyright (c) 2015 Tom Kim
 * License: MIT
 */
/**
  * @ngdoc directive
  * @name ng-material-icon:icon
  * @description
  * Create icons using Google's material design icon set
  */
(function () {
  angular
    .module('deopard.ngMaterialIcon')
    .directive('icon', Icon);

  Icon.$inject = ['MaterialIconMap'];

  function Icon (MaterialIconMap) {
    var directive = {
      template: '<i class="material-icons" aria-hidden="true"></i>',
      restrict: 'E',
      scope: true,
      replace: true,
      compile: compileFunc
    };

    return directive;

    function compileFunc (el, attrs, transclude) {
      // Icon's name
      var name = attrs.name;

      // Icon's size in number (18/24/36/48)
      var size = attrs.size || 24;

      // Whether icon is active or not. (true|false)
      var isActive = attrs['is-active'] !== 'false';

      // Icon's color. (dark|light) default is  'light'
      var color = attrs.color || 'light';

      name = MaterialIconMap[name];

      el.html(name);
      el.addClass(printClass());

      function printClass () {
        return [
          size ? 'md-' + size : '',
          isActive ? '' : 'md-inactive',
          'md-' + color
        ].join(' ');
      }
    }
  }
})();
