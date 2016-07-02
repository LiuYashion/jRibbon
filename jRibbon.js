


(function($) {
    $.fn.jRibbon = function(options) {
    	
        return this.each(function() {
	        var defaults = {
		        'frontColor': 'lightblue',
		        'backColor': 'blue'
		   	};
		   	var settings = $.extend({},defaults, options);

            var element = '<div class="whole" style="position: absolute;right: -4px;top: -6px;z-index: 999;"><table cellpadding="0" cellspacing="0"><tr class="row-1"><td style="width: 0;height: 0;position: relative;border-top: solid 15px transparent;border-right: solid 10px transparent;border-bottom: solid 15px transparent;border-left: solid 10px transparent;"><div class="bit-div" style="width: 0;height: 0;border-top: solid 3px transparent;border-right: solid 2px transparent;border-bottom: solid 3px transparent;border-left: solid 2px transparent;position: absolute;;right: -10px;top: -15px;border-color:transparent '
            + settings.backColor + ' ' + settings.backColor  
            + ' transparent;"></div></td><td style="width: 0;height: 0;position: relative;border-top: solid 15px transparent;border-right: solid 10px transparent;border-bottom: solid 15px transparent;border-left: solid 10px transparent;border-color: '
            + settings.frontColor + ' ' + settings.frontColor  
            + ' transparent transparent;"><div class="bit-div" style="width: 0;height: 0;border-top: solid 3px transparent;border-right: solid 2px transparent;border-bottom: solid 3px transparent;border-left: solid 2px transparent;position: absolute;left: -10px;top: -15px;border-color:transparent transparent '
            + settings.backColor + ' ' + settings.backColor  
            + ' ;"></div></td><td style="width: 0;height: 0;position: relative;border-top: solid 15px transparent;border-right: solid 10px transparent;border-bottom: solid 15px transparent;border-left: solid 10px transparent;border-color: transparent transparent '
            + settings.frontColor + ' ' + settings.frontColor  
            + ' ;"></td></tr><tr class="row-2"><td style="width: 0;height: 0;position: relative;border-top: solid 15px transparent;border-right: solid 10px transparent;border-bottom: solid 15px transparent;border-left: solid 10px transparent;"></td><td style="width: 0;height: 0;position: relative;border-top: solid 15px transparent;border-right: solid 10px transparent;border-bottom: solid 15px transparent;border-left: solid 10px transparent;"></td><td style="width: 0;height: 0;position: relative;border-top: solid 15px transparent;border-right: solid 10px transparent;border-bottom: solid 15px transparent;border-left: solid 10px transparent;border-color: '
            + settings.frontColor + ' ' + settings.frontColor  
            + ' transparent transparent;"><div class="bit-div" style="width: 0;height: 0;border-top: solid 3px transparent;border-right: solid 2px transparent;border-bottom: solid 3px transparent;border-left: solid 2px transparent;position: absolute;left:6px;top:9px;border-color:transparent transparent '
            + settings.backColor + ' ' + settings.backColor  
            + ' ;"></div></td></tr><tr class="row-3"><td style="width: 0;height: 0;position: relative;border-top: solid 15px transparent;border-right: solid 10px transparent;border-bottom: solid 15px transparent;border-left: solid 10px transparent;"></td><td style="width: 0;height: 0;position: relative;border-top: solid 15px transparent;border-right: solid 10px transparent;border-bottom: solid 15px transparent;border-left: solid 10px transparent;"></td><td style="width: 0;height: 0;position: relative;border-top: solid 15px transparent;border-right: solid 10px transparent;border-bottom: solid 15px transparent;border-left: solid 10px transparent;"><div class="bit-div" style="width: 0;height: 0;border-top: solid 3px transparent;border-right: solid 2px transparent;border-bottom: solid 3px transparent;border-left: solid 2px transparent;position: absolute;left:6px;top:-15px;border-color: '
            + settings.backColor 
            + ' transparent transparent '
            + settings.backColor
            + ' ;"></div></td></tr></table></div> '

        	return $(this).append(element).css('position', 'relative');
        });
    }
}(jQuery));
