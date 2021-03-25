<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];


// Формирование самого письма
$title = "Новое обращение - Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<b>Сообщение:</b><br>$message<br>
";
// Формирование самого письма
$title1 = "Subscribe to our 
 NEWSLETTER";
$body1 = "
<h2>Подписка</h2>
<b>Email:</b><br>$email<br>
";


$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};


    $mail->Host       = 'smtp.gmail.com';
    $mail->Username   = 'plushbunnyby@gmail.com'; 
    $mail->Password   = 'MikeVenya'; 
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('plushbunnyby@gmail.com', 'Михаил Трофимчук');

    $mail->addAddress('mihatr2002@gmail.com');  
   

    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

if($name!= NULL)
{
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;
}
if($email!= NULL)
{
    $mail->isHTML(true);
    $mail->Subject = $title1;
    $mail->Body = $body1; 
}

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
header('Location: thankyou.html');