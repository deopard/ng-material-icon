/**
  * @ngdoc directive
  * @name remember:icon
  * @description
  * Google Material Design Icon set을 사용하여 icon 표현
  */
(function () {
  angular
    .module('ng-material-icon')
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
      var size = attrs.size;
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
