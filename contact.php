<?php
if($_POST) {

    $nombre = $_POST['nombre'];
    $email = $_POST['email'];;
    $pais = $_POST['pais'];;
    $telefono = $_POST['telefono'];;
    $areaContacto = $_POST['areaContacto'];;
    $comment = $_POST['comment'];

}

//    if(isset($_POST['nombre'])) {
//      $nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_STRING);
//    }
//
//    if(isset($_POST['email'])) {
//        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
//        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
//    }
//
//    if(isset($_POST['comment'])) {
//        $comment = htmlspecialchars($_POST['comment']);
//    }
    $recipient="contacto@corporacioncapsula.io";


//    $headers  = 'MIME-Version: 1.0' . "\r\n"
//    .'Content-type: text/html; charset=utf-8' . "\r\n"
//    .'From: ' . $email . "\r\n";

$headers = 'From: '.$email . "\r\n" .
    'Reply-To: contacto@corporacioncapsula.io' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if(mail($recipient, $comment, $headers)) {
        echo "<p>Gracias por contactarnos, $name.</p>";
        echo "<meta http-equiv='refresh' content='5;url=index.html'>"
    } else {
        echo "<p>Te pedimos disculpas. El mensaje no pudo ser entregado</p>";
        echo "<meta http-equiv='refresh' content='5;url=index.html'>"
    }

} else {
    echo '<p>Algo salió mal</p>';
    echo "<meta http-equiv='refresh' content='5;url=index.html'>"
}

?>