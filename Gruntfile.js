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
        src: ['src/ngMaterialIcon.js', 'src/ngMaterialIconMap.js'],
        dest: 'dist/ngMaterialIcon.min.js'
      },
    },

    cssmin: {
      options: {
        banner: '<%= banner %>',
        report: 'gzip'
      },
      minify: {
        src: 'src/ngMaterialIcon.css',
        dest: 'dist/ngMaterialIcon.min.css'
      }
    },

    concat: {
      build: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          'dist/ngMaterialIcon.css': 'src/ngMaterialIcon.css',
          'dist/ngMaterialIcon.js':  [
            'src/ngMaterialIcon.js',
            'src/ngMaterialIconMap.js'
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
