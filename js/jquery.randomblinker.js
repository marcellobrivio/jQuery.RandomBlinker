/*
 * jQuery.RandomBlinker
 * http://www.marcellobrivio.com/jquery.randomblinker
 *
 * Created by Marcello Brivio
 * http://www.marcellobrivio.com
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function ( $ ) {
	$.fn.randomblink = function( options ) {
		
		/* CONFIG PARAMS */
		var settings = $.extend({
            // These are the defaults.
            rows: 3,					// Number of rows for the ovarlay table
			cols: 7,					// Number of columns for the ovarlay table
			onRatio: 0.1,				// Ratio of cells turned on (0-1)
			offRatio: 0.7,				// Ratio of cells turned off (0-1)
			interval: 300				// Frequency of the animation in msec
        }, options );
		
		// Print the matrixTab table using the custom values above
		var stampa = '<table id=\"matrixTab\">';
		for (var i=0; i<settings.rows; i++) {
			stampa += '<tr id=\"tr' + i +  '\">';
			for (var t=0; t<settings.cols; t++) {
				stampa += '<td class=\"td' + t +  '\">&nbsp;</td>';
			}
			stampa += '</tr>';
		}
		stampa += '</table>';
		
		$(this).append(stampa);
		
		function activateCells(){
			for (var y=0; y<settings.rows; y++) {
				for (var z=0; z<(settings.cols*settings.onRatio); z++) {
					// A set of random numbers is generated for each row
					var cellaOn = Math.floor(Math.random()*settings.cols);
					// The class .on is applied to random cells
					$('#tr' + y + ' .td' + cellaOn).removeClass('off');
					$('#tr' + y + ' .td' + cellaOn).addClass('on');
				}
			}
		}
		
		function deactivateCells(){
			for (var y=0; y<settings.rows; y++) {
				for (var z=0; z<(settings.cols*settings.offRatio); z++) {
					// A set of random numbers is generated for each row
					var cellaOn = Math.floor(Math.random()*settings.cols);
					// The class .off is applied to random cells
					$('#tr' + y + ' .td' + cellaOn).removeClass('on');
					$('#tr' + y + ' .td' + cellaOn).addClass('off');
				}
			}
		}
		
		// The 2 functions are executed at the given interval
		setInterval(activateCells, settings.interval);
		setInterval(deactivateCells, settings.interval);
   };
 
}( jQuery ));