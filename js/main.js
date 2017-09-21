$(document).ready(function(){
  setupNav();


  $(".about-button").click(scrollToAbout);
  $(".brands-button").click(scrollToBrands);
  $(".distribution-button").click(scrollToDistribution);
  $(".team-button").click(scrollToTeam);
  $(".contact-button").click(scrollToContact);
  $(".home-button").click(scrollToHome);



function setupNav() {
  var stickyNavTop = $('.main-nav').offset().top;

  var stickyNav = function(){
  var scrollTop = $(window).scrollTop();

  if (scrollTop > stickyNavTop) {
      $('.main-nav').addClass('sticky');
  } else {
      $('.main-nav').removeClass('sticky');
  }
  };

  $(window).scroll(function() {
    stickyNav();
  })

};

function scrollToAbout(event){
  event.preventDefault();
  $(window).scrollTo($('#scrollToAbout'), 2000);
}

function scrollToBrands(event){
  event.preventDefault();
  $(window).scrollTo($('#scrollToBrands'), 2000);
}

function scrollToDistribution(event){
  event.preventDefault();
  $(window).scrollTo($('#scrollToDistribution'), 2000);
}

function scrollToTeam(event){
  event.preventDefault();
  $(window).scrollTo($('#scrollToTeam'), 2000);
}

function scrollToContact(event){
  event.preventDefault();
  $(window).scrollTo($('#scrollToContact'), 2000);
}

function scrollToHome(event){
  event.preventDefault();
  $(window).scrollTo($('#scrollToHome'), 2000);
}

$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});




});
