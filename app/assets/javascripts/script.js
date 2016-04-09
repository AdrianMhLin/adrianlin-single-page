$(document).ready(function(){

	/* navbar scrolls to top then gets fixed to top */
	$('#primary-nav').scrollToFixed();
	setChangeStateOnScroll();
	setScrollWhenClicked();

	setUpWorkNav();

});


function setChangeStateOnScroll() {
	var sections = $('section.homepage'), 
			nav = $('#primary-nav'),
			nav_height = nav.outerHeight();
 
	$(window).on('scroll', function () {
	  var currentPosition = $(this).scrollTop();
	 
	  sections.each(function() {
	    var top = $(this).offset().top - nav_height,
	        bottom = top + $(this).outerHeight();
	 
	    if (currentPosition >= top && currentPosition <= bottom) {
	      nav.find('a').removeClass('nav-active');
	      sections.removeClass('nav-active');
	 
	      $(this).addClass('nav-active');
	      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('nav-active');
	    }
	  });
	});
}

function setScrollWhenClicked() {
	var sections = $('section.homepage'), 
		nav = $('#primary-nav'),
		nav_height = nav.outerHeight();

	nav.find('a').on('click', function () {
	  var $el = $(this), 
	  		id = $el.attr('href' + '-start');
	  
	  $('html, body').animate({
	    scrollTop: $(id).offset().top - nav_height
	  }, 500);


	  return false;
	});
}




function setUpWorkNav(){
	var workNavLi = $('#work-nav li'),
			projectSamples = $('#project-samples'),
			skillSamples = $('#skill-samples');

	projectSamples.hide();

	workNavLi.on('click', function(){
		workNavLi.removeClass('active');
		$(this).addClass('active');
	});

	$('#project-tab').on('click', function(){
		projectSamples.show();
		skillSamples.hide();
	});

	$('#skill-tab').on('click', function(){
		skillSamples.show();
		projectSamples.hide();
	});

}


