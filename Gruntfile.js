/**
 * Created by xinpan on 04/30/2015.
 */

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            test: {
                src: ['test/testcase.js'],
                options: {
                    junit: {
                        path: 'junit'
                    }
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Default task(s).
    grunt.registerTask('go', ['jasmine']);

};
