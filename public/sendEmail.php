 <?php
ini_set("include_path", '/home3/r58091trad/php:' . ini_get("include_path")); //probably need too configure this
require_once "Mail.php";

// SERVER CONFIG
$host     = "server-0232.whmpanels.com";
$username = "contact@traducator-portugheza.ro";
$password = "add-password-here";

$smtp = Mail::factory('smtp', array(
    'host' => $host,
    'auth' => true,
    'username' => $username,
    'password' => $password
));

//START MAIL CODE HERE
$data = json_decode(file_get_contents('php://input'), true);
$name    = $data['name'];
$from   = $data['email'];
$message = $data['message'];
$subject = "[Via Website]". $data['subject'];

$sender = "messages-noreply@traducator-portugheza.ro";
$fromFormatted = $name. " <". $from . ">";
$to = "contact@traducator-portugheza.ro";
$date = date('r', time());

$headers = array(
    'Sender'     => $sender,
    'From'       => $fromFormatted,
    'Reply-To'   => $from,
    'To'         => $to,
    'Subject'    => $subject,
    'Date'       => $date
);

$mail    = $smtp->send($to, $headers, $message);

if (PEAR::isError($mail)) {
    echo ($mail->getMessage());
} else {
    echo (200);
}
