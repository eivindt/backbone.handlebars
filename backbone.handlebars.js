// Taken from:  https://gist.github.com/amatiasq/4710958
( function( root, factory) {
        // UMD wrapper.
        if (typeof define === 'function' && define.amd ) {
                define( [ 'handlebars' ], factory );
        } else {
                factory( Handlebars);
        }
} (this, function(hbs) {

	hbs.JavaScriptCompiler.prototype.nameLookup = function(parent, name, type) {
		var result = '(' + parent + ' instanceof Backbone.Model ? ' + parent + '.get("' + name + '") : ' + parent;
		if (/^[0-9]+$/.test(name)) {
			return result + "[" + name + "])";
		} else if (hbs.JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
			return result + "." + name + ')';
		} else {
			return result + "['" + name + "'])";
		}
	}

	return hbs
}))

