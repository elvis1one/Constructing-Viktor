<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail-> IsHTML(true);

$mail->setFrom('користувач твого сайту');
$mail->addAddress('aleksejkuralesov@gmail.com');

if(trim(!empty($_POST['input']))){
	$body.='<p><strong>повідомлення:</strong> '$_POST['input'].'</p>';
}

$mail->Body = $body;

if (!$mail)->send() {
	$message = 'Помилка';
} else {
	$message = 'Повідомлення відправлено!';
}
$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);