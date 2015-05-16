'use strict';

module.exports = function (config) {
    config.set({

        basePath: '',

        client: {
            mocha: {
                timeout: 8000
            }
        },

        frameworks: ['mocha', 'chai'],

        files: [
            'src/**/*.js',
            'tests/**/*.spec.js'
        ],

        // Include source files that you want to generate coverage for.
        // Don't include test files or library files.
        preprocessors: {
            'src/**/*.js': ['coverage']
        },

        junitReporter: {
            outputFile: 'fe-test-results.xml'
        },

        coverageReporter: {
            dir: './',

            // Order of reporters is important. Cobertura needs to be first.
            reporters: [
                { type: 'cobertura', subdir: '.', file: 'fe-coverage-results.xml' },
                { type: 'text' }
            ]
        },

        reporters: ['progress', 'junit', 'coverage'],

        port: 9876,
        colors: true,
        autoWatch: false,
        singleRun: true,

        logLevel: config.LOG_INFO,

        browsers: ['PhantomJS']

    });
};