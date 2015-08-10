jQuery(document).ready(function(){

    jQuery('.ajaxform').submit( function() {

        $.ajax({
            url     : $(this).attr('action'),
            type    : $(this).attr('method'),
            data    : $(this).serialize(),
            success : function( data ) {
                      var email = $("#email").val();
                      if (email != ''){
                         $("#contactForm").fadeOut(function()
                            { 
                               $("#message").show("slow");
                            });
                         }
                      else{ 
                            alert("Incorrect entry, please try again");
                            location.reload();
                       }

                      },
            error   : function(){
                         alert('Oops something went wrong');
                      }
        });

        return false;
    });

});