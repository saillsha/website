<?php 


if(empty($_POST['email'])||!filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No Email Provided!";
	return false;
   }

$email = $_POST['email'];
$formcontent="From: $email \n Message: Add user to email list";
$recipient = "quotail.llc@gmail.com";
$subject = "Beta Sign Up";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
//header('Location: http://quotail.co/');
?>