$(document).ready(function(){

	/* navbar scrolls to top then gets fixed to top */
	$('#primary-nav').scrollToFixed();
	setChangeStateOnScroll();

});


function setChangeStateOnScroll() {
	var sections = $('section.homepage'), 
	nav = $('#primary-nav'),
	nav_height = nav.outerHeight();
 
	$(window).on('scroll', function () {
	  var cur_pos = $(this).scrollTop();
	 
	  sections.each(function() {
	    var top = $(this).offset().top - nav_height,
	        bottom = top + $(this).outerHeight();
	 
	    if (cur_pos >= top && cur_pos <= bottom) {
	      nav.find('a').removeClass('nav-active');
	      sections.removeClass('nav-active');
	 
	      $(this).addClass('nav-active');
	      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('nav-active');
	    }
	  });
	});
}

