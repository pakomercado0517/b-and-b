<?php

// const DEFAULT_URL = 'https://b-and-b-709c2.firebaseio.com';
// const DEFAULT_TOKEN = 'a67bfd48a89ddb2acef483b54d698ee7f0be9323';
// const DEFAULT_PATH = '/firebase/b-and-b-709c2';

// $firebase= new \Firebase\FirebaseLib(DEFAULT_URL, DEFAULT_TOKEN)
// $firebase->set(DEFAULT_PATH, name,email,phone,message);

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
$success = mail($EmailTo, $Subject, $Body, "From:"$email);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}
 return true;
?>