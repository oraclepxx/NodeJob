/**
 * Created by xinpan on 04/30/2015.
 */

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            test: {
                src: ['testcase.js'],
                options: {
                    junit: {
                        path: 'junit',
                        consolidate: false
                    }
                }
            }
        }
    });


    //grunt.initConfig({
    //    jasmine_nodejs: {
    //        // task specific (default) options
    //        pkg: grunt.file.readJSON('package.json'),
    //        options: {
    //            specNameSuffix: "spec.js", // also accepts an array
    //            helperNameSuffix: "helper.js",
    //            useHelpers: true,
    //            // configure one or more built-in reporters
    //            reporters: {
    //                console: {
    //                    colors: true,
    //                    cleanStack: 1,       // (0|false)|(1|true)|2|3
    //                    verbosity: 3,        // (0|false)|1|2|(3|true)
    //                    listStyle: "indent", // "flat"|"indent"
    //                    activity: false
    //                },
    //                junit: {
    //                     savePath: "",
    //                     filePrefix: "junit-report-",
    //                     consolidate: true,
    //                     useDotNotation: true
    //                }
    //                // nunit: {
    //                //     savePath: "./reports",
    //                //     filename: "nunit-report.xml",
    //                //     reportName: "Test Results"
    //                // },
    //                // terminal: {
    //                //     color: false,
    //                //     showStack: false,
    //                //     verbosity: 2
    //                // },
    //                // teamcity: true,
    //                // tap: true
    //            }
    //            // add custom Jasmine reporter(s)
    //            //customReporters: []
    //        }
    //        //your_target: {
    //        //    // target specific options
    //        //    options: {
    //        //        useHelpers: false
    //        //    },
    //        //    // specs files
    //        //    specs: [
    //        //        'specs/*.js',
    //        //    ]
    //        //}
    //    }
    //});

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    //grunt.loadNpmTasks('grunt-jasmine-nodejs');

    // Default task(s).
    grunt.registerTask('go', ['jasmine']);

};
