jQuery(document).ready(function(){

    jQuery('.signUp').submit( function() {

        $.ajax({
            url     : $(this).attr('action'),
            type    : $(this).attr('method'),
            data    : $(this).serialize(),
            success : function( data ) {

                    var email = $("#email2").val();
                      if (email != ''){
                      // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-   dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>You've been added to the waitlist! </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#signUp').trigger("reset");

                    }
                    else{ 
                            alert("Please enter at least your email.");
                            location.reload();
                       }
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#signUp').trigger("reset");
                      },
           
        });

        return false;
    });

});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});