<?php

if( empty ($_POST['name'])
    empty($_POST['email'])
    empty($_POST['phone'])
    empty($_POST['message'])
    !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
  {
  	echo "No arguments provided!";
  	return false
  }

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$phone = $_POST["phone"];
 
$EmailTo = "fgme.facturacion@gmail.com";
$Subject = "Nuevo mensaje recibido de Consultores";
 
// prepare email body text
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content -type: text-html; charset:iso-8859-1\r\n";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
 
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

$Body .= "Phone Numeber: ";
$Body .= $phone;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email, $headers);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}
 return true;
?>