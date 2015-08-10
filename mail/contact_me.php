<?php



$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
	
// create email body and send it	
$to = 'team@quotail.co'; // *REPLACE WITH THE EMAIL ADDRESS YOU WANT THE FORM TO SEND MAIL TO*
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\nMessage:\n$message";
$headers = "From: noreply@YOUR-DOMAIN.com\n"; // *REPLACE WITH THE EMAIL ADDRESS YOU WANT THE MESSAGE TO BE FROM*
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers) or die("Error!");
//header('Location: http://quotail.co/');


?>