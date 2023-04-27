<?php
    require('db.php');

    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $encrypted_pw = password_hash($password, PASSWORD_DEFAULT);

    // ! Validation of input have been stored inside valid-regis.js
    $sql_insert = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$encrypted_pw')";

    if (mysqli_query($conn, $sql_insert)) {
        echo "<script> 
            alert('Successfully registered!'); 
            </script>";
        header("Location: welcome.php");
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
?>