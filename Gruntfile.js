// Generated on 2013-10-22 using generator-webapp 0.4.3
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  grunt.loadNpmTasks('assemble');
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      compass: {
        files: ['<%= yeoman.app %>/styles/**/*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
      },
      styles: {
        files: ['<%= yeoman.app %>/scss/{,*/}*.css'],
        tasks: ['copy:styles', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.tmp/*.html',
          '.tmp/css/*.css',
          '{.tmp,<%= yeoman.app %>}/js/{,*/}*.js',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      assemble: {
        files: ['<%= yeoman.app %>/assemble/layouts/*.hbs',
                '<%= yeoman.app %>/assemble/pages/*.hbs',
                '<%= yeoman.app %>/assemble/partials/*.hbs'],
        tasks: ['assemble']
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp/**/*',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp/**/*'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/js/{,*/}*.js',
        '!<%= yeoman.app %>/js/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },
    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
        }
      }
    },
    assemble: {
      options: {
        flatten: true,
        layout: 'default.hbs',
        layoutdir: '<%= yeoman.app %>/assemble/layouts',
        assets: 'dist/images',
        partials: ['<%= yeoman.app %>/assemble/partials/*.hbs'],
        helpers: ['helper-path'],
        plugins: ['permalinks'],
        permalinks: {
          structure: ':basename/index.html'
        }
      },
      dist: {
        files: {
          '.tmp/': ['<%= yeoman.app %>/assemble/pages/*.hbs']
        }
      }
    },
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/styles',
        cssDir: '.tmp/css',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/js',
        fontsDir: '<%= yeoman.app %>/scss/fonts',
        importPath: '<%= yeoman.app %>/_bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/css/fonts',
        relativeAssets: false,
        assetCacheBuster: false
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/images/generated'
        }
      },
      server: {
        options: {
          debugInfo: true
        }
      },
      test: {
        options: {
          debugInfo: false
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/css/',
          src: '{,*/}*.css',
          dest: '.tmp/css/'
        }]
      }
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
      dist: {}
    },*/
    'bower-install': {
      app: {
        html: '<%= yeoman.app %>/index.html',
        ignorePath: '<%= yeoman.app %>/'
      }
    },
    // not enabled since usemin task does concat and uglify
    // check index.html to edit your build targets
    // enable this task if you prefer defining your build targets here
    /*uglify: {
      dist: {}
    },*/
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/js/{,*/}*.js',
            '<%= yeoman.dist %>/css/{,*/}*.css',
            '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<%= yeoman.dist %>/css/fonts/{,*/}*.*'
          ]
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '.tmp/index.html'
    },
    usemin: {
      options: {
        dirs: ['<%= yeoman.dist %>']
      },
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/css/{,*/}*.css']
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: ['**']
    },

    cssmin: {
      // This task is pre-configured if you do not wish to use Usemin
      // blocks for your CSS. By default, the Usemin block from your
      // `index.html` will take care of minification, e.g.
      //
      //     <!-- build:css({.tmp,app}) styles/main.css -->
      //
      // dist: {
      //     files: {
      //         '<%= yeoman.dist %>/css/main.css': [
      //             '.tmp/css/{,*/}*.css',
      //             '<%= yeoman.app %>/scss/{,*/}*.css'
      //         ]
      //     }
      // }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '.tmp',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Put files not handled in other tasks here
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>',
            dest: '<%= yeoman.dist %>',
            src: [
              '*.{ico,png,txt}',
              '.htaccess',
              'images/{,*/}*.{webp,gif}',
              'styles/fonts/{,*/}*.*'
            ]
          },
          {
            expand: true,
            cwd: '<%= yeoman.app %>/_bower_components/font-awesome/fonts/',
            src: ['**', '!*.otf'],
            dest: '<%= yeoman.dist %>/fonts/'
          }
        ]
      },
      styles: {
        expand: true,
        dot: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/css/',
        src: '{,*/}*.css'
      },
      fonts: {
        expand: true,
        dot: true,
        cwd: '<%= yeoman.app %>/_bower_components/font-awesome/fonts/',
        dest: '.tmp/fonts/',
        src: ['**', '!.otf']
      }
    },
    modernizr: {
      devFile: '<%= yeoman.app %>/_bower_components/modernizr/modernizr.js',
      outputFile: '<%= yeoman.dist %>/js/vendor/modernizr.js',
      files: [
        '<%= yeoman.dist %>/js/{,*/}*.js',
        '<%= yeoman.dist %>/css/{,*/}*.css',
        '!<%= yeoman.dist %>/js/vendor/*'
      ],
      uglify: true
    },

    recess: {
      dist: {
        options: {
          compile: false,              // Compiles CSS or LESS. Fixes white space and sort order.
          compress: false,             // Compress your compiled code
          noIDs: true,                 // Doesn't complain about using IDs in your stylesheets
          noJSPrefix: true,            // Doesn't complain about styling .js- prefixed classnames
          noOverqualifying: true,      // Doesn't complain about overqualified selectors (ie: div#foo.bar)
          noUnderscores: true,         // Doesn't complain about using underscores in your class names
          noUniversalSelectors: true,  // Doesn't complain about using the universal * selector
          prefixWhitespace: true,      // Adds whitespace prefix to line up vender prefixed properties
          strictPropertyOrder: false,  // Complains if not strict property order
          zeroUnits: true,            // Doesn't complain if you add units to values of 0
          //includePath: mixed          // Additional paths to look for `@import`'ed LESS files.  Accepts a string or an array of strings.
        },
        src: ['.tmp/css/main.css']
      }
    },
    concurrent: {
      server: [
        'assemble',
        'compass',
        'copy:styles',
        'copy:fonts'
      ],
      test: [
        'copy:styles',
        'copy:fonts'
      ],
      dist: [
        'compass',
        'copy:styles',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    }
  });

  grunt.registerTask('server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'mocha'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'assemble',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'cssmin',
    'uglify',
    'modernizr',
    'copy:dist',
    //'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);

  grunt.registerTask('deploy', [
    'build',
    'gh-pages'
  ]);

  grunt.registerTask('csslint', [
    'clean:server',
    'compass:test',
    'recess'
  ]);


};
