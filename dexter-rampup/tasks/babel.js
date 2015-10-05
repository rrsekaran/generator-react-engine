'use strict';
var path = require('path');
var babel = require('babel-core');

module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-babel');

	return {
        options: {
            sourceMap: false
        },
        all: {
            files: [{
                expand: true,
                cwd: 'src',
                src: ['**/*.js'],
                dest: '.dist'              
            }]
        }
    };
};