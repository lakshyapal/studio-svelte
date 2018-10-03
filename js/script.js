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