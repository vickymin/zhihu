module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['./js/home.js','./js/login.js']
    },
    uglify: {
      compressjs: {
        files: {
          './js/home.min.js': ['./js/home.js'],
          './js/login.min.js': ['./js/login.js']
        }
      }
    },
    cssmin: {
      target: {
        files: {
          './style/home.min.css': ['./style/home.css'],
          './style/login.min.css': ['./style/login.css']
        }
      }
    },
    watch: {
      scripts: {
        files: ['./js/home.js', './js/login.js'],
        tasks: ['jshint','uglify']
      },
      css: {
        files: ['./style/home.css', './style/login.css'],
        tasks: ['cssmin']
      },
      livereload: {
          options: {
              livereload: '<%= connect.options.livereload %>'
          },
          files: [
              'index.html',
              'style/*',
              'js/*',
          ]
      }
    },
    connect: {
      options: {
          port: 2333,
          open: true,
          livereload: 35729,
          hostname: 'localhost'
      },
      server: {
        options: {
          port: 2334,
          base: '.'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('checkjs',['jshint']);
  grunt.registerTask('compressjs',['jshint','uglify']);
  grunt.registerTask('compresscss',['cssmin']);
  grunt.registerTask('watchit',['jshint','uglify','cssmin','connect','watch']);
  grunt.registerTask('default');

};
