if (typeof (RAGHAV.Utilities) == undefined || RAGHAV.Utilities == null) { RAGHAV.Utilities = {}; }

if (typeof (RAGHAV.Utilities.UrlHelper) == undefined || RAGHAV.Utilities.UrlHelper == null) { RAGHAV.Utilities.UrlHelper = {}; }


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
	var my = {
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
				return "";
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











