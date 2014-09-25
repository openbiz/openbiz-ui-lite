"use strict";

if(typeof openbizUrl == 'undefined') openbizUrl = '/lib/openbiz';

requirejs.config({
	config:{
		i18n:{
			locale: 'en-us' //force to use this locale for test translation
		}
	},
	waitSeconds:0,
	paths:{
		'underscore': 'vendor/underscore/underscore-min',
		'jquery' 	: 'vendor/jquery/jquery-1.11.1.min',		
        'openbiz'	: 'openbiz',
        'openbiz.custom' : 'vendor/openbiz/openbiz.custom',
 		'backbone'	: 'vendor/backbone/backbone-min',
		'i18n'		: openbizUrl+'/vendor/require/plugins/i18n',
		'text'		: openbizUrl+'/vendor/require/plugins/text',
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
});

define(['openbiz',"async"],
	function(openbiz,async){
 
			openbiz.init();		
			var appRouter = new openbiz.Router();
			window.openbiz = openbiz;
			window.async = async;

			// trigger event for onOpenbizLoaded
			if( typeof openbizEventsDelegate =='object' && 
				typeof openbizEventsDelegate.onOpenbizLoaded =='function' ){
				openbizEventsDelegate.onOpenbizLoaded.apply(this);
			}else{
				Backbone.history.start();
			}
		
		
	}
);
