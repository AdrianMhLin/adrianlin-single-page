$(document).ready(function(){



	
	removeSlashFromMainPageHrefs();

	/* navbar scrolls to top then gets fixed to top */
	$('#primary-nav').scrollToFixed();
	setChangeStateOnScroll();
	setScrollWhenClicked();

	setUpWorkNav();
	// indexOrProjectPageNav();
	setActiveOnSecondaryNav();
  


  	
  
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

// function init(){
	//TODO	
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

function removeSlashFromMainPageHrefs() {
	// when the navbar is clicked, check if page is homepage and if not, add '/' to the front of the href. this means that i can have one nav partial and have my links go to the main page when on other pages, but stay on teh same page if its the main page already, so it doesnt refresh but rather scrolls. this works with setScrollWhenClicked.
    const 	PRIMARY_NAV = $('#primary-nav');
    const	MY_DOMAIN_NAME = 'localhost:3000/';

    PRIMARY_NAV.find('a').on('click', function(){
    	let pageUrl = $(location).attr('href').replace('http://', '').replace('https://', ''),
    		thisLink = $(this);

    	if (pageUrl === MY_DOMAIN_NAME) {
    		let currentHref = thisLink.attr('href'),
    			newHref = currentHref.slice(1);

    		thisLink.attr('href', newHref);
    	}
 
    });
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


