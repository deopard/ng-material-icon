# ng-material-icon
AngularJS directive to easily use Google's material icons in all browsers.

## Download
Download using `bower`

`bower install ng-material-icon`

## Compatibility
Tested with AngularJS 1.3, 1.4. Probably works with most of AngularJS versions.

It works with all browsers that AngularJS and Google Material Icon supports.

## Install Guide
### Set up Google Material Icon Fonts
First of all you need to include Google Material Icon Web Fonts. Check out **Icon font for the web** part in http://google.github.io/material-design-icons/ and choose the method that fits your taste.

### Include files in your project
Include minified(or unminified) css and js files in `ng-material-icon/dist` folder to your web project.

### Add dependency for your application
Add the ng-material-icon module as a dependancy to your application module.

```js
var myAppModule = angular.module('MyApp', ['deopard.ngMaterialIcon']);
```

### Using it in AngularJS application
Use is as an element directive.

```html
<icon name="search" size="18"></icon>
```

## Parameters
### name (required)
Name of the icon. You can find full list of icons and names at http://www.google.com/design/icons/.

### size (default: 24)
Size of the icon. Should be written in numbers. Possible values are Google's recommended sizes (18/24/36/48). You can also add custom sizes in your stylesheet and use that number as below.

```css
.material-icons.md-22 { font-size: 22px; }
```

### is-active (default: true)
Whether icon is active or not. Possible values are (true/false)

### color (default: 'light')
Icon's color. Possible values are (dark/light)
