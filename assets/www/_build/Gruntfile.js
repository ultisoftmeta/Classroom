module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        // Metadata.
        meta: {
            basePath: '../',
            srcPath: '../',
            deployPath: '../deploy/'
        },

        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',

        // Task configuration.
        concat: {
            options: {
                stripBanners: true
            },
            dist: {
                src: ['<%= meta.srcPath %>lib/jquery.min.js', '<%= meta.srcPath %>lib/angular.min.js','<%= meta.srcPath %>lib/jq.appframework.js', '<%= meta.srcPath %>lib/appframework.ui.min.js','<%= meta.srcPath %>lib/appframeworkos-min.js', '<%= meta.srcPath %>js/index.min.js','<%= meta.srcPath %>js/main.min.js', '<%= meta.srcPath %>js/bagpack.js', '<%= meta.srcPath %>lib/kinect.min.js','<%= meta.srcPath %>js/drawcontrols.min.js','<%= meta.srcPath %>js/localstorage.min.js','<%= meta.srcPath %>js/stopwatch.min.js'],
                dest: '<%= meta.deployPath %>scripts/app.js'
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task.
    grunt.registerTask('default', ['concat']);

};
