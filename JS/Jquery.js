
$(document).ready(function(){
  $('.toggle').click(function(){
    $('.toggle').toggleClass('active')
    $('.sidebar').toggleClass('active')
    
  })
})
$(document).ready(function(){
    $('.a').click(function(){
      $('.toggle').removeClass('active')
      $('.sidebar').removeClass('active')
    })
  })