window.addEventListener('load', () => {
  console.log('Ironmaker app started successfully!');
}, false);

$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});