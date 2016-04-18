$(document).ready(function(){

	/* navbar scrolls to top then gets fixed to top */
	$('#primary-nav').scrollToFixed();
	setChangeStateOnScroll();
	setScrollWhenClicked();

	setUpWorkNav();
	// indexOrProjectPageNav();
	setActiveOnSecondaryNav()
  

});

// function indexOrProjectPageNav() {
// 	if ( $('.page-project').length > 0 ) {
//     var liaArray = $('li[role="presentation"] > a');

//     for (var i = 0; i < liaArray.length; i++) {
//     	var thisA = $(liaArray[i]);
//     			currentHref = $(liaArray[i]).attr('href');
//     			newHref = '/' + currentHref;

//     	thisA.attr('href', newHref);
//     }  
//   } 
// }


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

function setActiveOnSecondaryNav() {
	var fullPath = window.location.pathname,
			partPath = fullPath.replace('/projects/', '');

			//TODO:
}

function setScrollWhenClicked() {
	var sections = $('section.homepage'), 
		nav = $('#primary-nav'),
		nav_height = nav.outerHeight();

	nav.find('a').on('click', function () {
	  var $el = $(this), 
	  		id = $el.attr('href');
	  
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


