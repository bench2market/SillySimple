var SILLY = (function(module) {

	module.DoIt = function(resultObject) {
		resultObject.prepend('Hello World! ' + Date() + '<br/>');
	};
	
	return module;
}(SILLY || {}));