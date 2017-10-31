jQuery(document).ready(function($) {
	var len = jQuery('.slider-item').length;
	for(var i=0,j=-Math.floor(len/2);i<len;i++){
		jQuery('.slider-item:eq('+ i +')').attr('data-index', (j++));
	}
});

jQuery('.circular-slider-prev').click(function() {
	for(var i=-2;i<=2;i++){
		jQuery('[data-index="'+ (i) +'"]').attr('data-index', (i-1));
	}
	jQuery('[data-index="-3"]').attr('data-index', '2');
});

jQuery('.circular-slider-next').click(function() {
	for(var i=2;i>=-2;i--){
		jQuery('[data-index="'+ (i) +'"]').attr('data-index', (i+1));
	}
	jQuery('[data-index="3"]').attr('data-index', '-2');
});

jQuery('.slider-item').click(function() {
	var click_index = jQuery(this).attr('data-index');
	if(click_index<0){
		for(var i=-2;i<=2;i++){
			jQuery('[data-index="'+ (i) +'"]').attr('data-index', (i-1));
		}
		jQuery('[data-index="-3"]').attr('data-index', '2');
	}else if(click_index>0){
		for(var i=2;i>=-2;i--){
			jQuery('[data-index="'+ (i) +'"]').attr('data-index', (i+1));
		}
		jQuery('[data-index="3"]').attr('data-index', '-2');
	}
});