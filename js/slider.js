jQuery(document).ready(function($){
	$('.section').each(function(){
		var id = 'section-thumbs-'+$(this).attr('id');
		//$('.desc',this).after('<ul id="'+ id +'">');
		$('.featured-image',this).cycle({ 
			speed:  'fast', 
			timeout: 0, 
			pager:  '#'+id,
			next: $('.featured-image',this),
     
			// callback fn that creates a thumbnail to use as pager anchor 
			//pagerAnchorBuilder: function(idx, slide) { 
			//	return '<li><a href="#"><img src="' + slide.src + '" height="133" /></a></li>'; 
			//} 
		});
	});
});