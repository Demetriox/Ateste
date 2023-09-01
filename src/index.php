<?php
header("Access-control-Allow-Origin: *");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

var_dump("11111111");
//get referer server 
if($_SERVER['HTTP_REFERER'] === "http://localhost/3000/Contacto?"){
    $name = isset($_GET['name']) ? $_GET['name'] : null;
    $last = isset($_GET['last']) ? $_GET['last'] : null;
    $email = isset($_GET['mail']) ? $_GET['mail'] : null;
    $msg = isset($_GET['msg']) ? $_GET['msg'] : null;

    if($name && $email && $last && $msg){
        require '../vendor/autoload.php';

        $mail = new PHPMailer(true);
        try {
            //Server settings
            $mail->isSMTP();                                            // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = 'vetafirebase@gmail.com';                     // SMTP username
            $mail->Password   = 'vetaTall#r123';                               // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
        
            //Recipients
            $mail->setFrom('vetafirebase@gmail.com', 'React Form');
            $mail->addAddress($email);               // Name is optional
            $mail->addReplyTo('vetafirebase@gmail.com', 'Information');
        
            // Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'React Form';
            $mail->Body    = 'Name: '. $name .'<br /> Email: '. $email. '<br /> <b> Message </b>'. $message;
        
            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }

    } else {
        echo 'All the fields are required!';
    }
} else {
    echo "You can't use this server"
}

?>