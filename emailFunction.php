<?php
// Set your email address
$myemail = "elliottwclark@gmail.com";
$errors = '';

// Validate required fields
if (empty($_POST['from_name']) || empty($_POST['from_email']) || empty($_POST['message'])) {
    $errors .= "\n Error: all fields are required";
}

$name = isset($_POST['from_name']) ? $_POST['from_name'] : '';
$email_address = isset($_POST['from_email']) ? $_POST['from_email'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';

// Validate email address
if (!preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email_address)) {
    $errors .= "\n Error: Invalid email address";
}

if (empty($errors)) {
    $to = $myemail;
    $email_subject = "Contact form submission: $name";
    $email_body = "You have received a new message. ".
        "Here are the details:\n Name: $name \n ".
        "Email: $email_address\n Message \n $message";
    $headers = "From: $myemail\n";
    $headers .= "Reply-To: $email_address";
    mail($to, $email_subject, $email_body, $headers);
}
?>