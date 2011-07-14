if (typeof RAGHAV === 'undefined' || !RAGHAV) {

	// The RAGHAV global namespace object.  If RAGHAV is already defined, the
	// existing RAGHAV object will not be overwritten so that defined

	var RAGHAV = {};
}

//Loose Augmentation
//Ref:http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
var RAGHAV = (function(RAGHAV) {

	//This class is used to log the message in console
	//Usage:
	//RAGHAV.Logging.log('This is test');
	//RAGHAV.Logging.debug('This is test');
	//RAGHAV.Logging.info('This is test');
	//RAGHAV.Logging.warn('This is test');
	//RAGHAV.Logging.error('This is test');

	RAGHAV.Logging = (function() {
		var myConsole;
		if (typeof window.console === 'undefined') {
			//no console present
			myConsole = {
				log: function(msg) { },
				debug: function(msg) { },
				info: function(msg) { },
				warn: function(msg) { },
				error: function(msg) { }
			};
		}
		else {
			myConsole = window.console;
		}
		return myConsole;
	} ());
	return RAGHAV;
} (RAGHAV || {}));
	






