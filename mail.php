
<?php

$method = $_SERVER["REQUEST_METHOD"];

//Script Foreach

if ( $method === "POST" ) {

	// $project_name = trim($_POST["project_name"]);
	// $admin_email  = trim($_POST["admin_email"]);
	// $form_subject = trim($_POST["form_subject"]);

	$user_name = trim($_POST["user_name"]);
	$user_phone = trim($_POST["user_phone"]);
	$user_message = trim($_POST["user_message"]);

	$message = '<!DOCTYPE html>
	<html lang="ru">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>
	<body>
		<table style="width: 100%;">
									<tr style="background-color: #f8f8f8;">
											  <td style="padding: 10px; border: #e9e9e9 1px solid;"><b>імя клієнта</b></td>
											  <td style="padding: 10px; border: #e9e9e9 1px solid;">'. $user_name .'</td>
									</tr>
	
									<tr>
											  <td style="padding: 10px; border: #e9e9e9 1px solid;"><b>телефон клієнта</b></td>
											  <td style="padding: 10px; border: #e9e9e9 1px solid;">'. $user_phone .'</td>
									</tr>
	
									<tr style="background-color: #f8f8f8;">
											  <td style="padding: 10px; border: #e9e9e9 1px solid;"><b>повідомлення</b></td>
											  <td style="padding: 10px; border: #e9e9e9 1px solid;">'. $user_message .'</td>
									</tr>
									</table>
	
	</body>
	</html>';
	

	$headers = "MIME-Version: 1.0" . "\r\n"; 
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	
	mail("gavrikviktor@ukr.net", "test", $message, $headers);
	
}



