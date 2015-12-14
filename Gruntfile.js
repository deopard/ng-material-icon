module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! \n * <%= pkg.title || pkg.name %> v<%= pkg.version %>\n' +
      ' * <%= pkg.homepage %>\n' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
      ' * License: <%= pkg.license %>\n' +
      ' */\n',

    uglify: {
      options: {
        banner: '<%= banner %>',
        report: 'gzip'
      },
      build: {
        src: ['src/ng-material-icon.js', 'src/ng-material-icon-map.js'],
        dest: 'dist/ng-material-icon.min.js'
      },
    },

    cssmin: {
      options: {
        banner: '<%= banner %>',
        report: 'gzip'
      },
      minify: {
        src: 'src/ng-material-icon.css',
        dest: 'dist/ng-material-icon.min.css'
      }
    },

    concat: {
      build: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          'dist/ng-material-icon.css': 'src/ng-material-icon.css',
          'dist/ng-material-icon.js':  [
            'src/ng-material-icon.js',
            'src/ng-material-icon-map.js'
          ],
        }
      }
    },

    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['uglify', 'concat:build'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: ['src/*.css'],
        tasks: ['cssmin', 'concat:build'],
        options: {
          spawn: false,
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'cssmin', 'concat:build']);
  grunt.registerTask('build', ['default']);
};
