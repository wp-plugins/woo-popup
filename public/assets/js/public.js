(function($){
	$(function(){
		"use strict";

		// Vars from PHP
		var popupTheme = plugin_options_vars.theme,
			appearance = plugin_options_vars.appearance,
			showPopup,
			timestamp = new Date().getUTCMilliseconds();

		// Cookies functions
		function setCookie(name,value,days) {
		    if (days) {
		        var date = new Date();
		        date.setTime(date.getTime()+(days*24*60*60*1000));
		        var expires = "; expires="+date.toGMTString();
		    }
		    else var expires = "";
		    document.cookie = name+"="+value+expires+"; path=/";
		}

		function getCookie(name) {
		    var nameEQ = name + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0;i < ca.length;i++) {
		        var c = ca[i];
		        while (c.charAt(0)==' ') c = c.substring(1,c.length);
		        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		    }
		    return null;
		}

		function deleteCookie( name ) {
		   document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		}

		// If popup shows on returning visitor or if first time page visit(no cookie set), set showPopup to true and set a Cookie, else false
		if( appearance === 'repeat' ){
			showPopup = true;
			if(getCookie('woo-popup_ck') !== null){
				deleteCookie('woo-popup_ck');
			}
		}else if( appearance === 'once'  &&  getCookie('woo-popup_ck') === null ){
			setCookie('woo-popup_ck', timestamp, 15);
			showPopup = true;
		}else{
			showPopup = false;
		}

		if(showPopup === true){
			//Append the inline content to the body
			$(woo_popup['popup_content']).appendTo('body');

			// Init Lightbox
			$().prettyPhoto({
				opacity: 0.80, /* Value between 0 and 1 */
				show_title: true, /* true/false */
				allow_resize: true, /* Resize the photos bigger than viewport. true/false */
				theme: popupTheme, /* light_rounded / dark_rounded / light_square / dark_square / facebook */
				horizontal_padding: 20, /* The padding on each side of the picture */
				autoplay: true, /* Automatically start videos: True/False */
				modal: false, /* If set to true, only the close button will close the window */
				deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
				keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
				callback: function(){}, /* Called when prettyPhoto is closed */
				social_tools: '<div class="pp_social"><div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="http://www.facebook.com/plugins/like.php?locale=en_US&href='+location.href+'&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div></div>' /* html or false to disable */
			});

			//Open that content on load with prettyPhoto
			$.prettyPhoto.open('#woopopup');
		}

	});
})(jQuery);

