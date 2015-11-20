module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jekyll: {
      options: {
        config: '_config.yml'
      },
      docs: {},
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
    },
    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        sourceMap: true,
        advanced: false
      },
      docs: {
        src: ['docs/assets/css/src/**/*.css'],
        dest: 'docs/assets/css/docs.min.css'
      }
    },
    csscomb: {
      options: {
        config: '.csscomb.json'
      },
      docs: {
        src: 'docs/assets/css/src/docs.css',
        dest: 'docs/assets/css/src/docs.css'
      }
    },
    watch: {
      docs: {
        files: ['docs/assets/css/src/docs.css', 'docs/assets/js/src/docs.js'],
        tasks: ['docs-js', 'cssmin:docs']
      }
    }
  });
  require('load-grunt-tasks')(grunt, {
    scope: 'devDependencies'
  });
  require('time-grunt')(grunt);
  // Task for docs
  grunt.registerTask('docs-js', ['jshint:docs', 'uglify:docs']);
  grunt.registerTask('docs-css', ['csscomb:docs', 'cssmin:docs']);
  grunt.registerTask('docs', ['docs-js', 'docs-css']);

  grunt.registerTask('default', ['docs', 'jekyll:github', 'htmlmin']);
};
