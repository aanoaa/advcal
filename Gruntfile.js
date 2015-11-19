module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jekyll: {
      options: {
        config: '_config.yml'
      },
      github: {
        options: {
          raw: 'github: true'
        }
      }
    },
    htmlmin: {
      docs: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          minifyCSS: true,
          minifyJS: true,
          removeAttributeQuotes: true,
          removeComments: true
        },
        expand: true,
        cwd: '_gh_pages',
        dest: '_gh_pages',
        src: ['**/*.html']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      docs: {
        src: 'docs/assets/js/src/*.js'
      }
    },
    uglify: {
      options: {
        compress: {
          warnings: false
        },
        mangle: true,
        preserveComments: 'some'
      },
      docs: {
        src: ['docs/assets/js/src/**/*.js'],
        dest: 'docs/assets/js/docs.min.js'
      }
    }
  });
  require('load-grunt-tasks')(grunt, {
    scope: 'devDependencies'
  });
  require('time-grunt')(grunt);
  // Task for docs
  grunt.registerTask('docs', ['jshint:docs', 'uglify:docs']);

  grunt.registerTask('default', ['docs', 'jekyll:github', 'htmlmin']);
};
