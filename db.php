<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "login_registration";
    $tableName = "users";

    $conn = new mysqli($servername, $username, $password, $database);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
?>