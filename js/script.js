$(document).ready(()=>{

	let menutoggle=true;

    $('.toggle-mt').click( ()=> {
    	
    	$('.sidebar').toggle('show');

    	if(menutoggle) {
    		
    		$('.toggle-mt').html('<i class="fa fa-times" aria-hidden="true"></i>')
    		
    		menutoggle=false	

    	}else{
    		 
    		 $('.toggle-mt').html('<i class="fa fa-bars" aria-hidden="true"></i>') 

    		 menutoggle=true
    	}  
    	
    	
    });

    if(window.innerWidth < 576){

    	$('#img-mt').attr('src','assets/logo-small.png')
      $('.searchdiv').css('display','none')
    	
    }

});


var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});

// parallax
/*
$('.img-holder').imageScroll({

    image: null,
    imageAttribute: 'image',
    container: $('body'),
    speed: 0.2,
    coverRatio: 0.75,
    holderClass: 'imageHolder',
    holderMinHeight: 200,
    extraHeight: 0,
    mediaWidth: 1600,
    mediaHeight: 400,
    parallax: true,
    touch: false

});

*/

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}