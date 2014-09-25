var path = require('path');

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jsdoc: {
			dist: {
				src: [
					'app/**/*.js'
				],
				dest: 'doc'
			}
		},
		jade: {
			compile: {
				options: {
					pretty: false,
					data: {
						debug: false
					}
				},
				files: [
					{
						expand: true,
						cwd: 'ui/',
						src: "**/*.jade",
						dest: "ui/",
						ext: ".html"
					}
				]
			}
		},
		requirejs: {
			"openbiz-ui-css":{
				options:{
					cssIn: "ui/vendor/openbiz/openbiz.css",
					out: "ui/vendor/openbiz/openbiz.min.css",
					preserveLicenseComments:false,
					baseUrl: "./ui",
					useStrict: true
				}
			},
			"openbiz-ui": {
				options: {
					preserveLicenseComments:false,
					baseUrl: "./ui",
					useStrict: true,
					name: "main",
					out: "ui/main.min.js",
					paths:{
						'underscore': 'vendor/underscore/underscore-min',
						'jquery' 	: 'vendor/jquery/jquery-1.11.1.min',		
						
				        'openbiz'	: 'openbiz',
				        'openbiz.custom' : 'vendor/openbiz/openbiz.custom',
				 		'backbone'	: 'vendor/backbone/backbone-min',
						'i18n'		: 'vendor/require/plugins/i18n',
						'text'		: 'vendor/require/plugins/text',
						'async'   	: 'vendor/async/async',
						'parsley'   : 'vendor/openbiz/openbiz.parsley'
						
					},
					shim:{
						'backbone':{
				          deps: [ 'underscore'],
				          exports: 'Backbone'
				        },

				        'underscore':{
				          exports: '_'
				        },         
				        'bootstrap':{
				          deps: ["jquery"],
				          exports: ['jQuery']
				        },        
				        'openbiz':{
				          deps: [ 'underscore','jquery','backbone','parsley']
				        }        
					}
				}
			}
		},
		clean: {
			html: {
				src: [
					'ui/**/*.html'
				]
			}
		}
	});


	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default', ['build']);
	grunt.registerTask('build', ['requirejs','jade','jsdoc']);
};
