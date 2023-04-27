<?php
    include('db.php');

    session_start();

    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql_search = "SELECT * FROM users WHERE username='$username'";
    $result = mysqli_query($conn, $sql_search);

    $row = mysqli_fetch_assoc($result);


    if (password_verify($password, $row['password'])){
        echo "<script> 
            alert('User Found!'); 
            </script>";
        $_SESSION['username'] = $username;
        header("Location: welcome.php");
    } else {
        echo "<script> 
            alert('Account is not found!'); 
            </script>";
        header("Location: index.html");
    }
?>