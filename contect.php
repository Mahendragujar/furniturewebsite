<?php



error_reporting(E_ALL);
ini_set('display_errors', 1);


$host = "localhost";
$username = "root";
$password = "";
$database = "furniture_db";


$con = new mysqli($host, $username, $password, $database);


if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}


if (isset($_POST['fname1'], $_POST['fname2'], $_POST['email'], $_POST['message'])) {
    $first_name = $_POST['fname1'];
    $last_name = $_POST['fname2'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    
    $sql = "INSERT INTO contact_form (first_name, last_name, email, message) VALUES (?, ?, ?, ?)";
    $stmt = $con->prepare($sql);
    $stmt->bind_param("ssss", $first_name, $last_name, $email, $message);
    
    if ($stmt->execute()) {
        echo "<h2 style='color:green;'> Thank you! Your message has been sent.</h2>";
    } else {
        echo "<h2 style='color:red;'> Something went wrong while saving to the database.</h2>";
    }

    $stmt->close();
} else {
    echo "<h2 style='color:red;'> Form data not received properly.</h2>";
}

$con->close();
?>
