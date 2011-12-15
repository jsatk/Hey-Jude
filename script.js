// Author: Jesse Atkinson
// Email: jesse.s.atkinson@gmail.com
// Twitter: @jessedarko
// GitHub: https://github.com/jessedarko/Hey-Jude--JS-Remix-
// Description: My first attempt to have some fun with logic and JavaScript and attempt to
// use a combination of object literal syntax and arrays to accomplish this. 
;(function (window, undefined) {
"use strict";

    var theBeatles = {
	    heyJude: [
	        [  // Line 1
	            " make it bad. Take a sad song and make it better. ",
	            " be afraid. You were made to go out and get her. ",
	            " let me down. You have found her, now go and get her. "
	        ],
	        [ // Line 2
	            " let her into your heart. ",
	            " let her under your skin. "
	        ],
	        [ // Line 3
	            " can start ",
	            " begin "
	        ]
    	],
        str: ["Hey, Jude. Don't", "Remember to", "Then you", "to make it better. "],

	    song: function () {
	        var len = this.heyJude.length,
	            lyrics = "", i;
	        
	        for (i = 0; i < len; i++) {
	            var j;

	            for (j = 0; j < len; j++) {
	            	if (i + 1 === len && j > 0) {
	            		var x = this.heyJude[j].length - 1;

		                lyrics += this.str[j] + this.heyJude[j][x];
	            	} else {
	               		lyrics += this.str[j] + this.heyJude[j][i];
	               	}
	            }

	            lyrics += this.str[this.heyJude.length];
	        }

	        lyrics += "better better betTER BETTER WAAA! ";

	        for (i = 0; i < 214; i++) {
	        	lyrics += "NA ";
	        }

	        document.getElementById("heyJude").innerHTML = lyrics;
	    }
	};

    theBeatles.song();

    window.theBeatles = theBeatles || {};

}(this));