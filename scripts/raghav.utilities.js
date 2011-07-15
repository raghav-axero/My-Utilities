
if (typeof RAGHAV.Utilities === 'undefined' || !RAGHAV.Utilities) {
	RAGHAV.Utilities = {};
}

if (typeof (RAGHAV.Utilities.UrlHelper) === 'undefined' || RAGHAV.Utilities.UrlHelper === null) {
	RAGHAV.Utilities.UrlHelper = {};
}


/*
* This class contains various helper methods related to url
*
* Depends:
*	raghav.js
*
* Usage:
*	RAGHAV.Utilities.UrlHelper.getQueryStringParamValue("test") 
*	RAGHAV.Utilities.UrlHelper.replaceURLWithHTMLLink("https://github.com") //output: <a href="https://github.com">https://github.com</a>
*/
RAGHAV.Utilities.UrlHelper = (function() {
	'use strict';
	var my = {
		changeCurrentURLHash: function(value) {
			///	<summary>
			///	Changes that part of current URL that follows the # symbol.
			///	</summary>
			///	<param name="value" type="String">The value which is to be set as hash part</param>
			window.location.hash = value;
		},
		encode: function(uri) {
			///	<summary>
			///	This function encodes special characters. In addition, it encodes the following characters: , / ? : @ & = + $ #
			///	</summary>
			///	<param name="url" type="String">The URI to be encoded</param>
			///	<returns type="String">The encoded URI</returns>
			return encodeURIComponent(uri);
		},
		decode: function(uri) {
			///	<summary>
			///	This function decodes special characters. In addition, it decodes the following characters: , / ? : @ & = + $ #
			///	</summary>
			///	<param name="url" type="String">The URI to be decoded</param>
			///	<returns type="String">The decoded URI</returns>
			return decodeURIComponent(uri);
		},
		getCurrentURL: function() {
			///	<summary>
			///	Gets the current URL.
			///	</summary>
			///	<returns type="String">The current URL</returns>
			return window.location.href;
		},
		getCurrentURLHash: function() {
			///	<summary>
			///	Gets that part of current URL that follows the # symbol, including the # symbol.
			/// Example: '#test'  from 'http://[www.google.com]:80/search?q=demo#test'
			///	</summary>
			///	<returns type="String">The hash part of current URL</returns>
			return window.location.hash;
		},
		getCurrentURLHost: function() {
			///	<summary>
			///	Gets the host name (without the port number or square brackets)of current URL.
			/// Example: 'www.google.com'  from 'http://[www.google.com]:80/search?q=demo#test'
			///	</summary>
			///	<returns type="String">The host name</returns>
			return window.location.hostname;
		},
		getCurrentURLHostWithPort: function() {
			///	<summary>
			///	Gets the host name with port number of current URL.
			/// Example: '[www.google.com]:80'  from 'http://[www.google.com]:80/search?q=demo#test'
			///	</summary>
			///	<returns type="String">The host name</returns>
			return window.location.host;
		},
		getCurrentURLPath: function() {
			///	<summary>
			///	Gets the path (relative to the host) of current URL.
			/// Example: '/search'  from 'http://[www.google.com]:80/search?q=demo#test'
			///	</summary>
			///	<returns type="String">The path</returns>
			return window.location.pathname;
		},
		getCurrentURLPathAndQuery: function() {
			///	<summary>
			///	Gets the path (relative to the host) and querystring of current URL.
			/// Example: '/search?q=demo'  from 'http://[www.google.com]:80/search?q=demo#test'
			///	</summary>
			///	<returns type="String">The path and querystring of current URL</returns>
			return window.location.pathname + window.location.search;
		},
		getCurrentURLPathQueryAndHash: function() {
			///	<summary>
			///	Gets the path (relative to the host) + querystring + hash part of current URL.
			/// Example: '/search?q=demo#test'  from 'http://[www.google.com]:80/search?q=demo#test'
			///	</summary>
			///	<returns type="String">The path + querystring + hash part of current URL</returns>
			return window.location.pathname + window.location.search + window.location.hash;
		},
		getCurrentURLPort: function() {
			///	<summary>
			///	Gets the current URL port.
			/// Example: '80'  from 'http://[www.google.com]:80/search?q=demo#test'
			///	</summary>
			///	<returns type="String">The port of current URL</returns>
			return window.location.href;
		},
		getCurrentURLProtocol: function() {
			///	<summary>
			///	Gets the protocol of current URL.
			/// Example: 'http:'  from 'http://[www.google.com]:80/search?q=demo#test'
			///	</summary>
			///	<returns type="String">The protocol of current URL</returns>
			return window.location.protocol;
		},
		getCurrentURLQueryString: function() {
			///	<summary>
			///	Gets the querystring of current URL (i.e. the part of the URL that follows the ? symbol, including the ? symbol.)
			/// Example: '?q=demo'  from 'http://[www.google.com]:80/search?q=demo#test'
			///	</summary>
			///	<returns type="String">The querystring of current URL</returns>
			return window.location.search;
		},
		getQueryStringParamValue: function(parameterName, url) {
			///	<summary>
			///		Gets the value of parameter from the querystring.
			///	</summary>
			///	<param name="parameterName" type="String">The parameter name in the querystring whose value is needed</param>
			///	<param name="url" type="String" optional="true">The URL</param>
			///	<returns type="String">The value of the parameter</returns>
			parameterName = parameterName.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
			var regexS = "[\\?&]" + parameterName + "=([^&#]*)";
			var regex = new RegExp(regexS);
			var results = regex.exec(url || window.location.href);
			if (results == null)
				return '';
			else
				return decodeURIComponent(results[1].replace(/\+/g, " "));
		},
		replaceURLWithHTMLLink: function(url) {
			///	<summary>
			///		Replaces the plain text url to anchor link.
			///	</summary>
			///	<param name="url" type="String">The url to replace</param>
			///	<returns type="String">The anchor containing the url</returns>		
			var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
			return url.replace(exp, '<a href="$1">$1</a>');
		}
	};
	return my;
} ());




