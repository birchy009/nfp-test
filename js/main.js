// Hide the extra content initially, using JS so that if JS is disabled, no problemo.
$('.read-more-content').addClass('hide');

// Set up the toggle.
$('.read-more-toggle').on('click', function() {
  $(this).next('.read-more-content').toggleClass('hide');
});

// Hide the extra content initially, using JS so that if JS is disabled, no problemo:
$('.read-more-content1').addClass('hide')

// Set up a link to expand the hidden content:
.before('<a class="read-more-show" href="#">Read More</a>')
  
// Set up a link to hide the expanded content.
.append(' <a class="read-more-hide" href="#">Read Less</a>');

// Set up the toggle effect:
$('.read-more-show').on('click', function(e) {
  $(this).next('.read-more-content1').removeClass('hide');
  $(this).addClass('hide');
  e.preventDefault();
});

$('.read-more-hide').on('click', function(e) {
  $(this).parent('.read-more-content1').addClass('hide').parent().children('.read-more-show').removeClass('hide');
  e.preventDefault();
});

//info found at http://codepen.io/JoshBlackwood/pen/tDsEh