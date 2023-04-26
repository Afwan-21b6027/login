<?php
    require('db.php');

    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // TODO: Create Validation!
    $sql_insert = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

    if (mysqli_query($conn, $sql_insert)) {
        echo "<script> 
            alert('Successfully registered!'); 
            </script>";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
?>